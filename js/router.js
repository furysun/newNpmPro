export class Router {

    static goToHomePage() {
        document.getElementById('home').hidden = false;
        document.getElementById('login').hidden = true;
    };

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