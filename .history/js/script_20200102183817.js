'use strict';

{
    /*Responsive left menu -hiden/show hamburger*/

    const hamburgerMenuLeft = document.getElementById('hamburger');
    const mobileMenu = document.querySelector('.navigationWraperMobile');

    hamburgerMenuLeft.addEventListener('click', function(){
        mobileMenu.classList.toggle('active');
    });

    /*swith between pages*/

    const titleClickedHandler = function(event){
        event.preventDefault();
        console.log(event);
        mobileMenu.classList.toggle('active');

        const activeLinks = document.querySelectorAll('.titles a.active');
        for(let activeLink of activeLinks) {
            activeLink.classList.remove('active');
        };

        const clickedElement = this;
        clickedElement.classList.add('active');

        const activePosts= document.querySelectorAll('.post_page');
        for(let activePost of activePosts) {
            activePost.classList.remove('active');
        };

        const postSelector = clickedElement.getAttribute('href');
        console.log("działa? " + postSelector);

        const targetPost = document.querySelector(postSelector);
        console.log("działa?" + targetPost);


        targetPost.classList.add('active');
    }

    const links = document.querySelectorAll('.titles a');

    for(let link of links) {
        link.addEventListener('click', titleClickedHandler);
    }

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

        if(nameInput.value.length < 1) {

            isFormValidate = false;
            nameInput.parentElement.querySelector('.error').innerHTML = 'Name must be filled out';
        }
        else
        {
            nameInput.parentElement.querySelector('.error').innerHTML = '';
        }

        //surname  validation /

        let surnameInput = event.target.querySelector('input[name="surname"]')
        if(surnameInput.value.length < 1) {
            isFormValidate = false;
            surnameInput.parentElement.querySelector('.error').innerHTML = 'Surname must be filled out';
        }
        else
        {
            surnameInput.parentElement.querySelector('.error').innerHTML = '';
        }

        //eMail validation /

        let emailAddressInput = event.target.querySelector('input[name="email"]')
        if(emailAddressInput.value.indexOf('@') < 0) {
            isFormValidate = false;
            emailAddressInput.parentElement.querySelector('.error').innerHTML = 'Incorect e-mail adress';
        }
        else {
            emailAddressInput.parentElement.querySelector('.error').innerHTML = '';
        }

        //phoneNumber Validation
        /*var phoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        let phoneInput = event.target.querySelector('input[name="phoneNumber"]')
        if(phoneInput.value.match(phoneNumber)) {
            isFormValidate = true;
            phoneInput.parentElement.querySelector('.error').innerHTML = '';
        }
        else {
            isFormValidate = false;
            phoneInput.parentElement.querySelector('.error').innerHTML = 'Incorect phone number';
        }*/

        /*password walidation*/
        let passwordInput = event.target.querySelector('input[name="password"]')
        let repeatInput = event.target.querySelector('input[name="repeatPassword"]')
        if(passwordInput.value != repeatInput.value) {
            isFormValidate = false;
            passwordInput.parentElement.querySelector('.error').innerHTML = 'Password and Password repetition have to be the same !';
        }
        else {
            if (passwordInput.value.length > 0)
            {
                passwordInput.parentElement.querySelector('.error').innerHTML = '';
            }
        }

        /*checkbox walidation*/
        let checkBox = event.target.querySelector('input[name="checkbox"]')
        let checkBoxExists = event.target.querySelector('.checkbox:checked')

        console.log(checkBoxExists);
        console.log(checkBoxExists == null);

        if(checkBoxExists == null) {
            isFormValidate = false;
            checkBox.parentElement.querySelector('.error').innerHTML = 'Box must be checked';
        }
        else {
            checkBox.parentElement.querySelector('.error').innerHTML = '';
        }

        return !isFormValidate ? event.preventDefault() : true;
    })

    /*cancel quit*/

    const quitButton = document.getElementById('iconQuit')

    quitButton.addEventListener('click', function(){

    });

    function closeModal() {
        document.getElementById('overlay').classList.remove('show')
      }

      document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
          e.preventDefault()
          closeModal()
        })
      })

      document.addEventListener('keyup', function(e) {
        if(e.keyCode === 27) {
          closeModal()
        }
      })

      function openModal(modal) {
        document.querySelectorAll('#overlay > *').forEach(function(modal) {
          modal.classList.remove('show')
        })
        document.querySelector('#overlay').classList.add('show')
        document.querySelector(modal).classList.add('show')
      }
}
