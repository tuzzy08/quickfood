import React from 'react'
import Wrapper from '.././../../../../hoc/Wrapper/Wrapper'
import Meal from './Meal/Meal'

const Meals = (props) => {
    return (
        <Wrapper>
        <h3 className="nomargin_top" id="starters">{props.mealGroup}</h3>
     <p>
         {props.description}
     </p>
     <table className="table table-striped cart-list">
     <thead>
     <tr>
         <th>
              Item
         </th>
         <th>
              Price
         </th>
         <th>
              Order
         </th>
     </tr>
     </thead>
     <tbody>
         {props.meals.map((meal,index) => <Meal name={meal.name} amount={meal.amount} key={index} />)}
        {/* <Meal />      */}
     </tbody>
     </table>
     </Wrapper>
    )
}

export default Meals