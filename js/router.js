export class Router {
    static login() {

        const user = {
            login: 'admin',
            password: 'admin'
        };

        const log = document.getElementById('login-input').value;
        const pass = document.getElementById('password-input').value;

        if (user.login === log && user.password === pass) {
            document.getElementById('home').hidden = false;
            document.getElementById('login').hidden = true;
        } else {
            document.getElementById("error").innerText = 'error';
        }
    }

    static registration() {
        document.getElementById('registration').hidden = false;
        document.getElementById('login').hidden = true;
    }

    static goHome() {
        document.getElementById('registration').hidden = true;
        document.getElementById('home').hidden = false;
    }

    static goLoginPage() {
        document.getElementById('login').hidden = false;
        document.getElementById('home').hidden = true;
    }
}