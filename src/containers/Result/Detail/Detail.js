import React, { Component } from 'react'
import Menu from '../../../components/Menu/Menu'
import Header from '../Header/Header'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
// import MealTypeOptions from './MealTypeOptions/MealTypeOptions'
import MealMenu from './MealMenu/MealMenu'
import Cart from '../Cart/Cart'
import Wrapper from '../../../hoc/Wrapper/Wrapper'
import { NavLink } from 'react-router-dom'

class Detail extends Component  {
    
    state = {
        activeGroup: 'starters',
        groups: [
            {
                name: 'starters', amount: 141
            },
            {
                name: 'main', amount: 20
            },
            {
                name: 'drinks', amount: 12
            },
            {
                name: 'beef', amount: 50
            },
        ],
        meals: [
            { name: 'Potato chips',
              amount: 1000 
            },
            {
                name: 'Scrambled Eggs',
                amount: 1500
            },
            {
                name: 'Chicken Sandwich',
                amount: 1000
            },
            {
                name: 'Toast and Sausages',
                amount: 1500
            },

        ],
        cart: [
            {
							items: [
								{ 
									name: '',
									quantity: '',
									amount: ''
							},
							],
							total: ''
                
            }
        ]
    }

    groupClickedHandler = (name) => {
        let meals
        switch(name) {
            case 'starters':
                meals = [ { name: 'Potato chips',
                        amount: 1000 },
                    {
                        name: 'Scrambled Eggs',
                        amount: 1500
                    },
                    {
                        name: 'Chicken Sandwich',
                        amount: 1000
                    },
                    {
                        name: 'Toast and Sausages',
                        amount: 1500
                    },
        
                ]
                break;
            case 'main':
                meals = [ { name: 'Egusi Soup',
                amount: 1000 },
                    {
                        name: 'Bitter Leaf Soup',
                        amount: 1500
                    },
                    {
                        name: 'Okra Soup',
                        amount: 1000
                    },
                    {
                        name: 'Native Soup',
                        amount: 1500
                    },

                ]
                break;
                case 'drinks':
                meals = [ { name: 'Coke',
                amount: 250 },
                    {
                        name: 'Pepsi',
                        amount: 200
                    },
                    {
                        name: 'Chivita',
                        amount: 500
                    },
                    {
                        name: 'Five Alive',
                        amount: 500
                    },

                ]
                break;
            default:

        }
        const newState = { 
            ...this.state,
            activeGroup: name,
            meals: meals
        }
        this.setState(newState)
    }
   render()  {
       return (
        <Wrapper>
        <Menu />
        <Header />
        <Breadcrumbs />
        <div className="container margin_60_35">
		<div className="row">
        
			<div className="col-md-3">
            	<p><a href="list_page.html" className="btn_side">Back to search</a></p>
                {/* <MealTypeOptions/> */}
                <div className="box_style_1">
                    <ul id="cat_nav">
                {this.state.groups.map((group, index) => { 
                    let name = group.name
                    return (<li key={index}>
                    <NavLink onClick={()=>this.groupClickedHandler(name)} >
                    {group.name} <span>({group.amount})</span></NavLink></li>)
                }
                    )
                }
                        
                    </ul>
                </div>
            </div>            
            <MealMenu meals={this.state.meals} mealGroup={this.state.activeGroup} />
            <Cart />
        </div>
        </div>
        </Wrapper>           
       )
   }
}

export default Detail