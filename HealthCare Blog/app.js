
let menuitems = document.getElementById("menuitems");
let body = document.querySelector('body');





// // Got it pop up

    
let gotItBtn = document.querySelector('.note button');
let noteContainer = document.querySelector('.noteContainer');

setTimeout(function () {
    noteContainer.style.display = 'inline-block';
    
    disable()
    

}, 2000);

gotItBtn.addEventListener('click', function () {
    noteContainer.style.display = 'none'
    
    enable()
    
    
})




function disable() {
    document.body.classList.add("stop-scrolling-gotIt");
}


function enable() {
    document.body.classList.remove("stop-scrolling-gotIt");
}




let blog = document.querySelector('.main-blog-page')
blog.addEventListener('mouseover',function(){

    let timeOut = setTimeout(function(){
        conditionMenu.style.display = 'none';
        discoverMenu.style.display = 'none';
        planMenu.style.display = 'none';
        shopMenu.style.display = 'none';
        connectMenu.style.display = 'none';
        xMark.style.display = 'none'

      },200)
    

  timeOut()
})



// headerMore



let header = document.querySelector('header')
let headerMore = document.querySelector('.headerMore');

let xMark = document.querySelector('.xMark');


xMark.addEventListener('click',function(){
    conditionMenu.style.display = 'none';
    discoverMenu.style.display = 'none';
    planMenu.style.display = 'none';
    shopMenu.style.display = 'none';
    connectMenu.style.display = 'none';
    xMark.style.display = 'none';
})

// condition

let conditionMenu = document.querySelector('.conditions');
let condition = menuitems.childNodes[1].childNodes[1];


condition.addEventListener('mouseover',function(){
   setTimeout( function(){
    conditionMenu.style.display = 'flex';
    discoverMenu.style.display = 'none';
    planMenu.style.display = 'none';
    shopMenu.style.display = 'none';
    connectMenu.style.display = 'none';
    xMark.style.display = 'inline'
    
},200)
})






// discover

let discoverMenu = document.querySelector('.discover');
let discover =  menuitems.childNodes[1].childNodes[3]    

discover.addEventListener('mouseover',function(){
    setTimeout( function(){
        discoverMenu.style.display = 'flex';
        conditionMenu.style.display = 'none';
        planMenu.style.display = 'none';
        shopMenu.style.display = 'none';
        connectMenu.style.display = 'none';
        xMark.style.display = 'inline';
     
 },200)
})


// plan

let planMenu = document.querySelector('.plan');
let plan = menuitems.childNodes[1].childNodes[5]    

plan.addEventListener('mouseover',function(){
    setTimeout( function(){
        discoverMenu.style.display = 'none';
        conditionMenu.style.display = 'none';
        planMenu.style.display = 'flex';
        shopMenu.style.display = 'none';
        connectMenu.style.display = 'none';
        xMark.style.display = 'inline';
 },200)
})

// connect

let connectMenu = document.querySelector('.connect');
let connect =  menuitems.childNodes[1].childNodes[7]    

connect.addEventListener('mouseover',function(){
    setTimeout( function(){
        discoverMenu.style.display = 'none';
        conditionMenu.style.display = 'none';
        planMenu.style.display = 'none';
        shopMenu.style.display = 'none';
        connectMenu.style.display = 'inline';
        xMark.style.display = 'inline';
        
 },200)
})


// shop

let shopMenu = document.querySelector('.shop');
let shop =  menuitems.childNodes[1].childNodes[9]   

shop.addEventListener('mouseover',function(){
    setTimeout( function(){
        discoverMenu.style.display = 'none';
        conditionMenu.style.display = 'none';
        planMenu.style.display = 'none';
        shopMenu.style.display = 'flex';
        connectMenu.style.display = 'none';
        xMark.style.display = 'inline';
      
       
 },200)
})




// menuitems

let menuicone = document.querySelector('.menuicone');
let navSide = document.querySelector('.navSide');
let search = document.querySelector('.search');
let navSideContainer = document.querySelector('.navSideContainer');




menuicone.addEventListener('click',function(){
    navSideContainer.classList.toggle('hidden');
    document.body.classList.toggle("stop-scrolling-navSide");
    navSideContainer.style.width = "100%"
   
})




let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

if(viewportWidth <= 1115){
    search.addEventListener('click',function(){
        navSideContainer.classList.remove('hidden');
        document.body.classList.add("stop-scrolling-navSide");
        console.log('hi')
    })
}else{
    navSideContainer.classList.add('hidden');
        document.body.classList.remove("stop-scrolling-navSide");

    search.addEventListener('click',function(){
        navSideContainer.classList.add('hidden');
        document.body.classList.remove("stop-scrolling-navSide");
       
       
    })
}



window.addEventListener('resize', function () {
	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
	if (viewportWidth <= 1115) {
       
		search.addEventListener('click',function(){
            navSideContainer.classList.remove('hidden');
            document.body.classList.add("stop-scrolling-navSide");
        })
	} else {
        navSideContainer.classList.add('hidden');
        document.body.classList.remove("stop-scrolling-navSide");
        
        search.addEventListener('click',function(){
            navSideContainer.classList.add('hidden');
            document.body.classList.remove("stop-scrolling-navSide");
           
        })
		
	}
}, false);


 
