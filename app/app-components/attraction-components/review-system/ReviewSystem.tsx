import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ReviewUI from "./ReviewUI";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";
import { useStore } from "@/app/state/useStore";
import { useEffect } from "react";
import Image from "next/image";

const ReviewSystem = ({ attraction }: any) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline"> Review </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            Review <span className="text-[#eb5e28]">{attraction?.name}</span>
          </DialogTitle>
          <DialogDescription>
            Let others know what you think about this attraction!
          </DialogDescription>
        </DialogHeader>
        <Image
          src={attraction?.images[0]}
          width={500}
          height={300}
          alt={attraction?.name}
          className="rounded-md"
        />
        <ReviewForm attraction={attraction} />
      </DialogContent>
    </Dialog>
  );
};

export default ReviewSystem;
