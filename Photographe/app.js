// menuToggle 

let toggleBtn = document.querySelector('.burgerLogo');
let navMobile = document.querySelector('.navBar-mb');
let outside = document.querySelector('.right')

toggleBtn.addEventListener('click',function(){
    navMobile.classList.toggle('hidden');
    
})


navMobile.addEventListener('mouseover',function(){
    navMobile.classList.remove('hidden');
})

navMobile.addEventListener('mouseout',function(){
    navMobile.classList.add('hidden');
})


outside.addEventListener('click',function(){
    navMobile.classList.add('hidden');
})


