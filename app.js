
// css animations



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');

        }
        else {
            entry.target.classList.remove('show');


        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
const hiddenElements1 = document.querySelectorAll('.hidden1')

const hiddenSquare = document.querySelectorAll('.hidden')


hiddenElements.forEach((el) => observer.observe(el));
hiddenElements1.forEach((el) => observer.observe(el));



// quote mouse Click effect 

let quoteWord = document.querySelector('.quote q span')
let count = 0

function addOne() {
    count++

    if (count <= 6) {

        return count
    } else {

        return 0;
    }


}
quoteWord.addEventListener('click', function () {

    
    addOne()

    if (count === 0) {
        quoteWord.innerText = 'Click Me'

    } else if (count === 1) {
        quoteWord.innerText = 'Happiness'


    } else if (count === 2) {
        quoteWord.innerText = 'Peace'


    } else if (count === 3) {
        quoteWord.innerText = 'Success'

    } else if (count === 4) {
        quoteWord.innerText = 'Love'

    } else if (count === 5) {
        quoteWord.innerText = 'Respect'

    } else if (count === 6) {
        quoteWord.innerText = 'Everything'

    }

})




// Main image rotate at hover

let rotateBtn = document.querySelector('.MainPage button')
let rotateImg = document.querySelector('.MainPage img')

rotateBtn.addEventListener('mouseover',function(){
    rotateImg.style.transform = "rotate(6deg)"

    rotateBtn.addEventListener('mouseout',function(){
        rotateImg.style.transform = "rotate(0deg)"
    })
})


// toggleMenu 


let humLogo = document.querySelector('.humLogo i');
let navSide = document.querySelector('.navSide');

humLogo.addEventListener('click',function(){
    navSide.classList.toggle('flex');
    })

    
