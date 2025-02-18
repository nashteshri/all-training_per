document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm') as HTMLFormElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = (document.getElementById('username') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;

        if (validateForm(username, password)) {
            alert('Login successful!');
        }
    });
});

function validateForm(username: string, password: string): boolean {
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
