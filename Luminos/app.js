let track = document.querySelector('.caroussel-track');
let slides = Array.from(track.children);

let previousBtn = document.querySelector('.fa-chevron-left');
let nextBtn = document.querySelector('.fa-chevron-right');

let dotsNav = document.querySelector('.circles');
let dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// arrange the slides next to one another

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);


const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translate(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const moveToDot = (currentDotDisplay, targetDot) => {

    currentDotDisplay.classList.remove('isOnDisplay');
    targetDot.classList.add('isOnDisplay');

}

const hideShowButton = (dots, targetIndex, previousBtn, nextBtn) => {

    if (targetIndex === 0) {
        previousBtn.parentElement.classList.add('isHidden');
        nextBtn.parentElement.classList.remove('isHidden');
    }

    else if (targetIndex === slides.length - 1) {
        nextBtn.parentElement.classList.add('isHidden');
        previousBtn.parentElement.classList.remove('isHidden');
    } else {
        nextBtn.parentElement.classList.remove('isHidden');
        previousBtn.parentElement.classList.remove('isHidden');
    }

}


// when i click nexButton 

nextBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.isOnDisplay');
    const nexDot = currentDot.nextElementSibling;
    const nexIndex = slides.findIndex(slide => slide === nextSlide);



    if (!nexDot) {
        return
    };

    // move to next Slide

    moveToSlide(track, currentSlide, nextSlide);
    moveToDot(currentDot, nexDot);
    hideShowButton(slides, nexIndex, previousBtn, nextBtn);

    




})



// when i click prevButton 

previousBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.isOnDisplay');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);


    if (!prevDot) return;

    // move to next Slide

    moveToSlide(track, currentSlide, prevSlide);
    moveToDot(currentDot, prevDot);
    hideShowButton(slides, prevIndex, previousBtn, nextBtn);

    
    

  

})


// when i click on dots

dotsNav.addEventListener('click', e => {
    
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');

    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];


    const currentDotDisplay = dotsNav.querySelector('.isOnDisplay');

    moveToSlide(track, currentSlide, targetSlide);
    moveToDot(currentDotDisplay, targetDot);
    hideShowButton(slides, targetIndex, previousBtn, nextBtn);

})


// when time flies



setInterval(function(){

    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.isOnDisplay');
    const nexDot = currentDot.nextElementSibling;
    const nexIndex = slides.findIndex(slide => slide === nextSlide);



    if (!nexDot){
        return
    };

    // move to next Slide 

    moveToSlide(track, currentSlide, nextSlide);
    moveToDot(currentDot, nexDot);
    hideShowButton(slides, nexIndex, previousBtn, nextBtn);

    if(nextBtn.parentElement.classList.contains('isHidden')){
    
        setTimeout(function(){
            moveToSlide(track, currentSlide, nextSlide.parentElement.children[0]);
           nexDot.classList.remove('isOnDisplay');
            moveToDot(currentDot, dots[0]);

            if(nexDot.parentElement.children[0].classList.contains('isOnDisplay')){
                previousBtn.parentElement.classList.add('isHidden');
                nextBtn.parentElement.classList.remove('isHidden');
                console.log('hi');
        }
        },6000)
        
    }



},6000)








// hover on designs
let design = document.querySelectorAll('.mainP .design')

design.forEach(design => {
    let overflowing = design.querySelector('.mainP .overflowing');
    let designImage = design.querySelector('.mainP img');

    design.addEventListener('mouseover', function () {
        
        // overflowing.style.display ='flex';
        // designImage.style.opacity ='0.4';
        designImage.style.transform ='scale(1.4)';
        
        

    })

    design.addEventListener('mouseout', function () {

        // overflowing.style.display ='none';
        // designImage.style.opacity ='1';
        designImage.style.transform ='scale(1)';



    })

    
})

