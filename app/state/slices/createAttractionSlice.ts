export const createAttractionSlice = (set: any) => ({
  attractions: [],
  fetchAttractions: async () => {
    //const headers = {'Authorization': 'Bearer ' + localStorage.getItem('accessToken')};
    const res = await fetch(
      "https://webwagquestbe.onrender.com/attractions" //{headers: headers}
    );
    const data = await res.json();
    set({ attractions: data.attractions || [] });
  },
});
