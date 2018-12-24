import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import DiscoverPage from '../components/DiscoverPage'
import HomePage from '../components/HomePage'
import MoviesPage from '../components/MoviesPage'
import NotFoundPage from '../components/NotFoundPage'
import PersonsPage from '../components/PersonsPage'
import ShowsPage from '../components/ShowsPage'
import Navbar from '../components/Navbar'

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Navbar />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/discover" component={DiscoverPage} />
                <Route path="/movies" component={MoviesPage} />
                <Route path="/shows" component={ShowsPage} />
                <Route path="/persons" component={PersonsPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter