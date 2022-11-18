// nav toggle

let nav = document.querySelector('nav');
let navBtn = document.querySelector('.NavBtn');

let isClicked = false;

navBtn.addEventListener('mouseover', function () {

    if (isClicked === false) {

        nav.style.transform = "translateX(0%)"

        isClicked = true;
    } else {

        nav.style.transform = "translateX(-100%)"

        isClicked = false;
    }



    // when hover outside nav


    window.addEventListener('mouseover', function (e) {


        if (nav.contains(e.target)) {
            return

        } else {

            if (e.target === navBtn) {

                return



            } else {


                nav.style.transform = 'translateX(-100%)';



                isClicked = false;
            }


        }
    }, { once: false });




}, { once: false })




// css animations


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');

        }
        else {
            // entry.target.classList.remove('show');


        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
const hiddenElements1 = document.querySelectorAll('.hidden1')





hiddenElements.forEach((el) => observer.observe(el));
hiddenElements1.forEach((el) => observer.observe(el));



// project hover

let projects = document.querySelectorAll('.project');



projects.forEach((project) => {

    project.addEventListener('mouseover', function () {
        let pInfo = project.lastElementChild;

        pInfo.style.transform = 'translateY(0%)'



        project.addEventListener('mouseout', function () {
            let pInfo = project.lastElementChild;

            pInfo.style.transform = 'translateY(100%)'



        })


    })
})


// copy socials 

let env = document.querySelector('.env');
let copied = document.querySelector('.copied');

let phone = document.querySelector('.phone');
let copied1 = document.querySelector('.copied1');

function copyEmail() {


    navigator.clipboard.writeText

        ("justzyrox03@gmail.com");

}
function copyPhone() {


    navigator.clipboard.writeText

        ("+2137 81 44 10 49");

}

env.addEventListener('click', function () {

    copied.style.transform = 'scale(1)';

    setTimeout(function () {
        copied.style.transform = 'scale(0)';

    }, 1000)


    copyEmail()
})



phone.addEventListener('click', function () {

    copied1.style.transform = 'scale(1)';

    setTimeout(function () {
        copied1.style.transform = 'scale(0)';

    }, 1000)


    copyPhone()
})

