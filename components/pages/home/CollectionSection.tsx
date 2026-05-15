import SpaceX from "@/components/layout/SpaceX";
import CustomImage from "@/components/other/CustomImage";
import LinkButton from "@/components/ui/buttons/LinkButton";
import { ArrowRight } from "lucide-react";

export default function CollectionSection() {
  return (
    <section className="w-full bg-surface-bright flex flex-col lg:flex-row border-b border-outline">
      <SpaceX className="w-full lg:w-2/5 py-vertical-mobile lg:py-vertical-desktop flex flex-col justify-between">
        <div>
          <span className="font-accent text-xs font-medium tracking-[0.1em] uppercase text-on-surface mb-md block">
            EDITORIAL
          </span>
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-[-0.01em] leading-[1.3] text-on-surface mb-lg uppercase">
            El Protocolo
            <br />
            Obsidiana
          </h2>
          <p className="text-lg leading-[1.6] text-on-surface mb-xl">
            Un estudio de densidad y sustracción de materiales. La nueva
            colección elimina lo superfluo para revelar el núcleo esencial de la
            utilidad moderna.
          </p>
        </div>
        <LinkButton href="#" customUppercase variant="tertiary">
          <p>Explorar Colección</p>
          <ArrowRight />
        </LinkButton>
      </SpaceX>
      <div className="w-full lg:w-3/5 min-h-[20rem] relative overflow-hidden">
        <CustomImage
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT2Sb75R-XxU4T-y2RmhZlf1ImGu2FCaCZO4wAmLPdfBTyfUENWbFgyKUKALc2h2kVcekUTyzKXM3cFrXvpM5Hx1gbEKCaudxoUzmQ9hSdYsOl0n0sTJnS_uisD5YEv3SyBeSrS6eBU9l2cegq9tJN6xu4cgN9KxtA4ldgQi7pREPnTIdIKrUuBvRRxK2DZf_ptNUSNfKV6lriN_M6GgHh_GI3qp9vU4bNW9ngq_Uv6jtyo6YsHmnCtw_b6ZiobYS2hwixPIXopQ_5"
          alt="Editorial Image"
          fill
          className="absolute inset-0 w-full h-full object-cover hover:scale-110 custom-transition-all"
        />
      </div>
    </section>
  );
}
