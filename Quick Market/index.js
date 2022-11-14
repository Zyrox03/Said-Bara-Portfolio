
// burger menu 


let burgerMenu = document.querySelector('.burgerMenu i:nth-of-type(2)');
let rightSlide = document.querySelector('.rightSlide');

let isClicked = true

burgerMenu.addEventListener('click',function(){
    

    if(isClicked == true){

        rightSlide.style.transform = 'translateX(0%)'
        
        isClicked = false

    }else{
        rightSlide.style.transform = 'translateX(100%)';



        isClicked = true;

    
    };


})




//  remove rightSlide when clicked outside

// let 

window.addEventListener('click', function(e){   
    if (rightSlide.contains(e.target) ){
        return

    } else{

        if(e.target ===  burgerMenu){

           return

        }else{

            
            rightSlide.style.transform = 'translateX(100%)';
    
    
    
            isClicked = true;
        }
     

    }
  });


//   resize


let mobileBtn = document.querySelector('.burgerMenu i:nth-of-type(1) ');
let forMobileSize = document.querySelector('.forMobileSize');

let nav = document.querySelector('nav');
let buyNow = document.querySelector('.buyNow');

let onMobile = true


mobileBtn.addEventListener('click',function(){

    if(onMobile == true){

        forMobileSize.style.width = '23em';
        nav.style.width = '23em';
        mobileBtn.style.color = 'green'


        
        onMobile = false

    }else{
        forMobileSize.style.width = '100%';
        nav.style.width = '100%';

        mobileBtn.style.color = 'black'





        onMobile = true;

    



    };




})
