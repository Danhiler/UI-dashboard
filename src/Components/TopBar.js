import './TopBar.css';
import React, { Component } from 'react';

class TopBar extends Component {
    render() {
        return (
            <div>
                <img className="hamburger-menu" src="./icons/icon-hamburger.png" alt="open/close menu" />
                <img className="icon-search" src="./icons/icon-search.png" alt="search"/>

                <img className="avatar-polygon" src="./icons/icon-polygon.png" alt="personal information" />
                <img className="avatar-icon" src="./icons/profile-avatar.png" alt="profile avatar" />
                <img className="notification-icon" src="./icons/icon-notifications.png" alt="notifications" />
                <img className="messeges-icon" src="./icons/icon-messege.png" alt="messages"/>
                <input type="button" className="add-project-btn" value='+ Add project' />
            </div>
        );
    }
componentDidMount(){
        document.querySelector('.hamburger-menu').addEventListener("click",(e)=>{
            const sideBar = document.querySelector('.side-bar')
            if(sideBar.classList.contains("hide-sidebar")){
                sideBar.classList.remove("hide-sidebar")
                e.target.classList.remove("menu-hided")
            }else{
                sideBar.classList.add("hide-sidebar")
                e.target.classList.add("menu-hided")
            }
        })
}

}

export default TopBar;

