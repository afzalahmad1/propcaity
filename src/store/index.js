import { configureStore } from "@reduxjs/toolkit";
import  noteSlice  from "./slices/NoteSlice";

const store = configureStore({
    reducer: {
        notes: noteSlice,
    },
})
export default store;