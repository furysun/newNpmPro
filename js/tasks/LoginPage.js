import {Router} from "../router";
import {users} from "./Resource";

export class LoginPage {
    static login() {

        const loginInputValue = document.getElementById('login-input').value;
        const passwordInputValue = document.getElementById('password-input').value;

        if (LoginPage.userExists(loginInputValue, passwordInputValue)) {
            Router.goToHomePage();
        } else {
            LoginPage.showErrorMessage();
        }
    }

    static showErrorMessage() {
        document.getElementById("error").innerText = 'error';
    }

    static userExists(login, password) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].login === login && users[i].password === password) {
                return true;
            }
        }

        return false;
    }
}
