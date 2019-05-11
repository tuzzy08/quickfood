import React from 'react'
import CounterItem from './CounterItem/CounterItem'

const Counter = (props) => (
    <div id="count" className="hidden-xs">
        <ul>
            {
                props.data.map((item, index) => {
                    return <CounterItem label = { item.label } amount = { item.amount } key = { index }/>
                })
            }
            
        </ul>
    </div>
    
)

export default Counter