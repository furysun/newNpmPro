export function task10() {
    console.log('task10');
    // testForEach();
    // testMap();
    // testFilter();
    // testFind();
    // testSome();
    // testSort();
    // testReduce();
    testChain();
}


function testForEach() {
    const arr = [
        {name: 'tim', age: 3},
        {name: 'tom', age: 4},
        {name: 'rom', age: 13},
        {name: 'pom', age: 8},
        {name: 'som', age: 10}
    ];

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].name + " : " + arr[i].age);
    }

    arr.forEach(function (item) {
        console.log(item.name + " : " + item.age);
    });

    arr.forEach((item) => {
        console.log(item.name + " : " + item.age);
    });

    arr.forEach((item) => console.log(item.name + " : " + item.age));
}

function testMap() {
    const arr = [
        {name: 'tim', age: 3},
        {name: 'tom', age: 4},
        {name: 'rom', age: 13},
        {name: 'pom', age: 8},
        {name: 'som', age: 10}
    ];

    for (let i = 0; i < arr.length; i++) {
        arr[i].name += ' <3';
    }

    arr.map(function (item) {
        item.name += ' *_*';
    });

    arr.map((item) => item.name += ' ^^^');


    console.log(arr);

}

function testFilter() {
    const arr = [
        {name: 'tim', age: 3},
        {name: 'tom', age: 4},
        {name: 'rom', age: 13},
        {name: 'pom', age: 8},
        {name: 'som', age: 11}
    ];

    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age > 10) {
            result.push(arr[i]);
        }
    }
    console.log(result);

    const result2 = arr.filter(function (item) {
        return item.age > 10;//boolean
    });
    console.log(result2);

    const result3 = arr.filter((item) => item.age > 10);
    console.log(result3);
}

function testFind() {
    const arr = [
        {name: 'tim', age: 3},
        {name: 'tom', age: 4},
        {name: 'rom', age: 13},
        {name: 'pom', age: 8},
        {name: 'som', age: 11}
    ];


    let cat;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === 'tom') {
            cat = arr[i];
        }
    }
    console.log(cat);

    let cat2 = arr.find(function (item) {
        return item.name === 'tom';
    });
    console.log(cat2);

    let cat3 = arr.find((item) => item.name === 'tom');
    console.log(cat3);
}

function testSome() {
    const arr = [
        {name: 'tim', age: 3},
        {name: 'tom', age: 4},
        {name: 'rom', age: 13},
        {name: 'pom', age: 8},
        {name: 'som', age: 11}
    ];

    let contains = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === 'tom') {
            contains = true;
        }
    }
    console.log(contains);

    let contains2 = arr.some(function (item) {
        return item.name === 'tom';
    });
    console.log(contains2);

    let contains3 = arr.some((item) => item.name === 'tom');
    console.log(contains3);
}

function testSort() {
    const arr = [
        {name: 'tim', age: 3},
        {name: 'tom', age: 4},
        {name: 'rom', age: 13},
        {name: 'pom', age: 8},
        {name: 'som', age: 11}
    ];


    arr.sort(function (item1, item2) {
        return item1.age - item2.age;
    });
    console.log(arr);

    arr.sort((item1, item2) => item1.age - item2.age);
    console.log(arr);
}

function testReduce() {
    const arr = [
        {name: 'tim', age: 3},
        {name: 'tom', age: 4},
        {name: 'rom', age: 13},
        {name: 'pom', age: 8},
        {name: 'som', age: 11}
    ];

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].age;
    }
    console.log(sum);


    let sum2 = arr.reduce(function (sum, item) {
        sum += item.age;
        return sum;
    }, 0);

    console.log(sum2);

    let result2 = arr.reduce((result, item) => {
        result.push(item.name);
        return result;
    }, []);
    console.log(result2);
}

function testChain() {
    const arr = [
        {
            name: 'oir',
            age: 20,
            cars: [
                {name: 'fiat'},
                {name: 'asd'}
            ]
        },
        {
            name: 'fir',
            age: 15,
            cars: [
                {name: 'fiat'},
                {name: 'bmw'},
                {name: 'asd'}

            ]
        },
        {
            name: 'fir',
            age: 35,
            cars: [
                {name: 'fiat'},
                {name: 'bmw'},
                {name: 'asd'},
                {name: 'as'}

            ]
        }, {
            name: 'fir',
            age: 47,
            cars: []
        }, {
            name: 'fr',
            age: 10,
            cars: [
                {name: 'bmw'}
            ]
        }
    ];

    let result = arr
        .filter((item) => item.age >= 18)
        .map((item) => {
            item.amountOfCars = item.cars.length;
            return item;
        })
        .sort((item1, item2)=>item2.amountOfCars - item1.amountOfCars);
    console.log(result);

}

