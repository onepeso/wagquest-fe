import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
  import Image from 'next/image';
  import { useRouter } from 'next/navigation';
  
  interface AttractionProps {
    attraction: {
      id: number;
      name: string;
      description: string;
      location: string;
      rating: number;
      images: string;
    };
  }
  
  const AttractionCard = ({ attraction }: AttractionProps) => {

    const router = useRouter(attraction.id);

    const handleRoute = () => {
      router.push(`/attraction/${attraction.id}`);
    };

    return (
      <Card onClick={() => handleRoute(attraction.id)} className="w-full">
      <CardHeader>
        <figure className="relative h-48">
          <div className="flex items-center justify-center bg-[#F5F5F5] w-full h-full rounded">
            <Image src={attraction.images[0]} alt={attraction.name} layout="fill" objectFit="cover" />
          </div>
        </figure>
      </CardHeader>
    
      <CardContent>
        <header>
          <CardTitle className="text-[#0077B6]">{attraction.name}</CardTitle>
        </header>
    
        <CardDescription className="text-black">{attraction.description}</CardDescription>
    
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              {Array.from({ length: Math.round(attraction.rating) }).map((_, index) => (
                <span key={index} className="text-[#FFCA28]">
                  &#9733;
                </span>
              ))}
            </div>
            <span className="text-sm text-[#8B4513]">{attraction.rating}</span>
          </div>
        </div>
    
        <address className="mt-2">
          <p className="text-sm font-bold text-[#0077B6]">Location:</p>
          <p className="text-black">{`${attraction.location.city}, ${attraction.location.state}`}</p>
        </address>
      </CardContent>
    </Card>
    );
  };
  
  export default AttractionCard;