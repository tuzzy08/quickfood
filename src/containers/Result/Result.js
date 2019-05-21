import React, { Component } from 'react'
import Wrapper from '../../hoc/Wrapper/Wrapper'
import Menu from '../../components/Menu/Menu'
import Header from './Header/Header'
import Breadcrumbs from './Breadcrumbs/Breadcrumbs'
import ResultFilters from './ResultFilters/ResultFilters'
import ResultItem from './ResultItem/ResultItem'





class Result extends Component {

    state =  {
		Data: false,
		results: [
			'Genesis',
			'Happy Bite',
			'Uno',
			'Jevinik',
			'Kilimanjaro',
			'The office',
			'The Promise'
		]
    }
    
    render () {
        return (
					<Wrapper>
						<Menu />
						<Header />
        		<Breadcrumbs />						
							 <div className="container margin_60_35">
	<div className="row">
    
		<div className="col-md-3">
			<p>
				<a className="btn_map" data-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap">View on map</a>
			</p>
			
			{/* Result Filters Component */}
			<ResultFilters />
			
		</div>
        
		<div className="col-md-9">
        
        <div id="tools">
				<div className="row">
					<div className="col-md-3 col-sm-3 col-xs-6">
						<div className="styled-select">
							<select name="sort_rating" id="sort_rating">
								<option value="" selected>Sort by ranking</option>
								<option value="lower">Lowest ranking</option>
								<option value="higher">Highest ranking</option>
							</select>
						</div>
					</div>
					<div className="col-md-9 col-sm-9 hidden-xs">
						<a href="grid_list.html" className="bt_filters"><i className="icon-th"></i></a>
					</div>
				</div>
			</div>

		{/* Results Item Component here */}
		{this.state.results.map((result, index) => <ResultItem key={index} detail='/details' />)}
            <a href="#0" className="load_more_bt wow fadeIn" data-wow-delay="0.2s">Load more...</a>  
		</div>
        
	</div>
</div>
</Wrapper>

            
        )
    }

}

export default Result