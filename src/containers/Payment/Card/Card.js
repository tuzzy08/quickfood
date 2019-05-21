import React, {Component} from 'react'
import Wrapper from '../../../hoc/Wrapper/Wrapper'

class Card extends Component {
    render() {
        return (
            <Wrapper>
            <div className="form-group">
                <label>Name on card</label>
                <input type="text" className="form-control" 
                    id="name_card_order" name="name_card_order" 
                    placeholder="First and last name"/>
            </div>
            <div className="form-group">
                <label>Card number</label>
                <input type="text" id="card_number" 
                    name="card_number" className="form-control" 
                    placeholder="Card number"/>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label>Expiration date</label>
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="form-group">
                                <input type="text" id="expire_month" 
                                    name="expire_month" className="form-control"   
                                    placeholder="mm"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="form-group">
                                <input type="text" id="expire_year" 
                                    name="expire_year" className="form-control" 
                                    placeholder="yyyy"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                        <label>Security code</label>
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="form-group">
                                    <input type="text" id="ccv" name="ccv" 
                                        className="form-control" placeholder="CCV"/>
                                </div>
                            </div>
                            <div className="col-md-8 col-sm-6">
                                <img src="img/icon_ccv.gif" width="50"
                                        height="29" alt="ccv"/><small>Last 3 digits</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Wrapper>
        )
    }
}

export default Card