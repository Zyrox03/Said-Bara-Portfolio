
// Change Main Image in product info code


let mainImage = document.querySelector('.mainImage').children[0];


let lilImages = document.querySelector('.lilImages');

lilImages.addEventListener('click',function(e){
    

    let clickedImg = e.target

    mainImage.src = clickedImg.src
})


// form input 

let form = document.querySelector('.AddForm');
let qty = form.querySelector('input');
let price = parseFloat(form.querySelector('h4 span').innerText);
let addBtn = form.querySelector('button');

let pTotal = 0;

addBtn.addEventListener('click',function(e){
    e.preventDefault()
    pTotal =  qty.value * price
    console.log('Your total is :',pTotal)
})

