import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import DashBoard from '../dashboard/dashboard'
// import DashBoard2 from '../dashboard2/deshboard2'
import BillingCycle from '../bilingCycle/bilingCycle'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={DashBoard} />
        {/* <Route path='/dash2' component={DashBoard2} /> */}
        <Route path='/bilingCycles' component={BillingCycle} />
        <Redirect from='*' to='/' />
    </Router>
)