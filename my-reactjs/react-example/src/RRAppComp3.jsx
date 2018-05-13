import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './RRHome';
import Login from './RRLogin';

class AppComp3 extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h2>React Router</h2>

                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/Login'}>Login</Link></li>
                    </ul>
                    <hr />

                    {/* to change route */}
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/Login' component={Login} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default AppComp3;
