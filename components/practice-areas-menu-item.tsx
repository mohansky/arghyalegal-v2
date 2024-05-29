"use client";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Button } from "./ui/button";

interface PracticesProps {
  title: string;
  slug: string;
}

export default function PracticesAreasMenuItem({
  slug,
  title,
}: PracticesProps) {
  return (
    <>
      <li className="flex items-center font-medium uppercase">
        <Button variant="link">
          <Icon
            icon="icon-park-twotone:right-c"
            className="w-6 h-6 mr-2 text-primary"
          />
          <Link href={`/${slug!}`} className="text-foreground">{title}</Link>
        </Button>
      </li>
    </>
  );
}
