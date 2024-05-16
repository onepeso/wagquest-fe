import urlFor from "@/lib/urlFor";
import Image from "next/image";

const GallerySystem = ({ attraction }: any) => {
  return (
    <>
      <section className="w-full">
        <Image
          src={urlFor(attraction?.mainImage, 600, 400)}
          alt="Attraction Image"
          width={600}
          height={400}
          className="rounded-lg w-full h-[500px] object-cover"
          priority
        />
      </section>
    </>
  );
};

export default GallerySystem;
