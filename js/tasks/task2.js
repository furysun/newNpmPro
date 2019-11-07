export class Task2 {

    static prepare() {
        document.getElementById('plum').onclick = Task2.paintRed;
        document.getElementById('blue').onclick = Task2.paintBlue;
    }

    static paintRed() {
        let parent = document.getElementById('plum').parentElement;
        parent.style['background-color'] = 'plum';
    }

    static paintBlue() {
        let parent = document.getElementById('blue').parentElement;
        parent.style['background-color'] = 'powderblue';
    }
}