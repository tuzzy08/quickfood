import React from 'react'

const MenuItem = (props) => {
    return (
        <tr>
            <td>
                <figure className="thumb_menu_list"><img src="img/menu-thumb-1.jpg" alt="thumb"/></figure>
                <h5>{props.meal}</h5>
                <p>
                    {props.description}
                </p>
            </td>
            <td>
                <strong>N {props.price}</strong>
            </td>
                <td className="options">
                <div className="dropdown dropdown-options">
                    <a href="#" className="dropdown-toggle" dataToggle="dropdown" ariaExpanded="true"><i className="icon_plus_alt2"></i></a>
                    <div className="dropdown-menu">
                        <h5>Select an option</h5>
                        <label>
                        <input type="radio" value="option1" name="options_1" checked/>Medium <span>+ N {props.price}</span>
                        </label>
                        <label>
                        <input type="radio" value="option2" name="options_1" />Large <span>+ N{props.price}</span>
                        </label>
                        <label>
                        <input type="radio" value="option3" name="options_1" />Extra Large <span>+ N{props.price}</span>
                        </label>                        
                        <a href="#0" className="add_to_basket">Add to cart</a>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default MenuItem