import React from 'react'
import './ActivityLine.css'
import {getTimeAgo} from "../../helpers";

class ActivityLine extends React.Component {
    render() {
        const item = this.props.item;
        const user = this.props.users.find((user) => user.id === item.userID);
        const userImgPath = "../../icons/users-icons/" + user.avatarImg;

        return (<div className="dashboard-activity-line">
            <div className="avatar-div"><div className="vertical-line"> </div><img src={userImgPath} alt="" className="profile-img"/>
                </div>
            <div className="activity-text-div">
                <span>
                <span className="activity-user">{user.name}</span>&nbsp;
                    <span className="activity-title">{item.title}</span>&nbsp;
                    <span className="activity-project">{item.project}</span>
                </span>
                {this.getTimeAgo(item.date)}
            </div>

        </div>)
    }

    getTimeAgo = (date) => {
        const str = getTimeAgo(date,false)
        return (<div className="time-ago-div">
                    <img src="../../icons/clock-icon-black.png" alt="when happened?" className="clock-icon"/>
            <span className="time-ago-text">{ str}</span></div>)
    }
}

export default ActivityLine;