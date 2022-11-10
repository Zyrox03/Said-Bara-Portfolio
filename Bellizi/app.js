let products = document.querySelector('.theProducts')
let product = document.querySelectorAll('.square');

let categories = document.querySelector('.leftSide .categories ul');
let pages = document.querySelector('.pages');
let price = document.querySelector('.leftSide .price ul');





let AllBtn = categories.children[0];
let Shirt = categories.children[1];
let Jacket = categories.children[2];
let Pant = categories.children[3];
let Shoe = categories.children[4];

let AllBt = price.children[0];
let Expensive = price.children[1];
let Affordable = price.children[2];
let Cheap = price.children[3];









product.forEach(oneP =>{
    let productImg = oneP.children[0]
    oneP.addEventListener('mouseover',function(){
        productImg.style.transform = 'scale(1.1)'
    
    
    })

    oneP.addEventListener('mouseout',function(){
        productImg.style.transform = 'scale(1)'
    
    
    })
    
})


// category 

function AllBack() {
    pages.remove()
    for (let i = 0; i < product.length; i++) {
        products.append(product[i])
    }
    products.append(pages)
}

AllBtn.addEventListener('click', function () {

    AllBack()

})

Shirt.addEventListener('click', function () {
    AllBack()

    for (let i = 0; i < product.length; i++) {
        if (product[i].classList.contains('pant') === true || product[i].classList.contains('shoe') === true || product[i].classList.contains('jacket') === true) {

            product[i].remove();
        }


    }
})


Jacket.addEventListener('click', function () {
    AllBack()

    for (let i = 0; i < product.length; i++) {
        if (product[i].classList.contains('pant') === true || product[i].classList.contains('shoe') === true || product[i].classList.contains('shirt') === true) {


            product[i].remove();
        }


    }
})


Pant.addEventListener('click', function () {
    AllBack()

    for (let i = 0; i < product.length; i++) {
        if (product[i].classList.contains('shirt') === true || product[i].classList.contains('shoe') === true || product[i].classList.contains('jacket') === true) {


            product[i].remove();
        }


    }
})

Shoe.addEventListener('click', function () {
    AllBack()
    

    for (let i = 0; i < product.length; i++) {
        if (product[i].classList.contains('pant') === true || product[i].classList.contains('shirt') === true || product[i].classList.contains('jacket') === true) {



            product[i].remove();
        }


    }
})



// price 


AllBt.addEventListener('click', function () {

    AllBack()

})

Expensive.addEventListener('click', function () {
    AllBack()

    for (let i = 0; i < product.length; i++) {
        if (product[i].classList.contains('cheap') === true || product[i].classList.contains('aff') === true ) {
            product[i].remove();
        }


    }
})


Affordable.addEventListener('click', function () {
    AllBack()

    for (let i = 0; i < product.length; i++) {
        if (product[i].classList.contains('cheap') === true || product[i].classList.contains('exp') === true ) {
            product[i].remove();
        }


    }
})


Cheap.addEventListener('click', function () {
    AllBack()

    for (let i = 0; i < product.length; i++) {
        if (product[i].classList.contains('aff') === true || product[i].classList.contains('exp') === true ) {
            product[i].remove();
        }


    }
})








// Burger Menu 


let menuBtn = document.querySelector('.humLogo');
let anotherNav = document.querySelector('.anotherNav');

let isClicked = true

menuBtn.addEventListener('click',function(){


if(isClicked == true){
anotherNav.style.transform = 'translateY(0px)'

    isClicked = false
}else{
anotherNav.style.transform = 'translateY(-300px)'

    isClicked = true
}


})


