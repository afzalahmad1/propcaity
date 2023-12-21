import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import "./styles.css";
import { changeColor } from "../../store/slices/NoteSlice";
const Card = ({filterData,search,setDeleteNoteModal,setIndex,setEditNoteModal,editNoteModal,setEditObj,setEditIndex}) => {
  const notes = useSelector((state) => {
    return state.notes;
  });
  const dispatch = useDispatch();

  const handleDelete=(idx)=>{
    // console.log(idx);
    setDeleteNoteModal(true)
    setIndex(idx)
    
  }
  const handleEdit=(idx,title,note)=>{
    // console.log(idx);
    setEditObj({
        title:title,
        note:note
    })
    setEditIndex(idx)
    setEditNoteModal(!editNoteModal)
  }

function handleColor(color,idx){
    console.log(color);
    dispatch(changeColor({
        index:idx,
        color:color
    }))
}


  return (
    <div className="card-Container">
      {search ?
        filterData.map((card, idx) => {
          return (
            <div key={idx} className="card" style={{backgroundColor:`${card.color}`}}>
              <h2>{card.title}</h2>
              <p>{card.note}</p>
              <div className="icons">
                <div onClick={()=>handleEdit(idx,card.title,card.note)}><EditRoundedIcon fontSize="small"/></div>
                <div onClick={()=>handleDelete(idx)}><DeleteForeverRoundedIcon fontSize="small"/></div>
                <div><input type="color" value={card.color} onChange={(e)=>handleColor(e.target.value,idx)}/></div>
              </div>
            </div>
          );
        }):
        notes.map((card,idx)=>{
            return (
                <div key={idx} className="card" style={{backgroundColor:`${card.color}`}}>
                  <h2>{card.title}</h2>
                  <p>{card.note}</p>
                  <div className="icons">
                    <div onClick={()=>handleEdit(idx,card.title,card.note)}><EditRoundedIcon fontSize="small"/></div>
                    <div onClick={()=>handleDelete(idx)}><DeleteForeverRoundedIcon fontSize="small"/></div>
                    <div><input type="color" value={card.color} onChange={(e)=>handleColor(e.target.value,idx)}/></div>
                  </div>
                </div>
              );
        })
        }
    </div>
  );
};

export default Card;
