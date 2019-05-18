import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import $ from 'jquery'
import Wrapper from '../../hoc/Wrapper/Wrapper'
// import SubHeader from '../../containers/Header/SubHeader/SubHeader'



class Menu extends Component {

    constructor(props) {
        super(props)
        this.toggleHandler = this.toggleHandler.bind(this)
    }


    toggleHandler(e){
        e.classList.contains("active") ===!0 ? e.classList.remove("active") : e.classList.add("active")
        }

    toggleMenu(e) {
        $(".main-menu").toggleClass("show")
        $(".layer").toggleClass("layer-is-visible")
        $(".cmn-toggle-switch").toggleClass("active")
        
        
        
    }

    closeMobileMenu(e) {
        if($(window).width()<=600) {
            $(".cmn-toggle-switch").removeClass("active")
        }
        $(".main-menu").toggleClass("show")
        $(".layer").toggleClass("layer-is-visible")
        for(var toggles=document.querySelectorAll(".cmn-toggle-switch"),i=toggles.length-1;i>=0;i--){
            var toggle=toggles[i];
            this.toggleHandler(toggle)
        }
    }

    

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
                            <a className="cmn-toggle-switch cmn-toggle-switch__htx open_close" onClick={(e) => this.toggleMenu(e)}><span>Menu mobile</span></a>
                            <div className="main-menu">
                                <div id="header_menu">
                                    <img src="assets/img/logo.png" width="190" height="23" alt="" data-retina="true"/>
                                </div>
                                <a href="#" className="open_close" onClick={(e) => this.closeMobileMenu(e)} id="close_in"><i className="icon_close"></i></a>
                                <ul>
                                    <li><NavLink to="/" exact> Home </NavLink></li>
                                    <li><NavLink to="/restaurants" exact> Restaurants </NavLink></li>
                                    <li><NavLink to="/results" exact> Results </NavLink></li>
                                    <li><NavLink to="/about" exact> About us </NavLink></li>
                                    <li><NavLink to="/LOGIN" exact> Login </NavLink></li>
                                </ul>
                                
                               
                            </div>
                            </nav>
                        </div>
                    </div>
                </header>
                {/* <SubHeader /> */}
            </Wrapper>
        )
    }
}

export default Menu