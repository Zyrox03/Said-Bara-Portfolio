// menuToggle 

let toggleBtn = document.querySelector('.burgerLogo');
let navMobile = document.querySelector('.navBar-mb');

toggleBtn.addEventListener('click',function(){
    navMobile.classList.toggle('hidden')
})


navMobile.addEventListener('mouseover',function(){
    navMobile.classList.remove('hidden');
})

navMobile.addEventListener('mouseout',function(){
    navMobile.classList.add('hidden');
})