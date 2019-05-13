import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Index from '../Index/Index'
import Restaurants from '../../components/RestaurantList/RestaurantList'

const Content = () => {
    return (
        <Switch>
            <Route path="/" exact component={ Index } />
            <Route path="/restaurants" exact component={ Restaurants } />
        </Switch>
    )
}

export default Content