import React from 'react'
import Home from './Home'
import Workplace from './Workplace'
import history from '../history'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
    return (
        <div className="bg">
        <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/workplace/:id" component={Workplace} />
            </Switch>
        </div>
    </Router>
        </div>
    )
}

export default App