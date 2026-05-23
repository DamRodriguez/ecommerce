"use client";
import CartSection from "@/components/cart/CartSection";
import LeftItem from "@/components/layout/header/LeftItem";
import NavDesk from "@/components/layout/header/NavDesk";
import NavMobile from "@/components/layout/header/NavMobile";
import RightSection from "@/components/layout/header/right-section/RightSection";
import SpaceX from "@/components/layout/SpaceX";
import MotionSlide from "@/components/motion/MotionSlide";
import Drawer from "@/components/other/Drawer";
import useCloseMobileNavOnDesktop from "@/hooks/useCloseMobileNavOnDesktop";
import { useState } from "react";

const Header = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState<boolean>(false);
  const [isCartVisible, setIsCartVisible] = useState<boolean>(false);
  useCloseMobileNavOnDesktop({ setIsMobileNavVisible });

  return (
    <header>
      <MotionSlide
        direction="up"
        className="z-9999 fixed top-0 w-full min-w-[20rem] max-w-[120rem]"
      >
        <SpaceX className="bg-surface-bright/95 backdrop-blur-[0.5rem] border-b border-b-on-surface/15 min-h-header-mobile xl:min-h-header-desktop flex items-center justify-between">
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
            isCartVisible={isCartVisible}
            setIsCartVisible={setIsCartVisible}
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
        hideOverlay
        disableOutsideOnClose
        className="pb-[7rem] bg-surface-bright/95 backdrop-blur-[0.5rem] mt-header-mobile xl:hidden"
      >
        <NavMobile
          onClose={() => {
            setIsMobileNavVisible(false);
          }}
        />
      </Drawer>

      <Drawer
        visible={isCartVisible}
        onClose={() => {
          setIsCartVisible(false);
        }}
        position="right"
        closeButton={null}
        className="bg-surface-bright flex flex-col w-full sm:w-[30rem] h-full z-999999 md:border-l md:border-l-outline"
      >
        <CartSection
          onClose={() => {
            setIsCartVisible(false);
          }}
        />
      </Drawer>
    </header>
  );
};

export default Header;
