import React, { Component } from 'react'
import OrderButton from './OrderButton'

class Cart extends Component {

	orderHandler = (e) => {

	}

    render() {
        return (
            <div className="col-md-3" id="sidebar">
            <div className="theiaStickySidebar">
				<div id="cart_box" >
					<h3>Your order <i className="icon_cart_alt pull-right"></i></h3>
					<table className="table table_summary">
					<tbody>
					<tr>
						<td>
							<a href="#0" className="remove_item"><i className="icon_minus_alt"></i></a> <strong>1x</strong> Enchiladas
						</td>
						<td>
							<strong className="pull-right">₦11</strong>
						</td>
					</tr>
					<tr>
						<td>
							<a href="#0" className="remove_item"><i className="icon_minus_alt"></i></a> <strong>2x</strong> Burrito
						</td>
						<td>
							<strong className="pull-right">₦14</strong>
						</td>
					</tr>
					<tr>
						<td>
							<a href="#0" className="remove_item"><i className="icon_minus_alt"></i></a> <strong>1x</strong> Chicken
						</td>
						<td>
							<strong className="pull-right">₦20</strong>
						</td>
					</tr>
					<tr>
						<td>
							<a href="#0" className="remove_item"><i className="icon_minus_alt"></i></a> <strong>2x</strong> Corona Beer
						</td>
						<td>
							<strong className="pull-right">₦9</strong>
						</td>
					</tr>
					<tr>
						<td>
							<a href="#0" className="remove_item"><i className="icon_minus_alt"></i></a> <strong>2x</strong> Cheese Cake
						</td>
						<td>
							<strong className="pull-right">₦12</strong>
						</td>
					</tr>
					</tbody>
					</table>
					<hr/>		
                    
					<hr/>
					<table className="table table_summary">
					<tbody>
					<tr>
						<td>
							 Subtotal <span className="pull-right">₦56</span>
						</td>
					</tr>
					<tr>
						<td>
							 Delivery fee <span className="pull-right">₦10</span>
						</td>
					</tr>
					<tr>
						<td className="total">
							 TOTAL <span className="pull-right">₦66</span>
						</td>
					</tr>
					</tbody>
					</table>
					<hr />
					<OrderButton onClick={this.orderHandler} />
				</div>
                </div>
			</div>
        )
    }
}

export default Cart