document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('loginForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        if (validateForm(username, password)) {
            alert('Login successful!');
        }
    });
});
function validateForm(username, password) {
    if (!username) {
        alert('Username is required.');
        return false;
    }
    if (!password) {
        alert('Password is required.');
        return false;
    }
    return true;
}
