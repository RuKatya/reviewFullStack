import React from 'react';

function Item({ item }) {
    // const item = props.item
    // const {item} = props

    // console.log(index)
    return (
        <div>
            <h1>{item.name}</h1>
            <p>{item.desc}</p>
        </div>
    )
}

export default Item;