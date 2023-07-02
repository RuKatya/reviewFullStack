import React from 'react'

function NewApp() {

    const image = { src: 'https://picsum.photos/200' }

    function user(obj) {
        return <p>{`${obj.name} is from ${obj.city} and she is ${obj.age} years old`}</p>
    }

    function adult(obj, image) {
        if (obj) {
            if (obj.name) {
                if (image) {
                    return <div>
                        {user(obj)}
                        <img src={image.src} alt="lalala" />
                    </div>
                } else {
                    return user(obj)
                }
            } else {
                return <p>name is empty</p>
            }
        } else {
            return <p>obj is empty</p>
        }
    }

    const obj = { name: 'Golda', city: 'Holon', age: 27 }

    return (
        <>
            {/* <p>{obj.name} is from {obj.city} and she is {obj.age} years old</p> */}
            {/* <p>{user(obj)}</p> */}
            {/* {adult()} */}
            {adult(obj, image)}
        </>
    )

}

export default NewApp;