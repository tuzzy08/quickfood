import React from 'react'

const Preloader = (props) => (
    <div id={props.id}>
        <div className="sk-spinner sk-spinner-wave" id="status">
            <div className="sk-rect1"></div>
            <div className="sk-rect2"></div>
            <div className="sk-rect3"></div>
            <div className="sk-rect4"></div>
            <div className="sk-rect5"></div>
        </div>
    </div>
)

export default Preloader