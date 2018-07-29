import './DashboardItem.css';
import React, { Component } from 'react';
import TaskLine from "./DashboardsLines/TaskLine";
import MessageLine from "./DashboardsLines/MessageLine";
import ActivityLine from "./DashboardsLines/ActivityLine";

class DashboardItem extends Component {
    render() {
        return (
            <div className="dashboard-item">
            <div className="header">
                <span className="dashboard-item-title">{this.props.title} </span>
                {this.printNotifications()}
            </div>
                <div className="content">{this.printItems()}</div>
            </div>
        );
    }

    printItems=()=> {
        switch(this.props.type){
            case "Tasks":
            return this.props.items.map((item,index)=>{
                return(<TaskLine item={item} key={index}/>)
            });
            case "Messages":
                return this.props.items.map((item,index)=>{
                    return(<MessageLine item={item} key={index} users={this.props.users}/>)
                });
            case "Activity":
                return this.props.items.map((item,index)=>{
                    return(<ActivityLine item={item} key={index} users={this.props.users}/>)
                });
            default:
                console.log("error: data is not valid")
                break;
        }
    }

    printNotifications=()=>{
        return this.props.notifications.map((notification,index)=>{
            const notificationStyle = {backgroundColor:""+notification.color}
            return(<div style={notificationStyle} className="dashboard-item-notification" key={index}>
                    {notification.num}
                    </div>

            )
        })


    }
}

export default DashboardItem;

