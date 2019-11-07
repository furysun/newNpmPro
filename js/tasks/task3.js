export class Task3 {
    static prepare() {
        document.getElementById('ok-list').onclick = Task3.changeName;
    }

    static changeName() {
        const length = document.getElementById('list').children.length;
        const number = document.getElementById('number').value;

        if (number < length) {
            const textName = document.getElementById('text-name').value;

            document.getElementById('list').children[number].innerHTML = textName;
        }
    }

}