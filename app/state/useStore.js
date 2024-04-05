import { create } from "zustand";
import { createAttractionSlice } from "./slices/createAttractionSlice";
import { createSingleAttractionSlice } from "./slices/createSingleAttractionSlice";
import { devtools } from "zustand/middleware";

export const useStore = create(
  devtools((set) => ({
    ...createAttractionSlice(set),
    ...createSingleAttractionSlice(set),
  }))
);