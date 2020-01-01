'use strict';

{
    /*Quit */

    const quitPage= document.getElementById('iconQuit');

    /*Responsive left menu -hiden/show hamburger*/

    const hamburgerMenuLeft = document.getElementById('hamburger');
    const mobileMenu = document.querySelector('.navigationWraperMobile');

    hamburgerMenuLeft.addEventListener('click', function(){
        mobileMenu.classList.toggle('active');
    });

    /*swith between pages*/

    const titleClickedHandler = function(event){

        const activeLinks = document.querySelectorAll('.titles a.active');
        for(let activeLink of activeLinks) {
            activeLink.classList.remove('active');
        };

        event.preventDefault();
        const clickedElement = this;
        clickedElement.classList.add('active');

        const activePosts= document.querySelectorAll('.post_page');
        for(let activePost of activePosts) {
            activePost.classList.remove('active');
        };

        const postSelector = clickedElement.getAttribute('href');
        console.log("działa? " + postSelector);

        const targetPost = document.querySelectorAll(postSelector);

        targetPost.classList.add('active');
    }

    const links = document.querySelectorAll('.titles a');

    for(let link of links) {
        link.addEventListener('click', titleClickedHandler);
    }

    titleClickedHandler();

    /*statistic canvas*/

    var ctx = document.getElementById('myChart').getContext('2d');

    var chart = new Chart(ctx, {
        // 1
        type: 'bar',
        data: {
            // 2
            labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
            // 3
            datasets: [{
                // 4
                label: "Signups",
                // 5
                backgroundColor: '#8DBEC8',
                borderColor: '#8DBEC8',
                // 6
                data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
            },
            {
                label: "FTD",
                backgroundColor: '#F29E4E',
                borderColor: '#F29E4E',
                data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
            },
            {
                label: "Earned",
                backgroundColor: '#71B374',
                borderColor: '#71B374',
                data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
                // 7
                hidden: true,
            }]
        },
    });

    /*form validation*/

    document.querySelector('form').addEventListener('submit', function(event) {
        let isFormValidate = true;

        //name  validation /

        let nameInput = event.target.querySelector('input[name="name"]')
        if(nameInput.value.indexOf('@') < 0) {
            isFormValidate = false;
            nameInput.parentElement.querySelector('.error').innerHTML = 'Name must be filled out';
        }

        //surname  validation /

        let surnameInput = event.target.querySelector('input[name="surname"]')
        if(surnameInput.value.indexOf('@') < 0) {
            isFormValidate = false;
            surnameInput.parentElement.querySelector('.error').innerHTML = 'Surname must be filled out';
        }

        //eMail validation /

        let emailAddressInput = event.target.querySelector('input[name="email"]')
        if(emailAddressInput.value.indexOf('@') < 0) {
            isFormValidate = false;
            emailAddressInput.parentElement.querySelector('.error').innerHTML = 'Incorect e-mail adress';
        }

        //phoneNumber Validation
        var phoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        let phoneInput = event.target.querySelector('input[name="phoneNumber"]')
        if(phoneInput.value.match(phoneNumber)) {
            return true;
        }
        else {
            isFormValidate = false;
            phoneInput.parentElement.querySelector('.error').innerHTML = 'Incorect phone number';
        }

        /*password walidation*/
        let passwordInput = event.target.querySelector('input[name="password"]')
        if(passwordInput.value.indexOf('@') < 0) {
            isFormValidate = false;
            passwordInput.parentElement.querySelector('.error').innerHTML = 'Password must be filled out';
        }

        /*repeat walidation*/
        let repeatInput = event.target.querySelector('input[name="repeatPassword"]')
        if(repeatInput.value.indexOf('@') < 0) {
            isFormValidate = false;
            repeatInput.parentElement.querySelector('.error').innerHTML = 'Repeat must be filled out';
        }

        /*checkbox walidation*/

        return !isFormValidate ? event.preventDefault() : true;
    })
}
