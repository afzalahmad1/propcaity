import React, { useState } from "react";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import "./styles.css";
import { useDispatch } from "react-redux";
import { createNotes } from "../../store/slices/NoteSlice";
const CreateModal = ({setCreateNoteModal}) => {
    const [note,setNote] = useState({
        title:"",
        note:""
    })
    
    const dispatch = useDispatch();
    const handleInputChange = (e)=>{
        setNote({
            ...note,
            [e.target.name]:e.target.value
        })
        console.log(note);
    }
    const handleCreateNotes = ()=>{
        dispatch(createNotes(note))
        setCreateNoteModal(false)
    }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="close">
          <h2>Take a Note....</h2>
          <div onClick={()=> setCreateNoteModal(false)}>
            <ClearRoundedIcon />
          </div>
        </div>
        <div className="inputs">
          <div className="input-flex">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" value={note.title} id="title"  onChange={handleInputChange}/>
          </div>
          <div className="input-flex">
            <label htmlFor="note">Note</label>
            <textarea name="note" value={note.note} onChange={handleInputChange} id="note" cols="30" rows="5"></textarea>
          </div>
        </div>
        <div id="create-note" onClick={handleCreateNotes}>Create Note</div>
      </div>
    </div>
  );
};

export default CreateModal;
