import { client } from "../../../sanity/lib/client";
export const createAttractionSlice = (set: any, get: any) => ({
  attractions: [],
  fetchAttractions: async (page: number, pageSize: number) => {
    try {
      const query = `*[_type == "post"] | order(_createdAt desc)`;
      const data = await client.fetch(query);

      set((state: any) => ({
        attractions: page === 1 ? data : [...state.attractions, ...data],
        page,
      }));
    } catch (error) {
      console.error("Error fetching attractions:", error);
      set({ attractions: [] });
    }
  },
});

// TODO: add the newData back to the state???
