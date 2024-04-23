import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Attraction } from "@/types/Common";
import { useStore } from "@/app/state/useStore";
import { useEffect } from "react";
import AttractionFilterLogic from "@/app/app-components/extras/attraction-filter/AttractionFilterLogic";

const AttractionCard = () => {
  const { fetchAttractions, attractions } = useStore();
  const { filteredData, filtersApplied } = AttractionFilterLogic();
  const router = useRouter();

  const handleRoute = (slug: string) => {
    router.push(`/attraction/${slug}`);
  };

  useEffect(() => {
    fetchAttractions();
  }, []);

  console.log("filteredDataNOWWW!", filteredData);

  return (
    <>
      {filtersApplied && filteredData.length > 0 ? (
        filteredData.map((attraction: Attraction) => (
          <Card
            key={attraction.id}
            onClick={() => handleRoute(attraction.slug)}
            className="w-full border-none shadow-md rounded-lg overflow-hidden cursor-pointer"
          >
            <CardHeader className="p-0">
              <figure className="relative">
                <div className="flex items-center justify-center">
                  <Image
                    src={attraction.images[0] || ""}
                    alt={attraction.name || ""}
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded shadow">
                  <span className="text-sm font-bold">
                    &#9733; {attraction.rating}
                  </span>
                </div>
              </figure>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="font-bold text-lg mb-2 hover:text-[#eb5e28]">
                {attraction.name}
              </CardTitle>
              <address className="text-gray-600 text-sm">
                {`${attraction.location.city}, ${attraction.location.state}`}
              </address>
            </CardContent>
          </Card>
        ))
      ) : attractions.length > 0 ? (
        attractions.map((attraction: Attraction) => (
          <Card
            key={attraction.id}
            onClick={() => handleRoute(attraction.slug)}
            className="w-full border-none shadow-md rounded-lg overflow-hidden cursor-pointer"
          >
            <CardHeader className="p-0">
              <figure className="relative">
                <div className="flex items-center justify-center">
                  <Image
                    src={attraction.images[0] || ""}
                    alt={attraction.name || ""}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded shadow">
                  <span className="text-sm font-bold">
                    &#9733; {attraction.rating}
                  </span>
                </div>
              </figure>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="font-bold text-lg mb-2 hover:text-[#eb5e28]">
                {attraction.name}
              </CardTitle>
              <address className="text-gray-600 text-sm">
                {`${attraction.location.city}, ${attraction.location.state}`}
              </address>
            </CardContent>
          </Card>
        ))
      ) : (
        <p>No attractions found.</p>
      )}
    </>
  );
};

export default AttractionCard;
