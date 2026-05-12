import { InstagramIcon, WhatsAppIcon } from "@/components/icons/social";
import config from "@/config/config";
import Link from "next/link";

const SocialButtons = () => {
  const socialItems = [
    { href: config.urls.whatsApp, icon: <WhatsAppIcon /> },
    { href: config.urls.instagram, icon: <InstagramIcon /> },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-[3rem] [&_svg]:fill-on-surface [&_svg]:w-7 [&_svg]:h-7">
      {socialItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          target="_blank"
          className="flex items-center justify-center"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialButtons;
