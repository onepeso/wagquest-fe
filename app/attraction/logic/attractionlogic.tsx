"use client";

import { useEffect } from "react";
import { useStore } from "../../state/useStore";

const AttractionLogic = (params: any) => {
  const { attraction, fetchSingleAttraction } = useStore();

  useEffect(() => {
    fetchSingleAttraction(params.slug);
  }, [params.slug, fetchSingleAttraction]);

  return { attraction };
};

export default AttractionLogic;
