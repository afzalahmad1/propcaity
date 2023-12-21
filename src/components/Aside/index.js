import React from "react";
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import ArchiveRoundedIcon from '@mui/icons-material/ArchiveRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import './styles.css'
const Aside = () => {
  return (
    <div className="aside">
      <div className="aside-items" style={{backgroundColor:"#ffc"}}>
        <LightbulbRoundedIcon />
        <div>Notes</div>
      </div>
      <div className="aside-items">
        <NotificationsNoneRoundedIcon />
        <div>Reminders</div>
      </div>
      <div className="aside-items">
        <ModeEditOutlineRoundedIcon />
        <div>Edit labels</div>
      </div>
      <div className="aside-items">
        <ArchiveRoundedIcon />
        <div>Archive</div>
      </div>
      <div className="aside-items">
        <DeleteOutlineRoundedIcon />
        <div>Trash</div>
      </div>
    </div>
  );
};

export default Aside;
