import React, { Component } from 'react';
import RestaurantItem from './RestaurantItem/RestaurantItem'

class RestaurantList extends Component {

     restaurants = [
        {
            name: 'Taco Mexican',
            type: 'Mexican / American',
            location: '135 Newtownards Road, Belfast, BT4.',
            opening: '17:00',
            
        },
        {
            name: 'Naples Pizza',
            type: 'Italian / Pizza',
            location: '135 Newtownards Road, Belfast, BT4.',
            opening: '17:00',
            
        },
        {
            name: 'Japan Food',
            type: 'Sushi / Japanese',
            location: '135 Newtownards Road, Belfast, BT4.',
            opening: '17:00',
            
        },
        {
            name: 'Sushi Gold',
            type: 'Sushi / Japanese',
            location: '135 Newtownards Road, Belfast, BT4.',
            opening: '17:00',
            
        }
    ]

    render() {
        return (
            <div className="white_bg">
    <div className="container margin_60">
        
        <div className="main_title">
            <h2 className="nomargin_top">Choose from Most Popular</h2>
            <p>
                Cum doctus civibus efficiantur in imperdiet deterruisset.
            </p>
        </div>
        
        <div className="row">
           {
               this.restaurants.map((restaurant, index) => {
                   return <RestaurantItem 
                   name={restaurant.name} 
                   type={restaurant.type} 
                   location={restaurant.loaction} 
                   opening={restaurant.opening} 
                   key={index}
                   />
               })
           }            
        </div>  
        
        </div>
        </div>
        )
    }
}

export default RestaurantList