// burger menu 



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




// hover effect on collection 


let collection = document.querySelectorAll('.oneCollection a');


collection.forEach(oneCollection =>{
    let collImg = oneCollection.children[0] ;


    oneCollection.addEventListener('mouseover',function(){

        collImg.style.transform = 'scale(1.05)'
    })

    oneCollection.addEventListener('mouseout',function(){

        collImg.style.transform = 'scale(1)'
    })
    
})



// testimonials hover 


let cards = document.querySelectorAll('.card');

cards.forEach(card=>{
    card.addEventListener('mouseover',function(){


        cards[0].classList.add('opac');
        cards[1].classList.add('opac');
        cards[2].classList.add('opac');

        card.classList.remove('opac');





    })

    card.addEventListener('mouseout',function(){

        cards[0].classList.remove('opac')
        cards[1].classList.remove('opac')
        cards[2].classList.remove('opac')



        


    })
})