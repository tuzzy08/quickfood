import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

class MealTypeOptions extends Component {
    
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
                name: 'beef', amount: 12
            },
            {
                name: 'drinks', amount: 50
            },
        ]
    }

    groupClickedHandler = (name) => {
        const newState = { 
            ...this.state,
            activeGroup: name.toString()
        }
        this.setState(newState)
    }
    render() {
       return (
        <div className="box_style_1">
        <ul id="cat_nav">
       {this.state.groups.map((group, index) => <li key={index}>
           <NavLink onClick={this.groupClickedHandler} >{group.name} <span>({group.amount})</span></NavLink></li>)}
            
        </ul>
    </div>
       )
    }
}

export default MealTypeOptions