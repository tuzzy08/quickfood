import React from 'react'
import Wrapper from '../../../hoc/Wrapper/Wrapper'

const Breadcrumbs = () => {
    return (
			<Wrapper>
				<div id="position">
					<div className="container">
							<ul>
									<li><a href="#0">Home</a></li>
									<li><a href="#0">Category</a></li>
									<li>Page active</li>
							</ul>
							<a href="#0" className="search-overlay-menu-btn"><i className="icon-search-6"></i> Search</a>
					</div>
				</div>
	
				<div className="collapse" id="collapseMap">
					<div id="map" className="map"></div>
				</div>
			</Wrapper>			
    )
}

export default Breadcrumbs