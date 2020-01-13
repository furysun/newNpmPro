export function task9() {
    console.log('start');
    //
    // let a = {name: ''};
    //
    // get(a);
    //
    // setTimeout(() => {
    //     console.log(a.name);
    //     console.log("finish");
    //
    // }, 2000);
    //

    let a = new Promise(function (resolve, reject) {
        let b = 'tim';
        if (b === 'tim') {
            console.log('meow!');
            resolve();
        } else {
            reject();
        }
    });


}

window.task9 = task9;

// function alertWithTimeout() {
//     setTimeout(function () {
//         console.log('finish');
//         alert('<3 mr');
//     }, 1000);
// }

// function get(a) {
//
//     setTimeout(() => {
//         console.log('get');
//         a.name = 'mif mif mif';
//     }, 1500);
// }


export function countOnline(usersObj) {
    // change code below this line
    let count = 0;

    for (let user in usersObj) {
        console.log(usersObj[user]);
        if (user.online === true) {
            count++;
        }
    }
    return count;
    // change code above this line
}

// export function findLongestWordLength(str) {
//     let result = 0;
//     let arr = str.split(' ');
//     for (let i = 0; i < arr.length; i++) {
//         let size = arr[i].length;
//         if (size > result) {
//             result = size;
//         }
//     }
//
//     return result;
// }
//
// export function titleCase(str) {
//
//     for (let i = 0; i < str.length; i++) {
//     }
// }


export function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    let sortedArr = arr.sort(function (a, b) {
        return a - b;
    });

    console.log(sortedArr);
    let result = 0;

    for (let i = 0; i < sortedArr.length; i++) {
        if (num <= sortedArr[i]) {
            console.log(sortedArr[i]);
            result = i;
            break;
        }

        if (i === sortedArr.length - 1) {
            result = sortedArr.length;

        }
    }

    return result;
}
