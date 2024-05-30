"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { options } from "@/.velite";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Heading } from "./styled-comps/heading";
import { Paragraph } from "./styled-comps/paragraph";

export default function WhyusHome() {
  return (
    <>
      <Heading size="md" className="font-semibold mb-5">
        {options.whyustitle}
      </Heading>
      <Card className="grid md:grid-cols-5 md:gap-8 border-0 shadow-none">
        <div className="col-span-5 md:col-span-2 w-full rounded-md mb-5">
          <Image
            src={options.whyusimage!}
            alt="Why us"
            title="Why us"
            width={1920}
            height={1080}
            className="object-cover h-full w-full mx-auto text-center"
          />
        </div>
        <div className="col-span-3">
          <CardContent>
            <Paragraph className="mb-5">{options.whyussubtitle} </Paragraph>
            <ul className="space-y-3">
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
