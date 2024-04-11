import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useStore } from "../../state/useStore";
import { useEffect } from "react";

interface AttractionProps {
  attraction?: {
    id: number;
    name: string;
    description: string;
    location: {
      city: string;
      state: string;
    };
    rating: number;
    images: string[];
  };
}

const AttractionCard = () => {
  const { fetchAttractions, attractions } = useStore();
  const router = useRouter();

  useEffect(() => {
    fetchAttractions();
  }, [fetchAttractions]);

  const handleRoute = (id: number) => {
    router.push(`/attraction/${id}`);
  };

  return (
    <>
      {attractions.length > 0 ? (
        attractions.map((attraction: AttractionProps["attraction"]) => (
          <Card
            key={attraction?.id}
            onClick={() => handleRoute(attraction?.id)}
            className="w-full"
          >
            <CardHeader>
              <figure className="relative h-48">
                <div className="flex items-center justify-center bg-[#F5F5F5] w-full h-full rounded">
                  <Image
                    src={attraction?.images[0] || ""}
                    alt={attraction?.name || ""}
                    width={500}
                    height={500}
                    objectFit="cover"
                  />
                </div>
              </figure>
            </CardHeader>
            <CardContent>
              <header>
                <CardTitle className="text-[#0077B6]">
                  {attraction?.name}
                </CardTitle>
              </header>
              <CardDescription className="text-black">
                {attraction?.description}
              </CardDescription>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {Array.from({
                      length: Math.round(attraction?.rating || 0),
                    }).map((__, index) => (
                      <span key={index} className="text-[#FFCA28]">
                        &#9733;
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-[#8B4513]">
                    {attraction?.rating}
                  </span>
                </div>
              </div>
              <address className="mt-2">
                <p className="text-sm font-bold text-[#0077B6]">Location:</p>
                <p className="text-black">{`${attraction?.location.city}, ${attraction?.location.state}`}</p>
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
