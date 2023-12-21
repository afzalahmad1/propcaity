import React from 'react'
import './styles.css'
import { useDispatch } from 'react-redux'
import { editNote } from '../../store/slices/NoteSlice';
const Edit = ({editObj,setEditObj,setEditNoteModal,editNoteModal,editIndex}) => {
    const dispatch = useDispatch();
    const handleEdit = (e)=>{
        setEditObj({
            ...editObj,
            [e.target.name]:e.target.value
        })
    }
    const saveEdit=()=>{
        dispatch(editNote({
            index:editIndex,
            title:editObj.title,
            note:editObj.note
        }))
        setEditNoteModal(!editNoteModal)
    }
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Note....</h2>
        <div className="inputs">
          <div className="input-flex">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" value={editObj.title} id="title"  onChange={handleEdit}/>
          </div>
          <div className="input-flex">
            <label htmlFor="note">Note</label>
            <textarea name="note" value={editObj.note} onChange={handleEdit} id="note" cols="30" rows="5"></textarea>
          </div>
        </div>
        <div className='btn-flex'>
            <div className='btn' onClick={saveEdit}>Confirm</div>
            <div className='btn' onClick={()=>setEditNoteModal(!editNoteModal)}>Cancel</div>
        </div>
      </div>
    </div>
  )
}

export default Edit
