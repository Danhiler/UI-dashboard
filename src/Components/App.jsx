import React, {Component} from 'react';
import './App.css';
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import MainContent from "./MainContent";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dashboardData: [
                {
                    title: "Tasks",
                    type: "Tasks",
                    notifications: [{num: 5, color: "#5384ff"}, {num: 2, color: "#f83c7b"}],
                    data: [{title: "New wbsite for Symu.co", deadLine: '2018-07-21T00:00:00Z'},
                        {title: "Free business PSD Template", deadLine: '2018-07-24T00:00:00Z'},
                        {title: "New logo for JCD.pl", deadLine: '2018-08-01T00:00:00Z'},
                        {title: "Free icons Set vol.3", deadLine: '2018-08-05T00:00:00Z'}]
                },
                {
                    title: "Messages",
                    type: "Messages",
                    notifications: [{num: 2, color: "#5384ff"}],
                    data: [{content: "Hey You! It's me again:-) I attached new bla bla", dateSent: '2018-07-29T09:08:00Z', senderID: 1,seen:false},
                        {content: "Hey! I attached some new PSD files for bla bla", dateSent: '2018-07-29T08:30:00Z', senderID: 1,seen:false},
                        {content: "Good morning, you are fired!", dateSent: '2018-07-29T06:00:00Z', senderID: 2,seen:true},
                        {content: "Hello! Could you bring me coffee please?", dateSent: '2018-07-25T03:00:00Z', senderID: 1,seen:true}]
                },
                {
                    title: "Activity",
                    type: "Activity",
                    notifications: [{num: 10, color: "#5384ff"}],
                    data: [{title: "added a new project", project: "Free UI Kit", date: '2018-07-29T09:08:00Z', userID:1},
                        {title: "commented project", project: "Free PSD Template", date: '2018-07-29T08:30:00Z', userID:2},
                        {title: "completed task ", project:"Symu Website", date: '2018-07-29T06:00:00Z', userID:3},
                        {title: "added a new project ", project: "Free PSD", date: '2018-07-25T03:00:00Z', userID:4},
                ]
                },

            ],
            users: [{id: 1, name: "Nina Jones", avatarImg: 'nina.png'},
                {id: 2, name: "John Smith", avatarImg: 'john.png'},
                {id: 3, name: "Alex Clooneu", avatarImg: 'alex.png'},
                {id: 4, name: "Alexandra Spears", avatarImg: 'alexandra.png'}],
            loggedUser:{name:"John"}
        }
    }

    render() {
        return (
            <div className="App">
                <div className="side-bar"><SideBar/></div>
                <div className="app-content">
                    <TopBar/>
                    <div className="main-content"><MainContent dashboardData={this.state.dashboardData} users={this.state.users} loggedUser={this.state.loggedUser}/></div>

                </div>
            </div>
        );
    }
}

export default App;
