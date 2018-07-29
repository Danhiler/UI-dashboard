import React from 'react'
import './MessageLine.css'
import {getTimeAgo} from "../../helpers";

class MessageLine extends React.Component {
    render() {
        const item = this.props.item
        const user = this.props.users.find((user) => user.id === item.senderID);
        const userImgPath = "../../icons/users-icons/" + user.avatarImg;
        return (<div className={"message-line "+(item.seen?"":"unread" )}>
                <div className="avatar-div"><img src={userImgPath} className="profile-img" alt={user.name}/></div>
                <span className="text-div">
             <span>
                <span className="sender-name">{user.name}</span>&nbsp;
                <span className="message-received">{this.getWhenReceived(item.dateSent)}</span>
            </span>
                <span className="message-preview">{this.getMessagePreview(item.content)}</span>
                    <span><img src="../../icons/message-reply.png" className="message-optitons-icons" alt="reply"/><img src="../../icons/message-setting.png" alt="more settings" className="message-optitons-icons" /></span>
         </span>
            </div>
        )
    }


    getMessagePreview(content) {
        if (content.length > 41) {
            return content.substring(0, 40) + "(...)";
        }
        return content

    }

    getWhenReceived(dateSent) {
return getTimeAgo(dateSent,true)

    }
}

export default MessageLine;