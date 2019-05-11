import React from 'react'

const CounterItem = (props) => {
    return <li><span className="number">{ props.amount }</span> { props.label }</li>
}

export default CounterItem