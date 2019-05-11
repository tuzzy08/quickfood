import React, { Component } from 'react'
import Wrapper from '../../hoc/Wrapper/Wrapper'

class Menu extends Component {

    render() {
        return (
            <Wrapper>
                <header>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col--md-4 col-sm-4 col-xs-4">
                                <a href="/" id="logo">
                                <img src="assets/img/logo.png" width="190" height="23" alt="" data-retina="true" className="hidden-xs"/>
                                <img src="assets/img/logo_mobile.png" width="59" height="23" alt="" data-retina="true" className="hidden-lg hidden-md hidden-sm"/>
                                </a>
                            </div>
                            <nav className="col--md-8 col-sm-8 col-xs-8">
                            <a className="cmn-toggle-switch cmn-toggle-switch__htx open_close" href="javascript:void(0);"><span>Menu mobile</span></a>
                            <div className="main-menu">
                                <div id="header_menu">
                                    <img src="assets/img/logo.png" width="190" height="23" alt="" data-retina="true"/>
                                </div>
                                <a href="#" className="open_close" id="close_in"><i className="icon_close"></i></a>
                                <ul>
                                    <li className="submenu">
                                    <a href="/" className="show-submenu">Home</a>
                                    </li>
                                    <li className="submenu">
                                    <a href="javascript:void(0);" className="show-submenu">Restaurants</a>
                                    </li>
                                    <li><a href="javascript:void(0);">About us</a></li>
                                    <li><a href="javascript:void(0);">Contact us</a></li>
                                    <li><a href="#0" data-toggle="modal" data-target="#login_2">Login</a></li>
                                </ul>
                            </div>
                            </nav>
                        </div>
                    </div>
                </header>
            </Wrapper>
        )
    }
}

export default Menu