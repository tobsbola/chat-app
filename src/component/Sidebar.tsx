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
import AddIcon from '@mui/icons-material/Add';
import { useStateValue } from '../StateProvider';

interface IChannel {
  id: string;
  name: string;
}

export const channelArr = [
    {
        id: "1",
        name: 'channel1',
    },
    {
        id: "2",
        name: 'channel2',
    },
    {
        id: "3",
        name: 'channel3',
    },
    {
        id: "4",
        name: 'channel4',
    },
  ];

const Sidebar = () => {
  const [channels, setChannels] = useState<IChannel[]>(channelArr);
  const [state, dispatch] = useStateValue();
  const { user } = state;

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
          <h2>Employee Chat</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.name}
          </h3>
        </div>

        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" id={2} />
      <SidebarOption Icon={InboxIcon} title="Mentions" />
      {/* <SidebarOption title="Others" /> */}
      {/* <SidebarOption Icon={DraftsIcon} title="Saved" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Engineering" />
      <SidebarOption Icon={PeopleAltIcon} title="People" />
      <SidebarOption Icon={FileCopyIcon} title="Apps" />
      <SidebarOption Icon={ExpandLessIcon} title="Show More" /> */}
      <hr />
      <SidebarOption Icon={AppsIcon} title="Show More" />
      <hr />
      <SidebarOption Icon={AppsIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} title="Add Channel" addChannelOption={true} />
      {/* Connect to db and list all the channels */}
      {channels.map((channel) => (
        <SidebarOption key={channel.id} title={channel.name} id={channel.id} />
      ))}
    </div>
  )
}

export default Sidebar;