import React from 'react'

const RestaurantItem = (props) => {
    return (
        <div className="col-md-6">
            <a href="detail_page.html" className="strip_list">
                <div className="ribbon_1">Popular</div>
                    <div className="desc">
                        <div className="thumb_strip">
                            <img src="img/thumb_restaurant.jpg" alt="" />
                        </div>
                        <div className="rating">
                            <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                        </div>
                        <h3>{props.name}</h3>
                        <div className="type">
                            {props.type}
                        </div>
                        <div className="location">
                            {props.location} <span className="opening">Opens at {props.opening}</span>
                        </div>
                        <ul>
                            <li>Take away<i className="icon_check_alt2 ok"></i></li>
                            <li>Delivery<i className="icon_check_alt2 ok"></i></li>
                        </ul>
                </div>
            </a>
        </div>
    )
}

export default RestaurantItem