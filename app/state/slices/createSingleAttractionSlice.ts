import baseUrl from "../../../lib/baseUrl";

export const createSingleAttractionSlice = (set: any) => ({
  attraction: null,
  fetchSingleAttraction: async (slug: string) => {
    //const headers = {'Authorization': 'Bearer ' + localStorage.getItem('accessToken')};
    const res = await fetch(
      `https://webwagquestbe.onrender.com/attraction/slug/${slug}` //{headers: headers}
    );
    const data = await res.json();
    set({ attraction: data.attraction || null });
  },
});
