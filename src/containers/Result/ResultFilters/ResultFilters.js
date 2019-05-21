import React, { Component } from 'react'

class ResultFilters extends Component {
    state = {}

    render() {
        return (
            <div id="filters_col">
				<a data-toggle="collapse" href="#collapseFilters" aria-expanded="false" aria-controls="collapseFilters" id="filters_col_bt">Filters <i className="icon-plus-1 pull-right"></i></a>
				<div className="collapse" id="collapseFilters">
					<div className="filter_type">
                    	<h6>Distance</h6>
                        <input type="text" id="range" value="" name="range"/>
						<h6>Type</h6>
						<ul>
							<li><label><input type="checkbox" checked className="icheck"/>All <small>(49)</small></label></li>
							<li><label><input type="checkbox" className="icheck"/>American <small>(12)</small></label><i className="color_1"></i></li>
							<li><label><input type="checkbox" className="icheck"/>Chinese <small>(5)</small></label><i className="color_2"></i></li>
							<li><label><input type="checkbox" className="icheck"/>Hamburger <small>(7)</small></label><i className="color_3"></i></li>
							<li><label><input type="checkbox" className="icheck"/>Fish <small>(1)</small></label><i className="color_4"></i></li>
							<li><label><input type="checkbox" className="icheck"/>Mexican <small>(49)</small></label><i className="color_5"></i></li>
							<li><label><input type="checkbox" className="icheck"/>Pizza <small>(22)</small></label><i className="color_6"></i></li>
							<li><label><input type="checkbox" className="icheck"/>Sushi <small>(43)</small></label><i className="color_7"></i></li>
						</ul>
					</div>
					<div className="filter_type">
						<h6>Rating</h6>
						<ul>
							<li><label><input type="checkbox" className="icheck"/><span className="rating">
							<i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i>
							</span></label></li>
							<li><label><input type="checkbox" className="icheck"/><span className="rating">
							<i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
							</span></label></li>
							<li><label><input type="checkbox" className="icheck"/><span className="rating">
							<i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i>
							</span></label></li>
							<li><label><input type="checkbox" className="icheck"/><span className="rating">
							<i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i>
							</span></label></li>
							<li><label><input type="checkbox" className="icheck"/><span className="rating">
							<i className="icon_star voted"></i><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i><i className="icon_star"></i>
							</span></label></li>
						</ul>
					</div>
					<div className="filter_type">
						<h6>Options</h6>
						<ul className="nomargin">
							<li><label><input type="checkbox" className="icheck"/>Delivery</label></li>
							<li><label><input type="checkbox" className="icheck"/>Take Away</label></li>
							<li><label><input type="checkbox" className="icheck"/>Distance 10Km</label></li>
							<li><label><input type="checkbox" className="icheck"/>Distance 5Km</label></li>
						</ul>
					</div>
				</div>
			</div>
        )
    }
}

export default ResultFilters