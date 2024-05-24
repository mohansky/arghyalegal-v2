"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Heading } from "./styled-comps/heading";

export default function QuicklinkItem({ quicklink }: any) {
  return (
    <>
      <li className="grid group border-y-2 border-secondary bg-primary hover:bg-accent hover:shadow-md transition duration-300 ease-out">
        <Link href={quicklink.url} className="py-20 ">
          <Icon
            icon={quicklink.icon}
            className="w-32 h-32 mx-auto text-white mb-5 group-hover:scale-110"
          />
          <Heading size="md" className="text-center font-medium group-hover:text-gray-700">{quicklink.title}</Heading>
          {/* <h5 className="text-3xl mb-5 font-medium text-gray-900 group-hover:text-gray-700 text-center">
            {quicklink.title}
          </h5> */}
        </Link>
      </li>
    </>
  );
}
