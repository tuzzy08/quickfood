import React from "react"
import Wrapper from '../../hoc/Wrapper/Wrapper'
import StepCard from '../Steps/StepCard/StepCard'

const Steps = (props) => {

    const boxData = [
        {
            boxHighlight: 'Search by address',
            boxText: 'Find all restaurants available in your zone.',            
        },
        {
            boxHighlight: 'Choose a restaurant',
            boxText: 'We have more than 1000s of menus online.',
        },
        {
            boxHighlight: 'Pay by card or cash',
            boxText: `It's quick, easy and totally secure.`,
        },
        {
            boxHighlight: 'Delivery or takeaway',
            boxText: 'You are lazy? Are you backing home?',
        }
    ]
    return (
        <Wrapper>
            <div className="container margin_60">
        
        <div className="main_title">
           <h2 className="nomargin_top" style={ {paddingTop:0} }>How it works</h2>
           <p>
               Cum doctus civibus efficiantur in imperdiet deterruisset.
           </p>
       </div>
       <div className="row">   
            {
                boxData.map((box, index) => {
                    return <StepCard id={index + 1} highlight={box.boxHighlight} text={box.boxText} key={index} />
                })
            }           
       </div>
       
       </div>
        </Wrapper>
    )
}

export default Steps