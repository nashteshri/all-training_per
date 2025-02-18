document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm') as HTMLFormElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = (document.getElementById('new-username') as HTMLInputElement).value;
        const password = (document.getElementById('new-password') as HTMLInputElement).value;
        const E-mail = (document.getElementById('E-mail') as HTMLInputElement).value;

        if (validateForm(username, password)) {
            alert('Signup successful!');
        }
    });
});

function validateForm(username: string, password: string): boolean {
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
