import React from 'react'
import Search from '../Search'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';
import ViewStreamRoundedIcon from '@mui/icons-material/ViewStreamRounded';
import './styles.css'

const Header = ({aside,setAside,setCreateNoteModal,setSearch,search}) => {
  return (
    <div className='header-container'>
      <div className='container-left'>
        <div className='left-half'>
            <div onClick={()=> setAside(!aside)}><MenuRoundedIcon /></div>
            <div><TipsAndUpdatesRoundedIcon /></div>
            <div id='keep'>Keep</div>
        </div>
        <div>
            <Search setSearch={setSearch} search={search}/>
        </div>
      </div>
      <div className='conteiner-right'>
        <div id='notes' onClick={()=> setCreateNoteModal(true)}>Create Notes</div>
        <div><ViewStreamRoundedIcon /></div>
        <div id='account'>A</div>
      </div>
    </div>
  )
}

export default Header
