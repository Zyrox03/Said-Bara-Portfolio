// toggleMenu 


let humLogo = document.querySelector('.humLogo i');
let navSide = document.querySelector('.navSide');

humLogo.addEventListener('click',function(){
    navSide.classList.toggle('flex');
    console.log('hi')
    })


    // send Email 

    function sendEmail(){
        Email.send({
          
             SecureToken : "71a6c017-5429-4e95-913c-268f78411819",
            To : 'justzyrox03@gmail.com',
            From : 'anisanissou2003@gmail.com',
            Subject : "New Contact",
            Body : "Name : " + document.querySelector('#name').value 
            + "<br> Email : " + document.querySelector('#email').value 
            + "<br> Message : <br> <br>" + document.querySelector('#theText').value 
        }).then(
          message => alert("Thank you for reaching out !")
        );  
    }
