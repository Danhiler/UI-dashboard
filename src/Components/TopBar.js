import './TopBar.css';
import React, {Component} from 'react';

class TopBar extends Component {
    render() {
        return (
            <div className="top-bar">
                <div className="hamburger-menu"><img src="./icons/icon-hamburger.png" alt="open/close menu"/></div>
                <div className="icon-search"><img src="./icons/icon-search.png" alt="search"/></div>

                <div className="space"></div>

                <div className="add-project-btn"><input type="button" value='+ Add project'/></div>
                <div className="messeges-icon"><img src="./icons/icon-messege.png" alt="messages"/></div>
                <div className="notification-icon"><img src="./icons/icon-notifications.png" alt="notifications"/></div>
                <div className="avatar-icon"><img className="photo" src="./icons/profile-avatar.png" alt="profile avatar"/>
                <img className="polygon" src="./icons/icon-polygon.png" alt="personal information"/></div>


            </div>
        );
    }

    componentDidMount() {
        document.querySelector('.hamburger-menu').addEventListener("click", (e) => {
            const sideBar = document.querySelector('.side-bar')
            if (sideBar.classList.contains("hide-sidebar")) {
                sideBar.classList.remove("hide-sidebar")
                e.target.classList.remove("menu-hided")
            } else {
                sideBar.classList.add("hide-sidebar")
                e.target.classList.add("menu-hided")
            }
        })
    }

}

export default TopBar;

