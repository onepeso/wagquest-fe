import { create } from "zustand";
import { createAttractionSlice } from "./slices/createAttractionSlice";

export const useStore = create((...a) => ({
  ...createAttractionSlice(...a),
}));