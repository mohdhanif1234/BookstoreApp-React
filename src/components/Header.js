import React from 'react'
import BookLogo from '../assets/booklogo.png'
// import { IconButton, Button } from "@material-ui/core"
import { Icon, InputBase } from "@mui/material"
import Toolbar from "@mui/material/Toolbar"
import '../css/Header.css'
import { useHistory } from "react-router";
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Portal from '@mui/material/Portal';
import Profile from '../assets/profilelogo.jpg'
import Cartlogo from '../assets/supermarket.svg'
import profilelogo from '../assets/profilelogone.png'
import Heart from '../assets/heartlogo.png'
import Myorder from '../assets/myorderlogo.png'
import SearchImage from '../assets/searchicon.png'
import ProfileImage from '../assets/profilelogo.jpg'
import CartImage from '../assets/cartimage.jpg'

function Header() {
    
    return (
        <div className="my-header">
            <div className="header-title">
                <img className="bookstore-image" src={BookLogo} alt="" />
                <p className="bookstore-title">Bookstore</p>
            </div>
            <div className="search">
                <img className= "search-icon" src={SearchImage} alt="" />
                <input className="search-text" type="text" placeholder="Search..." />
            </div>
            <div className="profile">
                <img src={ProfileImage} alt="" className="profile-image" />
                <p className="profile-text">Profile</p>
            </div>
            <div className="cart">
                <img src={CartImage} alt="" className="cart-image" />
                <p className="cart-text">Cart</p>
            </div>
        </div>
    )
}

export default Header
