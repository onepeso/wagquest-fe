import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
  import Image from 'next/image';
  
  interface AttractionProps {
    attraction: {
      id: number;
      name: string;
      description: string;
      location: string;
      rating: number;
      image: string;
    };
  }
  
  const AttractionCard = ({ attraction }: AttractionProps) => {
    return (
        <Card className="w-full">
      <CardHeader>
        <figure className="relative h-48">
          <Image
            src={attraction.image}
            alt={attraction.name}
            fill
            className="object-cover rounded-t-md"
          />
        </figure>
      </CardHeader>
      <CardContent>
        <header>
          <CardTitle>{attraction.name}</CardTitle>
        </header>
        <CardDescription>{attraction.description}</CardDescription>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              {Array.from({ length: Math.round(attraction.rating) }).map(
                (_, index) => (
                  <span key={index} className="text-yellow-400">
                    &#9733;
                  </span>
                )
              )}
            </div>
            <span className="text-sm text-gray-500">{attraction.rating}</span>
          </div>
        </div>
        <address className="mt-2">
          <p className="text-sm font-bold">Location:</p>
          <p>{`${attraction.location.city}, ${attraction.location.state}`}</p>
        </address>
      </CardContent>
      <CardFooter>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md">
          Visit
        </button>
      </CardFooter>
    </Card>
    );
  };
  
  export default AttractionCard;