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
    },
    editNote(state,action){
      console.log("store",action.payload);
      // for(let i=0;i<state.length;i++){
      //   if(i===action.payload.index){

      //   }
      // }
      state[action.payload.index].title = action.payload.title;
      state[action.payload.index].note = action.payload.note;
    }
  }
});

// console.log(productsSlice.actions);
export default noteSlice.reducer;
export const { createNotes,deleteNote ,editNote} = noteSlice.actions; 