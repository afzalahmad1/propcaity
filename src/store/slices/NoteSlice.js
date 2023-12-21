import { createSlice } from "@reduxjs/toolkit";

let local = JSON.parse(localStorage.getItem("notes")) || [];
// console.log("local",local);
const noteSlice = createSlice({
  name: "notes",
  initialState: [...local],
  reducers: {
    createNotes(state,action){
      state.unshift(action.payload)
      localStorage.setItem("notes",JSON.stringify(state))
    },
    deleteNote(state,action){
      console.log("store", action.payload);
      state.splice(action.payload,1)
      localStorage.setItem("notes",JSON.stringify(state))
    },
    editNote(state,action){
      console.log("store",action.payload);
      state[action.payload.index].title = action.payload.title;
      state[action.payload.index].note = action.payload.note;
      localStorage.setItem("notes",JSON.stringify(state))
    },
    changeColor(state,action){
      console.log("store",action.payload.index);
      state[action.payload.index].color = action.payload.color;
      localStorage.setItem("notes",JSON.stringify(state))
    }
  }
});

// console.log(productsSlice.actions);
export default noteSlice.reducer;
export const { createNotes,deleteNote ,editNote,changeColor} = noteSlice.actions; 