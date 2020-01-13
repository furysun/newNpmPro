import '../css/style.css';
import {Router} from './router.js';
import {Task2} from './tasks/task2.js';
import {Task1} from "./tasks/task1";
import {Task3} from "./tasks/task3";
import {Task4} from "./tasks/task4";
import {Task5} from "./tasks/task5";
import {Task6} from "./tasks/task6";
import {Task7} from "./tasks/task7";
import {task10} from "./tasks/task10";
import {task11} from "./tasks/task11";
import {LoginPage} from "./tasks/LoginPage";


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('login-button').onclick = LoginPage.login;
    document.getElementById('registration-button').onclick = Router.registration;
    document.getElementById('goHome').onclick = Router.goHome;
    document.getElementById('logout').onclick = Router.goLoginPage;

    // Task3.prepare();
    // Task1.prepare();
    // Task2.prepare();
    // Task4.prepare();
    // Task5.prepare();
    // Task6.prepare();
    // Task7.prepare();
    // task10();
    task11();


});

function old() {
    // // simple objects
    // let cat = {
    //     name: 'tom'
    // };
    //
    // let cat2 = {
    //     name: 'mimi',
    //     move: function () {
    //         console.log(this.name + ' moves');
    //     }
    // };
    //
    // cat.move = function () {
    //     console.log(cat.name + ' moves');
    // };
    //
    // cat.move();
    // cat2.move();
    //
    //
    // // old classes
    // let Cat = function (name) {
    //     this.name = name;
    //     this.move = function () {
    //         console.log(this.name + ' moves');
    //         return this;
    //     }
    // };
    //
    // Cat.prototype.say = function () {
    //     console.log(this.name + " meows");
    // };
    //
    // let cat3 = new Cat('qwr');
    // let cat4 = new Cat('qwggwr');
    //
    // cat3.move().say();
    // cat4.move().say();


    // the global variable
    var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

    /* This function should add a book to the list and return the list */
// New parameters should come before bookName

// Add your code below this line
    function add(arr, bookName) {
        let newArr = arr.slice();

        newArr.push(bookName);

        return newArr;

        // Add your code above this line
    }

    /* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
    function remove(bookName) {
        let newArr = bookList.slice();
        var book_index = newArr.indexOf(bookName);
        if (book_index >= 0) {

            newArr.splice(book_index, 1);
            return newArr;

            // Add your code above this line
        }
    }

    let names = ['tom', 'oasim', 'terem', 'bsdoasim', 'tim'];
    let result = [];
    // old
    // for (let i = 0; i < names.length; i++) {
    //     result.push(names[i]+'1');
    // }


    // names.length
    // names.reverse();
    // names.slice();
    // names.splice();
    // names.push();
    // names.unshift();
    // names.concat();

    // new es5/6:
    // names.sort()
    // names.forEach()
    // names.filter()
    // names.map()
    // names.reduce()

    // result = names.map(function (name) {
    //     return name + '1';
    // });

    result = names
        .map((name) => name + '1')
        .reverse()
        .sort()
        .filter((name) => name.substring(0, 1) === 't');

    // console.log(result);

    // map
    // cats.map((cat) => {
    //     cat.age += 10;
    // });
    //
    // console.log(cats);
    //
    //
    // let sum = 0;
    // cats.forEach((cat) => {
    //     sum += cat.age;
    // });
    //
    // console.log(sum);
    //
    // let catsFiltered = cats.filter((cat1)=>{
    //     return cat1.age < 15;
    // });
    //
    // console.log(catsFiltered);

    const cats = [
        {name: 'tim', age: 2, hasHost: false},
        {name: 'tom', age: 5, hasHost: true},
        {name: 'im', age: 7, hasHost: false},
        {name: 'ti', age: 4, hasHost: true},
        {name: 'trum', age: 1, hasHost: false}
    ];

    // const catParent = {
    //     firstName: 'Vivi',
    //     lastName: 'Nori',
    //     amountOfCats: 0,
    //     cats: []
    // };

    let nameT = [];
    // cats.forEach((c) => {
    //     if (c.name.substring(0, 1) === 't') {
    //         nameT.push(c.name);
    //     }
    // });
    //

    nameT = cats.filter((cat) => {
        return cat.name.substring(0, 1) === 't'; // boolean
    })
        .reduce((result, cat) => {
            result.push(cat.name);
            return result;
        }, []);

    console.log(nameT);

    // ['tim', 'tom', 'trum']


    // cats.filter((c) => {
    //     return c.hasHost === false;
    // })
    //     .forEach((c) => {
    //         catParent.amountOfCats += 1;
    //         catParent.cats.push(c);
    //     });
    //
    // console.log(catParent);


    function sumAll(arr) {
        let sum = 0;
        arr.sort((a, b) => a - b);
        console.log(arr);
        for (let i = arr[0]; i <= arr[1]; i++) {
            sum += i;
        }
        return sum;
    }

    console.log(sumAll([5, 10]));
}



