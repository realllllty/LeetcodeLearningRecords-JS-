let total = input[0];
let clocks = input[1];

for (let i = 0; i < total - 1; i++) {
    let Aseconds = Number(clocks[i].split(':')[2]);
    let Aminutes = Number(clocks[i].split(':')[1]);
    let Ahours = Number(clocks[i].split(':')[0]);

    let Bseconds = Number(clocks[i + 1].split(':')[2]);
    let Bminutes = Number(clocks[i + 1].split(':')[1]);
    let Bhours = Number(clocks[i + 1].split(':')[0]);

    let calcSeconds = 0;
    let calcMinutes = 0;
    let calcHours = 0;


    // 计算A到B之间的时间差值

    if (Number(clocks[i].split(':').join('')) <= Number(clocks[i + 1].split(':').join(''))) {
        // 不需要转天
        if (Aseconds <= Bseconds) {
            calcSeconds = Bseconds - Aseconds;
        } else {
            calcSeconds = 60 - Aseconds + Bseconds;
            calcMinutes--;
        }

        if (Aminutes <= Bminutes) {
            calcMinutes += Bminutes - Aminutes;
        } else {
            calcMinutes += 60 - Aminutes + Bminutes;
            calcHours--;
        }
        // 不可能出现B的hours比A小的情况
        calcHours += Bhours - Ahours;
    } else {
        // 需要转天
        let addSeconds = 60 - Aseconds;
        let addMinutes = 60 - Aminutes - 1;
        let addHours = 24 - Ahours - 1;

        if (addSeconds + Bseconds >= 60) {
            calcSeconds = addSeconds + Bseconds - 60;
            calcMinutes++;
        } else {
            calcSeconds = addSeconds + Bseconds;
        }

        if (calcMinutes + addMinutes + Bminutes >= 60) {
            calcMinutes += addMinutes + Bminutes - 60;
            calcHours++;
        } else {
            calcMinutes += addMinutes + Bminutes;
        }

        calcHours += addHours + Bhours;
    }

    let totalSeconds = calcHours * 60 * 60 + calcMinutes * 60 + calcSeconds;
    let totalCircle = totalSeconds / 60;
    print(totalCircle);
}