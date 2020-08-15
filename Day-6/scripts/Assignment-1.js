var i = 0;

function change() {
    var doc = document.getElementById("background");
    var color = ["black", "blue", "brown", "green", "#dab5e3", "#e6f7f8", "#e8e5fd"];
    doc.style.backgroundColor = color[i];
    i = (i + 1) % color.length;
}
setInterval(change, 3000);