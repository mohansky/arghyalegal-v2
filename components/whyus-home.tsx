"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { options } from "@/.velite";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heading } from "./styled-comps/heading";

export default function WhyusHome() {
  return (
    <>
      <Card className="grid md:grid-cols-5 md:gap-8 border-0 shadow-none">
        <div className="col-span-5 md:col-span-2 w-full rounded-md mb-5">
          <Image
            src="/images/whyus-home.jpg"
            alt=""
            width={1920}
            height={1080}
            className="mx-auto text-center"
          />
        </div>
        <div className="col-span-3">
          <CardHeader className="pt-0">
            <Heading size="md" className="font-semibold">
              Why Us
            </Heading>
          </CardHeader>
          <CardContent>
            <p className="mb-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using &apos;Content here,
              content here&apos;, making it look like readable English.
            </p>
            <ul className="space-y-4">
              {options.whyusitems.map((whyus) => (
                <li key={whyus.id} className="flex items-center font-medium">
                  <Icon
                    icon="icon-park-twotone:check-one"
                    className="w-8 h-8 mr-3 text-primary"
                  />
                  {whyus.title}
                </li>
              ))}
            </ul>
          </CardContent>
        </div>
      </Card>
    </>
  );
}
