import React from 'react'
import Meals from '../MealTypeOptions/Meals/Meals'

const description = `Te ferri iisque aliquando pro, posse nonumes efficiantur in cum. 
Sensibus reprimique eu pro. Fuisset mentitum deleniti sit ea.`
const Menu = (props) => {
 return (
 <div className="col-md-6">
 <div className="box_style_2" id="main_menu">
     <h2 className="inner">Menu</h2>
     <Meals  description = {description} meals={props.meals} mealGroup={props.mealGroup} />
 </div>
</div>
)   
}

export default Menu