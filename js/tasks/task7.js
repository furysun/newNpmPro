export class Task7 {
    static prepare() {
        const a = 'miv';

        document.getElementById('task7').innerHTML = '' +
            '<button id="yes">yes</button>' +
            '<button id="yes2" onclick="sayYes(\'' + a + '\')">yes2</button>';


        document.getElementById('yes').onclick = Task7.sayYes;

        window.sayYes = this.sayYes;
    }

    static sayYes(a) {
        alert(a);
    }
}