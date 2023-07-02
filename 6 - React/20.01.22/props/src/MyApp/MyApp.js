import React from "react";

function MyApp() {

    const image = {src:"https://picsum.photos/200", alt:"image-of-picsumImage"}

    function funImage(image) {
        if (image) {
            return <img src={image.src} alt={image.alt} />
        } else {
            console.log('there is no image to show')
        }
    }

    return (

        <div>
            {funImage(image)}
            {/* <img src={image.src} alt={image.alt} /> */}
            <p>hy</p>
        </div>
    )
}

export default MyApp;