import React from 'react'

const StepCard = (props) => {
    return (
        <div className="col-md-3">
               <div className="box_home" id="three">
                   <span>{props.id}</span>
                   <h3>{props.highlight}</h3>
                   <p>
                       {props.text}
                   </p>
               </div>
           </div>
    )
}

export default StepCard