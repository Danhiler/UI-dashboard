import './MainContent.css';
import React, {Component} from 'react';
import DashboardItem from "./DashboardItem";

class MainContent extends Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.loggedUser.name}!</h1>
                <div className="dashboard">
                    <div className="bottom-line">
                        {this.printDashboardItems()}
                    </div>
                </div>
            </div>

        );
    }

    printDashboardItems=()=> {
        return this.props.dashboardData.map((dashboardItem,index)=>{
        return(<DashboardItem key={index}
                              title={dashboardItem.title}
                              type={dashboardItem.type}
                              notifications={dashboardItem.notifications}
                              items={dashboardItem.data}
                                users={this.props.users}/>)

        })
    }
}

export default MainContent;

