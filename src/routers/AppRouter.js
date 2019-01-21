import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import HomePage from '../components/HomePage'
import MoviesPage from '../components/MoviesPage'
import MoviePage from '../components/MoviePage'
import ShowPage from '../components/ShowPage'
import NotFoundPage from '../components/NotFoundPage'
import PersonsPage from '../components/PersonsPage'
import PersonPage from '../components/PersonPage'
import ShowsPage from '../components/ShowsPage'
import SearchPage from '../components/SearchPage'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import Footer from '../components/Footer'

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Navbar />
            <Searchbar />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/movies" component={MoviesPage} />
                <Route path="/shows" component={ShowsPage} />
                <Route path="/persons" component={PersonsPage} />
                <Route path="/search" component={SearchPage} />
                <Route path="/movie/:id" component={MoviePage} />
                <Route path="/tv/:id" component={ShowPage} />
                <Route path="/person/:id" component={PersonPage} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </div>
    </Router>
)

export default AppRouter