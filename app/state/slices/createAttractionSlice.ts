export const createAttractionSlice = (set: any) => ({
    attractions: [],
    fetchAttractions: async () => {
      //const headers = {'Authorization': 'Bearer ' + localStorage.getItem('accessToken')};
      const res = await fetch(
        "http://localhost:8080/attractions", //{headers: headers}
      );
      const data = await res.json();
      set({ attractions: data.attractions || [] });
    },
  });