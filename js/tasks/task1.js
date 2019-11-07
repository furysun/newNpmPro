export class Task1 {
    static prepare() {
        document.getElementById('ok-button').onclick = Task1.clickButton;
    }

    static clickButton() {
        const text = document.getElementById('text').value;
        const checkbox = document.getElementById('checkbox').checked;
        const select = document.getElementById('select').value;

        alert(select);
    }
}

