import React from 'react'
import { Router, Route, Redirect, IndexRoute, hashHistory } from 'react-router'

import AuthOrApp from './authOrApp'
import DashBoard from '../dashboard/dashboard'
import BillingCycle from '../bilingCycle/bilingCycle'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={DashBoard} />
            <Route path='/bilingCycles' component={BillingCycle} />]
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)