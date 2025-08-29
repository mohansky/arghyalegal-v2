"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "./navbar";
import HamburgerMenu from "./hamburger-menu";
import Link from "next/link";
import Bounded from "../styled-comps/container";

export default function Menu() {
  const [yValue, setYValue] = useState(0);
  const [toHide, setToHide] = useState(false);

  useEffect(() => {
    const showHeaderOnScrollUp = () => {
      if (yValue >= window.scrollY) {
        setToHide(false);
      } else {
        setToHide(true);
      }
      setYValue(window.scrollY);
    };

    window.addEventListener("scroll", showHeaderOnScrollUp);

    return () => {
      window.removeEventListener("scroll", showHeaderOnScrollUp);
    };
  }, [yValue]);

  return (
    <>
      <div
        className={
          "fixed top-0 left-0 right-0 z-30 border-b-2 border-primary bg-accent backdrop-blur" +
          (toHide && "py-0 h-0 hidden")
        }
      >
        <div className="sm:max-w-xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-2 md:px-0 mx-auto">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex " title="Argya Legal">
              <Image
                src="/images/logos/al-logo-280825.svg"
                alt="Argya Legal Logo"
                className="block lg:hidden"
                width="50"
                height="50"
                title="Argya Legal"
              />
              <Image
                src="/images/logos/al-logo-280825.svg"
                alt="Argya Legal Logo"
                className="hidden lg:block mx-auto"
                width="75"
                height="75"
                title="Argya Legal"
              />
              <p className="text-gray-950 text-lg pl-1 pb-2 self-end">
                Partnering for success
              </p>
            </Link>
            <HamburgerMenu />
            <div className="hidden lg:flex">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}






