export class Task6 {
    static prepare() {
        document.getElementById('oks').onclick = Task6.show;
        document.getElementById('status').style.width = '1px';

    }

    static show() {
        const i = document.getElementById('in').value;

        const current = document.getElementById('status').style.width;
        console.log(document.getElementById('status').style);
        const currentNumber = current.substring(0, current.length - 2);

        document.getElementById('status').style.width = parseInt(currentNumber, 10) + parseInt(i, 10) + 'px';
    }
}