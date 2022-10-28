// toggleMenu 


let humLogo = document.querySelector('.humLogo i');
let navSide = document.querySelector('.navSide');

humLogo.addEventListener('click',function(){
    navSide.classList.toggle('flex');
    console.log('hi')
    })
