export class Task4 {
    static prepare() {
        document.getElementById('ok').onclick = Task4.compare;
    }

    static compare() {
        const fatherBirthday = document.getElementById('fathers-birthday').value;
        const sonBirthday = document.getElementById('son-birthday').value;

        const fatherYear = fatherBirthday.substring(0, 4);
        const sonYear = sonBirthday.substring(0, 4);

        const difference = sonYear - fatherYear;

        console.log(difference);

        if (difference < 18) {
            alert("error");
        }

    }
}