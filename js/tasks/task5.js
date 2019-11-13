export class Task5 {
    static prepare() {
        document.getElementById('oke').onclick = Task5.printName;
    }

    static printName() {
        const name = document.getElementById('p-input').value;

        if (name.length <= 5) {
             document.getElementById('p').innerText = name;
        } else {
            document.getElementById('p').innerText = 'error';

        }
    }
}