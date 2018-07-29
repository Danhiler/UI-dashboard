import React from 'react'
import './TaskLine.css'

class TaskLine extends React.Component {
    render() {
        return (<div className="dashboard-task-line">
           <div className="avatar-div"> <div className="task-avatar">{this.props.item.title.substring(0, 1)}</div></div>
            <div className="text-div">
                <span className= "task-text">{this.props.item.title}</span>
                {this.getDaysLeft(this.props.item.deadLine)}
            </div>
            <div className="task-options-icon"><img src="../../icons/icon-task-options.png" className="more-options-icon" alt="more options"/>
            </div>
        </div>)
    }

    getDaysLeft=(deadLineDate)=> {

        const daysLeft= Math.floor(( new Date(deadLineDate)-Date.now() ) / 86400000);
        if(daysLeft>0){
            return (<div className= "task-deadline-div">
                    <img src="../../icons/clock-icon-black.png" className="clock-icon" alt="when happened?" />
                <span className="task-deadline-text">{daysLeft} days left</span></div>)
        } else {
            return (<div className= "task-deadline-div">
                    <img src="../../icons/clock-icon-red.png" className="clock-icon" alt="when happened?" />
                <span className= "task-deadline-pass">{daysLeft*-1} days delays</span></div>)
        }
    }
}

export default TaskLine;