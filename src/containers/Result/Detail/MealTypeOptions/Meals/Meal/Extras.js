import React from 'react'

const Extras = (props) => {
   return (
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
	 )
}

export default Extras