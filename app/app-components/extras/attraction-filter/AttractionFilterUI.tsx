import { useState } from "react";
import baseUrl from "@/lib/baseUrl";
import AttractionFilterLogic from "@/app/app-components/extras/attraction-filter/AttractionFilterLogic";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Slider } from "@/components/ui/slider";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SlidersHorizontal } from "lucide-react";
import { useStore } from "@/app/state/useStore";
import { Attraction } from "@/types/Common";
import { DialogClose } from "@radix-ui/react-dialog";

const AttractionFilterUI = () => {
  const {
    filteredData,
    selectedCity,
    selectedPrice,
    selectedRating,
    setSelectedCity,
    setSelectedPrice,
    setSelectedRating,
    handleSaveChanges,
    filtersApplied,
  } = AttractionFilterLogic();
  const { attractions } = useStore();

  return (
    <Dialog>
      <DialogTrigger asChild className="flex gap-2">
        <Button variant="outline">
          <SlidersHorizontal size={20} />
          Filter
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Filter Attractions</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Select
            value={selectedCity}
            onValueChange={(value) => setSelectedCity(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Choose a Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Locations</SelectLabel>
                {attractions
                  ?.filter(
                    (attraction: Attraction, index: number, self: any) =>
                      self.findIndex(
                        (a: any) => a.location.city === attraction.location.city
                      ) === index
                  )
                  ?.map((attraction: any) => (
                    <SelectItem
                      key={attraction.id}
                      value={attraction.location.city}
                    >
                      {attraction.location.city}
                    </SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <p>Price: {selectedPrice}</p>
          <Input
            type="number"
            value={selectedPrice}
            onChange={(event) => {
              // setSelectedPrice(event.target.value as number);
            }}
            placeholder="Enter price"
            className="w-full"
          />

          <p>Rating: {selectedRating}</p>
          <Slider
            value={selectedRating}
            // onValueChange={(value) => setSelectedRating(value)}
            defaultValue={[0]}
            max={5}
            step={1}
            className={"w-full"}
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" onClick={handleSaveChanges}>
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AttractionFilterUI;
