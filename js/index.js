import '../css/style.css';
import {Router} from './router.js';
import {Task2} from './tasks/task2.js';
import {Task1} from "./tasks/task1";
import {Task3} from "./tasks/task3";


document.addEventListener("DOMContentLoaded", function () {

    document.getElementById('login-button').onclick = Router.login;
    document.getElementById('registration-button').onclick = Router.registration;
    document.getElementById('goHome').onclick = Router.goHome;
    document.getElementById('logout').onclick = Router.goLoginPage;

    Task3.prepare();
    Task1.prepare();
    Task2.prepare();
});


