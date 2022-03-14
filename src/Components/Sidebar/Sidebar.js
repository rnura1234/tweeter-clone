import React from 'react';
import {
  Twitter,
  Home,
  Tag,
  NotificationsNoneOutlined,
  EmailOutlined,
 
  BookmarkBorderOutlined,
  ArticleOutlined,
  PersonOutline,
  MoreHoriz,
} from '@mui/icons-material';
import SidebarOption from './SidebarOption';
import { Button } from '@mui/material';
import './Sidebar.css';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Twitter className='sidebar_twiterIcon'/>
      <SidebarOption active Icon={Home} text='Home' />
      <SidebarOption Icon={Tag } text='Explore' />
      <SidebarOption Icon={NotificationsNoneOutlined } text='Notification' />
      <SidebarOption Icon={EmailOutlined}text='Message' />
      <SidebarOption Icon={BookmarkBorderOutlined } text='Bookmark' />
      <SidebarOption Icon={ArticleOutlined} text='Lists' />
      <SidebarOption Icon={PersonOutline} text='Profile' />
      <SidebarOption Icon={MoreHoriz } text='More' />
      <Button variant='outline' className='sidebar_tweetBtn' fullWidth>Tweet</Button>
    </div>
  );
};

export default Sidebar;
