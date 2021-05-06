import React from 'react'
import Home from './Home'
import Workplace from './Workplace'
import Login from './Login'
import history from '../history'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
    return (
        <div className="bg">
        <Router history={history}>
        <div>
            <Switch>

                <Route path="/" component={Login} exact />
                <Route path="/home" component={Home} />
                <Route path="/workplace" component={Workplace} />
            </Switch>
        </div>
    </Router>
        </div>
    )
}

export default App