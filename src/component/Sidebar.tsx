import React, { Component, useEffect, useState } from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './Sidebar.css'
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from './SidebarOption';
import Icon from '@mui/material/Icon';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Sidebar = () => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    // run this code ONCE when the sidebar component loads
    // db.collection('rooms').onSnapshot((snapshot) => (
    //   setChannels(
    //     snapshot.docs.map((doc) => ({
    //       id: doc.id,
    //       name: doc.data().name,
    //     }))
    //   )
    // ));
  }, []);

  return (
    <div className='sidebar'>
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Employee 1</h2>
          <h3>
            <FiberManualRecordIcon />
            Some Name
          </h3>
        </div>

        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions" />
      <SidebarOption title="Others" />
      <SidebarOption Icon={DraftsIcon} title="Saved" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Engineering" />
      <SidebarOption Icon={PeopleAltIcon} title="People" />
      <SidebarOption Icon={FileCopyIcon} title="Apps" />
      <SidebarOption Icon={ExpandLessIcon} title="Show More" />
      <hr />
      <SidebarOption Icon={AppsIcon} title="Show More" />
    </div>
  )
}

export default Sidebar;