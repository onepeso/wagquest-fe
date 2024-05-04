import urlFor from "@/lib/urlFor";
import Image from "next/image";

const GallerySystem = ({ attraction }: any) => {
  return (
    <>
      <section className="w-full">
        <Image
          src={urlFor(attraction?.data?.mainImage).url()}
          alt="Attraction Image"
          width={2000}
          height={500}
          className="rounded-lg w-full"
          priority
        />
      </section>
    </>
  );
};

export default GallerySystem;
