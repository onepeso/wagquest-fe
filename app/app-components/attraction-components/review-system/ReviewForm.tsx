import { useForm } from "react-hook-form";
import { StarIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const ReviewForm = ({ attraction }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [rating, setRating] = useState(0);

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="flex flex-col gap-3">
        <span className="text-gray-700">Rating:</span>
        <div className="star-rating flex gap-1">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <span key={index}>
                <StarIcon
                  fill={index + 1 <= rating ? "orange" : "none"} // fill the star with orange color
                  stroke={index + 1 <= rating ? "none" : "gray"} // remove the stroke if filled
                  className={
                    index + 1 <= rating
                      ? "text-orange-500" // orange fill
                      : "text-gray-400" // gray star
                  }
                  size={24}
                  onClick={() => setRating(index + 1)}
                />
              </span>
            ))}
        </div>
      </label>
      {errors.rating && <div></div>}
      <div className="flex flex-row justify-end">
        <Button type="submit" className="mt-7 w-full">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ReviewForm;
