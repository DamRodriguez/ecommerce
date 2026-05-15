import SpaceX from "@/components/layout/SpaceX";
import CustomImage from "@/components/other/CustomImage";
import AnimatedTextButton from "@/components/ui/buttons/AnimatedTextButton";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function SocialSection() {
  const imageItems = [
    {
      id: "1",
      href: "",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCx60JFSd_lPNQHnlLDy-9K72DkLBgfbAFZHP_gCyzF_mOXnoFleeg-HnHGdCDwq5eROt1mnULNnc9pUgupqDUex2krzkHPpwTn8s4dp9EXv0ZUE_lH9f6YgKajkEMVI5QLIWcaSAtJdjgwZauynggR0XkZugQ4n2h3ypRsU0V0j46Mu6k-Wf2JpmRnhQcnhAtydOSZQqyp8gCUmOrh_O4Ohyic3sbNWPDy6NNiJyWDf58gSvVnsKe8Th9AqFDvuOyjYbeFIP4KCXGm",
      icon: <ExternalLink />,
    },
    {
      id: "2",
      href: "",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCcKI1i74trEt6F4rMwFilmM08TxpD-KOX9F9ybViedq_b0lzZRfNKU_EhNZ3Pe5brARuiRV2sruzWy_FhycviK09_BA2zRbDhcTtqiRyOW769XbFGTOBA-SsCVkxG0llryMFNm0FBGNCTyTa5hIGcfA9FhDq5iJQWnNJksohM4dXm330RqxX6X1TQeHSvUDiGW0naNHMXHee-4PbSBDcKPhSo4vhjmMm3ir96Y9_nGwpEDQWAVsQQu_x1Kwee-zM3_0FsW6Hu4UHtx",
      icon: <ExternalLink />,
    },
    {
      id: "3",
      href: "",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAN3OnBfyZS86lnrJqShgYQeUcN-iXLS6PHkNaSHpZXNMIvxd8cvs7JMlNDRTxHtZJLRVrtJg__ymRT6ViuyYuZMPPyvP1eG1391PqxgsV-MWWqP-cQmWeU2e8_3sYrYPDG3mIEC7RFc28rYPobx81UhnNnUV7Gck55YH13tyCbjHKrQbD8ktq0oeLa6Bij07vIt0zeXll-XRAGekCgRIp5yZipfbojn3rVlLNULcq2xkKEouNxFc0XQEgnIJ7_aOZy7jhxPm3zOtq8",
      icon: <ExternalLink />,
    },
    {
      id: "4",
      href: "",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCkgF_EyeqOJlGbDISymt9bDWGXP6zDsdVJf5gBps1NfYuyBumls2y9aG-UfX6ZUrateEHi9kCIMRSUBpMfzph9Hjv_jWwR1ySkg9X2c4Vu1CtlCiXqgC5XSNw-AKu1fKN6BvEE1xCZtU1wZ6N8RPa3Tn_RvBFJ8JStmXcjbEMhUvo8_mZ0Mm42Hg9yqgz3PaiUUio_bm4GhARBigcyuUmVn9cV0jF_l68TgRdbymzU4xE2F_7mjohianG3x1cD_Fpu7_xwmfnHRkpU",
      icon: <ExternalLink />,
    },
  ];

  return (
    <section className="bg-surface">
      <SpaceX className="py-margin-mobile lg:py-margin-desktop flex flex-col sm:flex-row justify-between items-start sm:items-end gap-md">
        <div>
          <h2 className="text-2xl font-semibold leading-[1.4] text-on-surface uppercase">
            Redes
          </h2>
          <p className="text-base leading-[1.6] text-on-surface mt-sm">
            @ARCHITECT_STUDIO
          </p>
        </div>
        <AnimatedTextButton text="síguenos" href="#" />
      </SpaceX>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {imageItems.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className="block aspect-square relative group overflow-hidden"
          >
            <CustomImage
              src={item.image}
              fill
              alt={`Imágen Red ${item.id}`}
              className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 object-cover custom-transition-all group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-on-surface/0 group-hover:bg-on-surface/20 flex items-center justify-center opacity-0 group-hover:opacity-100 [&_svg]:w-10 [&_svg]:h-10 [&_svg]:stroke-surface custom-transition-all ">
              {item.icon}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
