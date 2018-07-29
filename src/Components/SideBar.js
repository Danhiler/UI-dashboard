import './SideBar.css';
import React, { Component } from 'react';
import home from '../icons/menu-icons/icon-home.png';

class SideBar extends Component {
    constructor(props){
        super(props)
        this.state= {
            menuItems:[
                {name:"Home",iconUrl:home},
                {name:"Workflow",iconUrl:"./icons/menu-icons/icon-workflow.png"},
                {name:"Statistic",iconUrl:"./icons/menu-icons/icon-statistic.png"},
                {name:"Calendar",iconUrl:"./icons/menu-icons/icon-calendar.png"},
                {name:"Users",iconUrl:"./icons/menu-icons/icon-users.png"},
                {name:"Settings",iconUrl:"./icons/menu-icons/icon-settings.png"}
            ]
        }

    }
    render() {
        return (
            <div>
                <img className="logo" src="./logo.png" alt="Merkury Logo"/>

                {this.printMenu()}
            </div>
        );
    }

    printMenu=()=> {
        return this.state.menuItems.map((menuItem,index)=>{
            return(<div className="menu-item" key={index}>
                <img src={menuItem.iconUrl} className="menu-icon" alt={menuItem.name} />
                <span>{menuItem.name}</span>
            </div>)
        })
    }


}

export default SideBar;

