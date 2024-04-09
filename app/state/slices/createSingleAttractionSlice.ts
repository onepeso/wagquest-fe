export const createSingleAttractionSlice = (set: any) => ({
  attraction: null,
  fetchSingleAttraction: async (id) => {
    //const headers = {'Authorization': 'Bearer ' + localStorage.getItem('accessToken')};
    const res = await fetch(
      `http://localhost:8080/attraction/${id}` //{headers: headers}
    );
    const data = await res.json();
    set({ attraction: data.attraction || null });
  },
});
