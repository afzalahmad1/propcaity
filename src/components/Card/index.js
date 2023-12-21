import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { deleteNote } from "../../store/slices/NoteSlice"
import "./styles.css";
const Card = ({filterData,search,setDeleteNoteModal,setIndex}) => {
  const notes = useSelector((state) => {
    return state.notes;
  });

  const handleDelete=(idx)=>{
    // console.log(idx);
    setDeleteNoteModal(true)
    setIndex(idx)
    
  }

  return (
    <div className="card-Container">
      {search ?
        filterData.map((card, idx) => {
          return (
            <div key={idx} className="card">
              <h2>{card.title}</h2>
              <p>{card.note}</p>
              <div className="icons">
                <div><EditRoundedIcon fontSize="small"/></div>
                <div onClick={()=>handleDelete(idx)}><DeleteForeverRoundedIcon fontSize="small"/></div>
              </div>
            </div>
          );
        }):
        notes.map((card,idx)=>{
            return (
                <div key={idx} className="card">
                  <h2>{card.title}</h2>
                  <p>{card.note}</p>
                  <div className="icons">
                    <div><EditRoundedIcon fontSize="small"/></div>
                    <div onClick={()=>handleDelete(idx)}><DeleteForeverRoundedIcon fontSize="small"/></div>
                  </div>
                </div>
              );
        })
        }
    </div>
  );
};

export default Card;
