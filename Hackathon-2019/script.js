JsBarcode("#barcode", "SpaceX lunching event");

function display() {
    // get inputs from user and assign those to variables
    let fullName = document.getElementById('fullNameInput').value;
    let email = document.getElementById('emailInput').value;
    let phoneNumber = document.getElementById('phoneNumberInput').value;
    let companyName = document.getElementById('companyNameInput').value;
    let state = document.getElementById('stateInput').value;

    // check user inputs whether those are valid or not
    fullName = checkFullName(fullName);
    email = checkEmail(email);
    phoneNumber = checkPhoneNumber(phoneNumber);
    companyName = checkCompanyName(companyName);
    state = checkState(state);

    // when all inputs checked, display those on the screen
    if (fullName && email && phoneNumber && companyName && state) {
        // display inputs
        document.getElementById('fullNameOutput').innerHTML = `${fullName}`;
        document.getElementById('companyNameOutput').innerHTML = `${companyName}, ${state}`;
        document.getElementById('phoneNumberOutput').innerHTML = `${phoneNumber}`;
        document.getElementById('emailOutput').innerHTML = `${email}`;
    }
}

function checkFullName(name) {
    // check fullname includes at least one whitespace or not
    if (!(name.includes(' '))) {
        // if it doesn't include any whitespace, alert to inform it
        alert("Enter your full name");
    } else if (name[0] === ' ' || name[name.length - 1] === ' ') {
        alert("Enter your full name");
    } else {
        let firstName, lastName;
        let fullNameArr = name.split(' ');
        firstName = fullNameArr[0];
        for (let i = 1; i < fullNameArr.length; i++) {
            if (fullNameArr[i] !== '') {
                lastName = fullNameArr[i];
                break;
            }
        }

        // make first letter of each names to capital
        firstName = firstName[0].toUpperCase() + firstName.slice(1);
        lastName = lastName[0].toUpperCase() + lastName.slice(1);
        return `${firstName} ${lastName}`;
    }
}

function checkEmail(email) {
    // check email includes '@' character
    if (!(email.includes('@'))) {
        alert("Enter your email")
    } else {
        let index = email.indexOf('@');
        // make substring from next character of '@' to end of the email
        let endOfEmail = email.substring(index + 1, email.length);
        // check substring of end of the email includes '.' character
        if (!(endOfEmail.includes('.'))) {
            alert("Enter your email");
        }
        return email;
    }
}

function checkPhoneNumber(phoneNumber) {
    // check phone number have 12 characters
    if (phoneNumber.length !== 12) {
        alert('Enter valid phone number');
    }
    //  check the fourth and the seventh character of phone number are '-' character
    else if ((phoneNumber[3] !== '-') || (phoneNumber[7] !== '-')) {
        alert('Enter valid phone number');
    }
    // let first3 = phoneNumber.substr(0, 3);
    // let mid3 = phoneNumber.substr(4, 3);
    // let last4 = phoneNumber.substr(8, 4);
    // check the rest of the character of phone number are numbers
    else if (isNaN(phoneNumber.substr(0, 3)) || isNaN(phoneNumber.substr(4, 3)) || isNaN(phoneNumber.substr(8, 4))) {
        alert('Enter valid phone number');
    } else {
        return phoneNumber;
    }
}

function checkCompanyName(companyName) {
    if (companyName.length === 0) {
        alert("Enter your company name");
    } else {
        companyName = companyName[0].toUpperCase() + companyName.slice(1);
        return companyName;
    }
}

function checkState(state) {
    if (state.length !== 2) {
        alert("Enter valid state name");
    } else {
        state = state.toUpperCase();
        return state;
    }
}