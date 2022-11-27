function inFunction() {
    var x = document.getElementById("in");
    var y = document.getElementById("up");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "flex";
    }
}

function upFunction() {
    var x = document.getElementById("in");
    var y = document.getElementById("up");
    if (y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none";
    } else {
        y.style.display = "none";
        x.style.display = "flex";
    }
}