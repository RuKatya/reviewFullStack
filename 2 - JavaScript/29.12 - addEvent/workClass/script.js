const button = document.querySelector('button')
const image = document.querySelector('img')

button.addEventListener('click', function(){
    image.src = 'https://www.panek-otam.co.il/wp-content/uploads/2020/10/3-1.png'
})

let scrollPosition = 0;

window.addEventListener('scroll', ()=> {
    scrollPosition = window.scrollY;
    console.log(scrollPosition)

    if ( scrollPosition > 100 ) {
        image.src = "https://www.permaculture.org.il/wp-content/uploads/elementor/thumbs/unnamed-6-mgkb6phpbjd0mg5lym8sbm7h4q5r0vcrtgeyk1nlhk.jpg"
    } else if ( scrollPosition < 100 ) {
        image.src = 'https://hevdel.co.il/wp-content/uploads/2018/11/easter-349026_640.jpg'
    }
})