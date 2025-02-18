document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('signupForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var username = document.getElementById('new-username').value;
        var password = document.getElementById('new-password').value;
        if (validateForm(username, password)) {
            alert('Signup successful!');
        }
    });
});
function validateForm(username, password) {
    if (!username) {
        alert('Username is required.Please enter the username');
        return false;
    }
    if (!password) {
        alert('Password is required.please eneter the password');
        return false;
    }
    return true;
}
