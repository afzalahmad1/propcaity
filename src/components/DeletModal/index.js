import React from 'react'
import './styles.css'
import { useDispatch } from 'react-redux'
import { deleteNote } from '../../store/slices/NoteSlice';
const DeleteModal = ({index,setDeleteNoteModal,deleteNoteModal}) => {
    const dispatch = useDispatch();
    function deleteItem(){
         dispatch(deleteNote(index))
         setDeleteNoteModal(!deleteNoteModal)
    }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Are you sure...</h2>
        <div className='delete'>
            <div className='confirm' onClick={deleteItem}>Yes</div>
            <div onClick={()=> setDeleteNoteModal(!deleteNoteModal)} className='confirm'>No</div>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
