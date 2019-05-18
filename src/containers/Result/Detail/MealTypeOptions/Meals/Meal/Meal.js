import React from 'react'

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
             <div className="dropdown-menu">
                 <h5>Select an option</h5>
                 <label>
                 <input type="radio" value="option1" name="options_1" />Medium <span>+ ₦ {props.mediumAmount}</span>
                 </label>
                 <label>
                 <input type="radio" value="option2" name="options_1" />Large <span>+ ₦ {props.largeAmount}</span>
                 </label>
                 <label>
                 <input type="radio" value="option3" name="options_1" />Extra Large <span>+ ₦ {props.extraLargeAmount}</span>
                 </label>
                 {/* <h5>Add ingredients</h5>
                 <label>
                 <input type="checkbox" value=""/>Extra Tomato <span>+ $4.30</span>
                 </label>
                 <label>
                 <input type="checkbox" value=""/>Extra Peppers <span>+ $2.50</span>
                 </label> */}
                 <a href="#0" className="add_to_basket">Add to cart</a>
             </div>
         </div>
     </td>
     </tr>
    )
}

export default Meal 