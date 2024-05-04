export interface Post {
  title: string;
  body: string;
  overview: string;
  content: string;
  _id: string;
  slug: {
    current: string;
  };
  _createdAt: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  mainImage: {
    asset: {
      _ref: string;
    };
  };

  location: string;
  geopoint: {
    lng: number;
    lat: number;
  };
  prices: {
    highestPrice: number;
    lowestPrice: number;
  };
  availability: {
    day: string;
    availableTimes: {
      from: string;
      to: string;
    }[];
  }[];
  socialStack: {
    socialPlatform: string;
    socialLink: string;
  }[];
  author: {
    _ref: string;
  };
}
