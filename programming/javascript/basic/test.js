const ele=document.getElementById("bdy");
const red= document.querySelector('.red');
const green=document.querySelector('.green');
const blue=document.querySelector('.blue');


red.addEventListener('Click',()=>{
    ele.style.backgroundColour="green"

})

blue.addEventListener('click',()=>{
    ele.style.backgroundColour="blue"
})

green.addEventListener('click',()=>{
    ele.style.backgroundColour="green"
})