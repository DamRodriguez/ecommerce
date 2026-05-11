"use client";
import clsx from "clsx";
import { Image as ImageIcon, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";

export type LocalFileWithPreview = File & {
  id: string;
  preview: string;
  isRemote?: false;
};

export type RemoteFileWithPreview = {
  id: string;
  preview: string;
  isRemote: true;
};

export type FileWithPreview = LocalFileWithPreview | RemoteFileWithPreview;

export type InputDragFileProps = {
  className?: string;
  value?: File | File[] | string | string[] | null;
  onChange?: (value: any) => void;
  text?: string;
  type?: "image" | "video";
  error?: boolean;
  multiple?: boolean;
};

const generateId = () => crypto.randomUUID();
const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

const createLocalFileWithPreview = (file: File): LocalFileWithPreview => {
  return Object.assign(file, {
    id: generateId(),
    preview: URL.createObjectURL(file),
    isRemote: false as const,
  });
};

const createRemoteFileWithPreview = (url: string): RemoteFileWithPreview => {
  return {
    id: generateId(),
    preview: url,
    isRemote: true,
  };
};

export const InputDragFile = ({
  className,
  onChange,
  text,
  type = "image",
  error,
  multiple = false,
  value,
}: InputDragFileProps) => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [sizeError, setSizeError] = useState<string | null>(null);

  const mimeMap = {
    image: { "image/*": [] },
    video: { "video/*": [] },
  };

  useEffect(() => {
    if (!value) {
      setFiles([]);
      return;
    }

    const normalize = (v: File | string | FileWithPreview): FileWithPreview => {
      if (typeof v === "string") {
        return createRemoteFileWithPreview(v);
      }

      if (v instanceof File) {
        const fileWithMaybePreview = v as LocalFileWithPreview;

        if (fileWithMaybePreview.preview && fileWithMaybePreview.id) {
          return fileWithMaybePreview;
        }

        return createLocalFileWithPreview(v);
      }

      return v;
    };

    if (Array.isArray(value)) {
      setFiles(value.map(normalize));
    } else {
      setFiles([normalize(value)]);
    }
  }, [value]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: mimeMap[type],
    multiple,
    onDrop: (acceptedFiles) => {
      const oversizedFiles = acceptedFiles.filter(
        (file) => file.size > MAX_FILE_SIZE,
      );

      if (oversizedFiles.length > 0) {
        setSizeError(
          `Archivo muy grande. Máximo 50MB. Archivos: ${oversizedFiles
            .map((f) => f.name)
            .join(", ")}`,
        );
        return;
      }

      setSizeError(null);

      const mappedFiles = acceptedFiles.map(createLocalFileWithPreview);

      const newFiles = multiple ? [...files, ...mappedFiles] : mappedFiles;

      setFiles(newFiles);

      if (onChange) {
        const output = multiple
          ? newFiles.map((file) => (file.isRemote ? file.preview : file))
          : newFiles[0]?.isRemote
            ? newFiles[0].preview
            : newFiles[0];

        onChange(output);
      }
    },
  });

  useEffect(() => {
    return () => {
      files.forEach((file) => {
        if (!file.isRemote && file.preview) {
          URL.revokeObjectURL(file.preview);
        }
      });
    };
  }, [files]);

  const removeFile = (fileToRemove: FileWithPreview, e: React.MouseEvent) => {
    e.stopPropagation();

    const newFiles = files.filter((file) => file.id !== fileToRemove.id);

    setFiles(newFiles);

    if (onChange) {
      const output =
        newFiles.length === 0
          ? multiple
            ? []
            : null
          : multiple
            ? newFiles.map((file) => (file.isRemote ? file.preview : file))
            : newFiles[0].isRemote
              ? newFiles[0].preview
              : newFiles[0];

      onChange(output);
    }
  };

  const hasFiles = useMemo(() => files.length > 0, [files]);

  const itemColor = (typeToColor: "icon" | "text") => {
    const isIcon = typeToColor === "icon";

    if (hasFiles) return isIcon ? "fill-on-surface" : "text-on-surface";
    if (error) return isIcon ? "fill-red" : "text-red";

    return isIcon ? "fill-secondary-text" : "text-secondary-text";
  };

  return (
    <div
      {...getRootProps({
        className: clsx(
          "h-auto min-h-[8.875rem] py-[1.25rem] px-4 cursor-pointer flex flex-col items-center justify-center custom-transition-all",
          className,
          {
            "bg-red/5": error,
            "bg-secondary-text/20": isDragActive,
            "bg-[url('data:image/svg+xml,%3csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3e%3crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%20rx%3D%228%22%20ry%3D%228%22%20stroke%3D%22%23333%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%2238%2C12%22%20stroke-dashoffset%3D%222%22%20stroke-linecap%3D%22square%22/%3e%3c/svg%3e')]":
              !error && !isDragActive,
          },
        ),
      })}
    >
      <input {...getInputProps()} />

      <div className="flex gap-[0.5rem] items-center justify-center mb-4">
        <p
          className={clsx("text-sm xl:text-base font-bold", itemColor("text"))}
        >
          {sizeError
            ? sizeError
            : files.length > 1
              ? `${files.length} archivos seleccionados`
              : files.length === 1
                ? "1 archivo seleccionado"
                : text}
        </p>

        <ImageIcon className={clsx(itemColor("icon"), "w-6 h-6")} />
      </div>

      {files.length > 0 && (
        <div className="flex flex-wrap gap-4 justify-center w-full">
          {files.map((file) => (
            <div key={file.id} className="relative w-28 h-28">
              <div className="relative overflow-hidden group w-full h-full">
                <Image
                  src={file.preview}
                  alt="preview"
                  fill
                  className="object-cover bg-secondary-text"
                  sizes="112px"
                />

                <button
                  type="button"
                  onClick={(e) => removeFile(file, e)}
                  className="absolute top-1 right-1 bg-on-surface text-surface rounded-full w-7 h-7 flex items-center justify-center cursor-pointer hover:bg-on-surface/80 xl:opacity-0 group-hover:opacity-100 custom-transition-all border border-surface/40 hover:border-surface"
                >
                  <X className="fill-surface w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
