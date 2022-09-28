import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import React, { Component } from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <Avatar className="header__avatar" alt="Name"/>
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                <SearchIcon />
            </div>
            <div className="header__right">
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header;