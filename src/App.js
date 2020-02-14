import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// containers
import Home from './containers/home/Home';
import Login from './containers/login/Login'
// redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    WEBPACK2020
                    <Home />
                    <Route exact path='/' component={Home} />
                    <section>
                    <Switch>
                        <Route exact path='/login' component={Login} />
                    </Switch>
                    </section>
                </Fragment>
            </Router>
        </Provider>
    )
}

export default App;
