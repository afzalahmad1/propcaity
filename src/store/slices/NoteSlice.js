import { createSlice } from "@reduxjs/toolkit";
const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    createNotes(state,action){
      state.unshift(action.payload)
    },
    deleteNote(state,action){
      console.log("store", action.payload);
      state.splice(action.payload,1)
    }
  }
});

// console.log(productsSlice.actions);
export default noteSlice.reducer;
export const { createNotes,deleteNote } = noteSlice.actions; 