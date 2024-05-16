import urlFor from "@/lib/urlFor";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const GallerySystem = ({ attraction }: any) => {
  return (
    <>
      <section className="w-full">
        <Carousel>
          <CarouselContent>
            {attraction?.gallery.map((image: any, index: number) => (
              <CarouselItem key={index}>
                <Image
                  src={urlFor(image, 600, 400)}
                  alt="Attraction Image"
                  width={600}
                  height={400}
                  className="rounded-lg w-full h-[500px] object-cover"
                  priority
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute ml-20 w-10 h-10" />
          <CarouselNext className="absolute mr-20 w-10 h-10" />
        </Carousel>
      </section>
    </>
  );
};

export default GallerySystem;
