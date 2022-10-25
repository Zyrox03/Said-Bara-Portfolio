// toggleMenu 


let humLogo = document.querySelector('.humLogo img');
let navSide = document.querySelector('.navSide');

humLogo.addEventListener('click',function(){
    navSide.classList.toggle('flex');
    console.log('hi')
    })
