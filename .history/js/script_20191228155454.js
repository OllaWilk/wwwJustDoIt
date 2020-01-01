/*Responsive left menu - hamburger*/

const hamburgerMenuLeft = document.getElementById('hamburger');
const mobileMenu = document.querySelector('.navigationWraperMobile');

hamburger.addEventListener('click', function(){
    mobileMenu.classList.toggle('active');
});

/*statistic*/

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

    /*eMail validation */
    let emailAddressInput = event.target.querySelector('input[name="email"]')
    if(emailAddressInput.value.indexOf('@') < 0) {
        isFormValidate = false;
        emailAddressInput.parentElement.querySelector('.error').innerHTML = 'Incorect e-mail adress';
    }

    return !isFormValidate ? event.preventDefault() : true;

})

document.querySelector('form').addEventListener('submit', function(event) {
    let isFormValidate = true;

    /*name surname validation */

    let nameInput = event.target.querySelector('input[name="name"]')
    if(nameInput.value.indexOf('@') < 0) {
        isFormValidate = false;
       nameInput.parentElement.querySelector('.errorText').innerHTML = 'Incorect e-mail adress';
    }

    return !isFormValidate ? event.preventDefault() : true;

})