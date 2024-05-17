import { create } from "zustand";
import { createAttractionSlice } from "./slices/createAttractionSlice";
import { createSingleAttractionSlice } from "./slices/createSingleAttractionSlice";
import { devtools, persist } from "zustand/middleware";
import { persistConfig } from "@/app/state/persistance";

export const useStore = create(
  devtools(
    persist(
      (set) => ({
        ...createAttractionSlice(set),
        ...createSingleAttractionSlice(set),
      }),
      persistConfig
    )
  )
);
