export const createAttractionSlice = (set: any) => ({
  attractions: [],
  fetchAttractions: async () => {
    const baseUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : process.env.NEXT_PUBLIC_PROD_API_URL;
    //const headers = {'Authorization': 'Bearer ' + localStorage.getItem('accessToken')};
    const res = await fetch(
      `${baseUrl}/attractions` //{headers: headers}
    );
    const data = await res.json();
    set({ attractions: data.attractions || [] });
  },
});
