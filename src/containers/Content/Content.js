import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Index from '../Index/Index'
import RestaurantList from '../../components/RestaurantList/RestaurantList'
import Result from '../Result/Result'
import Detail from '../Result/Detail/Detail'

const Content = () => {
    return (
        <Switch>
            <Route path="/" exact component={ Index } />
            <Route path="/restaurants" exact component={ RestaurantList } />
            <Route path="/results" exact component={Result} />
            <Route path="/details" exact component={Detail} />
        </Switch>
    )
}

export default Content