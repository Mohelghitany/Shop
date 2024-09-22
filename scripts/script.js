
const signInFormDiv = document.getElementById('signinFormDiv');
const signUpFormDiv = document.getElementById('signupFormDiv');
const switchToSignUpLink = document.getElementById('switchToSignUp');
const switchToSignInLink = document.getElementById('switchToSignIn');


switchToSignUpLink.addEventListener('click', function (event) {
    event.preventDefault();
    signInFormDiv.style.display = 'none';
    signUpFormDiv.style.display = 'block';
});


switchToSignInLink.addEventListener('click', function (event) {
    event.preventDefault();
    signUpFormDiv.style.display = 'none';
    signInFormDiv.style.display = 'block';
});


document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('signupName').value;
    const birthDate = document.getElementById('signupBirthDate').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    const user = { name, birthDate, email, password };

    if (localStorage.getItem(email)) {
        document.getElementById('signupMessage').textContent = 'Account already exists!';
    } else {
        localStorage.setItem(email, JSON.stringify(user));
        document.getElementById('signupMessage').textContent = 'Account created successfully! Redirecting to sign-in...';

       
        setTimeout(function () {
            switchToSignIn();
            document.getElementById('signupMessage').textContent = '';  
        }, 2000);
    }

    document.getElementById('signupForm').reset();
});


document.getElementById('signinForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signinPassword').value;

    const storedUser = localStorage.getItem(email);

    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.password === password) {
            document.getElementById('signinMessage').textContent = `Sign-in successful! Welcome, ${user.name}`;
            document.getElementById('signinMessage').style.color = 'green';

            
            localStorage.setItem('currentUser', email);

           
            setTimeout(function () {
                window.location.href = 'index.html';
            }, 1000);
        } else {
            document.getElementById('signinMessage').textContent = 'Invalid password!';
            document.getElementById('signinMessage').style.color = 'red';
        }
    } else {
        document.getElementById('signinMessage').textContent = 'No account found with this email!';
        document.getElementById('signinMessage').style.color = 'red';
    }

    document.getElementById('signinForm').reset();
});
