import baseUrl from "@/lib/baseUrl";

export const createAttractionSlice = (set: any) => {
  const slice = async () => {
    console.log(baseUrl, "baseUrl");
    if (!baseUrl) {
      throw new Error("baseUrl is not defined");
    }
    return {
      attractions: [],
      fetchAttractions: async () => {
        //const headers = {'Authorization': 'Bearer ' + localStorage.getItem('accessToken')};
        const res = await fetch(`${baseUrl}/attractions`); //{headers: headers}
        const data = await res.json();
        set({ attractions: data.attractions || [] });
      },
    };
  };
  return slice;
};
