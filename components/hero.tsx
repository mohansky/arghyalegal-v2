"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  btnText: string;
  link: string;
  blurDataURL: string;
}

export default function Hero({
  image,
  title,
  subtitle,
  btnText,
  link,
  blurDataURL,
}: HeroProps) {
  return (
    <>
      <div className="relative top-0 pb-32 h-[100vh] z-0">
        <div className="absolute blur-sm top-0 w-full h-[100vh] z-10 bg-amber-200/10" />
        <Image
          className="absolute object-cover"
          src={image}
          alt="Argya Legal"
          title={subtitle}
          fill
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
          priority
        />
        <motion.div
          className="absolute top-[50%] left-[5%] z-20"
          initial={{ opacity: 0, y: 250 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <h1 className="text-white text-5xl md:text-6xl mb-5 ">
            {title} <span className="font-semibold">
            <span className="text-gray-900">Λrg</span><span className="text-red-800">ħyä</span> 
            {" "} Legal
            {/* {subtitle} */}  
            </span>
          </h1>
          <Link href={link} title={btnText}>
            <Button size="lg" className="uppercase font-semibold">
              {btnText}
            </Button>
          </Link>
        </motion.div>
      </div>
    </>
  );
}
