let x = 0;
let y = 0;
let isDrawing = false;

const myPics = document.getElementById('myPics');
const context = myPics.getContext('2d');
// console.log(context)

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

myPics.addEventListener('mousedown', e => {
    console.log(e)
    x = e.offsetX;
    y = e.offsetY;
    console.log(`the X is ${x}`)
    console.log(`the Y is ${y}`)
    isDrawing = true
}) //hold the button of mouse

myPics.addEventListener('mousemove', e => {
    if (isDrawing == true) {
        drawLine(context, x, y, e.offsetX, e.offsetY)
        x = e.offsetX
        y = e.offsetY
    }
})//move the mouse

myPics.addEventListener('mouseup', e => {
    if (isDrawing == true) {
        isDrawing = false
    }
})//let go the button of mouse

function drawLine(context, x1, y1, x2, y2) {
    context.beginPath(); //מתחיל דרך חדשה
    context.strokeStyle = 'black'; //צבע של המרקר
    context.lineWidth = 1; //עובי של המרקר
    context.moveTo(x1, y1); //שם את ההקודה בפרמנטרים שניתנו
    context.lineTo(x2, y2); //מעביר קו לנקודה שצויינה
    context.stroke(); //מצייר את המעבר/מראה
    context.closePath(); //סוגר את הדרך
}
