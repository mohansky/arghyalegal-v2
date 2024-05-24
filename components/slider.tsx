"use client";
import { practiceAreas } from "@/.velite";
import WorkSlide from "./workslide";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Slider() {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="w-full h-auto relative overflow-hidden"
      >
        <CarouselContent>
          {practiceAreas.map((practice) => (
            <CarouselItem key={practice.id}>
              <Card className="border-0 shadow-none">
                <CardContent className="-ml-[16px] p-0">
                  <WorkSlide
                    imageBlurUrl={practice.imageBlurUrl}
                    slug={practice.slug}
                    body={practice.body}
                    img={practice.img || ""}
                    title={practice.title || ""}
                    subtitle={practice.subtitle || ""}
                    id={practice.id}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-1 -translate-y-1/2 z-40" />
        <CarouselNext className="absolute top-1/2 right-1 -translate-y-1/2 z-40" />
      </Carousel>
    </>
  );
}
