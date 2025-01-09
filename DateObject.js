let d = new Date();

/* console.log(d);
console.log(d.getFullYear());
console.log(d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear());
console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()); */

///////////////////////////////////////////////////////////////////////////

function ShowTime() {

    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let session = "AM";

    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
    }
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }
    // Ternary Operator --> is a shorthand way to write an if-else statement.
    /*  h = (h < 10) ? "0" + h : h;
     m = (m < 10) ? "0" + m : m;
     s = (s < 10) ? "0" + s : s; */

    let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("DC").innerHTML = time;
    setInterval(ShowTime,1000);
}

ShowTime();

