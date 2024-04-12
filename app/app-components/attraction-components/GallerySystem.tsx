import Image from "next/image";

const GallerySystem = ({ attraction }: any) => {
  return (
    <>
      <div className="sm:col-span-2 md:col-span-3">
        {attraction?.images[0] && (
          <Image
            src={attraction?.images[0]}
            alt={attraction?.name}
            width={800}
            height={400}
            className="rounded-md h-60 sm:h-fit object-cover"
            loading="lazy"
          />
        )}
      </div>
      <div className="sm:col-span-2 grid grid-cols-2 gap-3">
        {attraction?.images
          .slice(1, 5)
          .map((image: string, index: number) => (
            <Image
              key={index}
              src={image}
              alt={attraction?.name}
              width={400}
              height={300}
              className="rounded-md h-56 sm:h-full object-cover"
              loading="lazy"
            />
          ))}
      </div>
    </>
  );
};

export default GallerySystem;
