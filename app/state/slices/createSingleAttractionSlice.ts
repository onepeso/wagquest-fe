import { client } from "../../../sanity/lib/client";

export const createSingleAttractionSlice = (set: any) => ({
  attraction: null,
  fetchSingleAttraction: async (slug: string) => {
    try {
      const query = `*[_type == "post" && slug.current == "${slug}"][0]`;
      const data = await client.fetch(query);
      set({ attraction: data || [] });
    } catch (error) {
      console.error("Error fetching attractions:", error);
      set({ attraction: [] }); // Set attractions to empty array in case of error
    }
  },
});
