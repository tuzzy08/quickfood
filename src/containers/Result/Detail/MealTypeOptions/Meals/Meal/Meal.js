import React from 'react'
// import Extras from './Extras'

const Meal = (props) => {
    return (
        <tr>
         <td>
             <figure className="thumb_menu_list"><img src="/assets/img/menu-thumb-1.jpg" alt="thumb"/></figure>
             <h5>{props.name}</h5>
             
         </td>
         <td>
             <strong>₦ {props.amount}</strong>
         </td>
         <td className="options">
         <div className="dropdown dropdown-options">
             <a href="#" className="dropdown-toggle" 
             data-toggle="dropdown" aria-expanded="true">
             <i className="icon_plus_alt2"></i></a>
             
         </div>
     </td>
     </tr>
    )
}

export default Meal 