import { useState, useEffect } from "react";
import { useStore } from "@/app/state/useStore";
import { Attraction } from "@/types/Common";

const AttractionFilterLogic = () => {
  const { attractions } = useStore();
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);
  const [filtersApplied, setFiltersApplied] = useState(false);
  const [filteredData, setFilteredData] = useState(attractions);

  const applyFilters = (attraction: Attraction) => {
    if (selectedCity && attraction.location.city !== selectedCity) return false;
    if (selectedPrice && attraction.price !== selectedPrice) return false;
    if (selectedRating && attraction.rating !== selectedRating) return false;
    return true;
  };

  const updateFilteredData = () => {
    const updatedFilteredData = filtersApplied
      ? attractions.filter(applyFilters)
      : attractions;
    setFilteredData(updatedFilteredData);
  };

  useEffect(() => {
    updateFilteredData();
  }, [
    attractions,
    selectedCity,
    selectedPrice,
    selectedRating,
    filtersApplied,
  ]);

  const handleSaveChanges = () => {
    setFiltersApplied(true);
    updateFilteredData(); // Update filteredData after applying filters
  };

  return {
    filteredData,
    selectedCity,
    selectedPrice,
    selectedRating,
    setSelectedCity,
    setSelectedPrice,
    setSelectedRating,
    handleSaveChanges,
    filtersApplied,
  };
};

export default AttractionFilterLogic;
