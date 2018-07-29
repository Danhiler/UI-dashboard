import React from "react"
import {HashRouter,Route,Switch} from "react-router-dom"

import App from './Components/App';
export default ()=>(
    <HashRouter>
        <Switch>
            <Route exact patch="/" component={App} />
        </Switch>
    </HashRouter>
)