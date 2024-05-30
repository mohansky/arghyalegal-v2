"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { options } from "@/.velite";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Heading } from "./styled-comps/heading";

export default function WhyusHome() {
  return (
    <>
      <Card className="grid md:grid-cols-5 md:gap-8 border-0 shadow-none">
        <div className="col-span-5 md:col-span-2 w-full rounded-md mb-5">
          <Image
            src={options.whyusimage!}
            alt="Why us"
            title="Why us"
            width={1920}
            height={1080}
            className="mx-auto text-center"
          />
        </div>
        <div className="col-span-3">
          <CardHeader className="pt-0">
            <Heading size="md" className="font-semibold">
              {options.whyustitle}
            </Heading>
          </CardHeader>
          <CardContent>
            <p className="mb-5">{options.whyussubtitle} </p>
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
