// persistence.js (Create a new file for persistence configuration)
import { createJSONStorage } from "zustand/middleware";

const storage = createJSONStorage(() => window.localStorage);

export const persistConfig = {
  name: "attraction info", // Unique name for storage key
  storage,
  // Optional configuration (refer to Zustand docs for details)
};
