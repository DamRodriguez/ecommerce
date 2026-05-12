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
    <header className="sticky top-0 z-9999">
      <MotionSlide direction="up">
        <SpaceX className="sticky z-9999 bg-surface-bright/85 backdrop-blur-[0.3rem] border-b border-b-on-surface/15 h-header flex items-center justify-between">
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
        className="pb-[7rem] bg-surface-bright mt-[var(--header-height-mobile)] xl:hidden"
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
