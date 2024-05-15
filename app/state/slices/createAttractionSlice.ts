import { client } from "../../../sanity/lib/client";

export const createAttractionSlice = (set: any) => ({
  attractions: [],
  fetchAttractions: async () => {
    try {
      const query = `*[_type == "post"]`;
      const data = await client.fetch(query);
      set({ attractions: data || [] });
    } catch (error) {
      console.error("Error fetching attractions:", error);
      set({ attractions: [] }); // Set attractions to empty array in case of error
    }
  },
});
