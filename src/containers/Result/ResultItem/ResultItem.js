import React from 'react'

const ResultItem = (props) => {
    return (
        <div className="strip_list wow fadeIn" data-wow-delay="0.1s">
				<div className="ribbon_1">
					Popular
				</div>
				<div className="row">
					<div className="col-md-9 col-sm-9">
						<div className="desc">
							<div className="thumb_strip">
								<a href="detail_page.html"><img src="img/thumb_restaurant.jpg" alt=""/></a>
							</div>
							<div className="rating">
								<i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i> (<small><a href="#0">98 reviews</a></small>)
							</div>
							<h3>{props.name}</h3>
							<div className="type">
                			{props.type}
							</div>
							<div className="location">
							{props.location} <span className="opening">Opens at {props.opening}</span> Minimum order: {props.minimumOrder}
							</div>
							<ul>
								<li>Take away<i className="icon_check_alt2 ok"></i></li>
								<li>Delivery<i className="icon_check_alt2 no"></i></li>
							</ul>
						</div>
					</div>
					<div className="col-md-3 col-sm-3">
						<div className="go_to">
							<div>
								<a href={props.detail} className="btn_1">View Menu</a>
							</div>
						</div>
					</div>
				</div>
			</div>
    )
}

export default ResultItem