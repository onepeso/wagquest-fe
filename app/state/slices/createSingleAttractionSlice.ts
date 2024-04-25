import baseUrl from "../../../lib/baseUrl";

export const createSingleAttractionSlice = (set: any) => ({
  attraction: null,
  fetchSingleAttraction: async (slug: string) => {
    const baseUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : process.env.NEXT_PUBLIC_PROD_API_URL;
    //const headers = {'Authorization': 'Bearer ' + localStorage.getItem('accessToken')};
    const res = await fetch(
      `${baseUrl}/attraction/slug/${slug}` //{headers: headers}
    );
    const data = await res.json();
    set({ attraction: data.attraction || null });
  },
});
