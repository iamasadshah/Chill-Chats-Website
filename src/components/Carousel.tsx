import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Importing images from the public folder
const images = [
  { src: "/health.jpg", text: "Health" },
  { src: "/pets.jpg", text: "Pets" },
  { src: "/gaming.jpg", text: "Gaming" },
  { src: "/relationship.jpg", text: "Relationship" },
  { src: "/technology.jpg", text: "Technology" },
];

export default function CarouselSize() {
  return (
    <>
      <div className="hidden w-full md:flex justify-center items-center mt-20">
        {/* Center carousel and give margin from navbar */}
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-screen h-[50%] mx-20"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="w-full md:basis-1/2 lg:basis-1/3 relative"
              >
                <div>
                  <Card className="overflow-hidden">
                    <CardContent className="flex aspect-video p-0 items-center justify-center relative">
                      <img
                        src={image.src}
                        alt={`Carousel Image ${index + 1}`}
                        className="object-cover w-full h-full rounded-xl transition-transform duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                        {image.text}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
