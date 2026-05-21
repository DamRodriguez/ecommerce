"use client";
import NavMobile from "@/components/layout/header/NavMobile";
import SpaceX from "@/components/layout/SpaceX";
import MotionSlide from "@/components/motion/MotionSlide";
import Drawer from "@/components/other/Drawer";
import useCloseMobileNavOnDesktop from "@/hooks/useCloseMobileNavOnDesktop";
import { useState } from "react";
import LeftItem from "./LeftItem";
import NavDesk from "./NavDesk";
import RightSection from "./RightSection";

const Header = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  useCloseMobileNavOnDesktop({ setIsMobileNavVisible });

  return (
    <header>
      <MotionSlide
        direction="up"
        className="z-9999 fixed top-0 w-full min-w-[20rem] max-w-[120rem]"
      >
        <SpaceX className="bg-surface-bright/85 backdrop-blur-[0.3rem] border-b border-b-on-surface/15 min-h-header-mobile xl:min-h-header-desktop flex items-center justify-between">
          <LeftItem
            onClick={() => {
              if (isMobileNavVisible) {
                setIsMobileNavVisible(false);
              }
            }}
          />
          <NavDesk />
          <RightSection
            isMobileNavVisible={isMobileNavVisible}
            setIsMobileNavVisible={setIsMobileNavVisible}
          />
        </SpaceX>
      </MotionSlide>

      <Drawer
        visible={isMobileNavVisible}
        onClose={() => {
          setIsMobileNavVisible(false);
        }}
        position="top"
        closeButton={null}
        className="pb-[7rem] bg-surface-bright mt-header-mobile xl:hidden"
      >
        <NavMobile
          onClose={() => {
            setIsMobileNavVisible(false);
          }}
        />
      </Drawer>
    </header>
  );
};

export default Header;
