import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home.jsx'
import UserCrud from '../components/user/UserCrud.jsx'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Redirect from='*' to='/' />
    </Switch>