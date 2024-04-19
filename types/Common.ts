import exp from "constants";

export type OperatingHours = {
  id: number;
  attraction_id: number;
  day: string;
  open_time: string;
  close_time: string;
};

export type SocialMedia = {
  id: number;
  attraction_id: number;
  platform: string;
  handle: string;
};

export type Location = {
  id: number;
  attraction_id: number;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  country: string;
};

export type Attraction = {
  id: number;
  name: string;
  slug: string;
  description: string;
  images: string[];
  content: string;
  location: Location;
  operating_hours: OperatingHours[];
  social_media_stack: SocialMedia[];
  price: number;
  rating: number;
  reviews: number;
};

export type AttractionFilter = {
  location: string;
  price: number;
  rating: number;
};
