const LOCAL_STORAGE_KEYS = {
    USERS: 'users',
    CURRENT_USER: 'currentUser',
};

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

    if (!name || !birthDate || !email || !password) {
        document.getElementById('signupMessage').textContent = 'Please fill in all fields.';
        return;
    }

    const users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.USERS)) || {};

    if (users[email]) {
        document.getElementById('signupMessage').textContent = 'Account already exists!';
    } else {
        users[email] = { name, birthDate, password };
        localStorage.setItem(LOCAL_STORAGE_KEYS.USERS, JSON.stringify(users));
        document.getElementById('signupMessage').textContent = 'Account created successfully! Redirecting to sign-in...';
        
        setTimeout(() => {
            switchToSignInLink.click();
            document.getElementById('signupMessage').textContent = '';
        }, 2000);
    }

    document.getElementById('signupForm').reset();
});

document.getElementById('signinForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signinPassword').value;

    const users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.USERS)) || {};

    if (users[email]) {
        if (users[email].password === password) {
            document.getElementById('signinMessage').textContent = `Sign-in successful! Welcome, ${users[email].name}`;
            document.getElementById('signinMessage').style.color = 'green';
            localStorage.setItem(LOCAL_STORAGE_KEYS.CURRENT_USER, email);
            
            setTimeout(() => {
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
