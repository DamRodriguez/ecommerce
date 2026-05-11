import { InstagramIcon, WhatsAppIcon } from "@/components/icons/social";
import config from "@/config/config";
import Link from "next/link";

const SocialButtons = () => {
  const socialItems = [
    { href: config.urls.whatsApp, icon: <WhatsAppIcon /> },
    { href: config.urls.instagram, icon: <InstagramIcon /> },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-[1.5rem] [&_svg]:fill-surface [&_svg]:w-6 [&_svg]:h-6">
      {socialItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          target="_blank"
          className="w-[4rem] h-[3rem] flex items-center justify-center bg-on-surface"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialButtons;
