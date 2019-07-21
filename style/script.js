function show(i) {
    bigi.src = "pic/car" + i + ".jpg ";
}

m1.onclick = function() {
    longman.style.left = "0";
    m1.style.color = "#d7cb23";
    m2.style.color = "#ffffff";
    m3.style.color = "#ffffff";
    m4.style.color = "#ffffff";
}
m2.onclick = function() {
    longman.style.left = "-100%";
    m2.style.color = "#d7cb23";
    m1.style.color = "#ffffff";
    m3.style.color = "#ffffff";
    m4.style.color = "#ffffff";
}
m3.onclick = function() {
    longman.style.left = "-200%";
    m3.style.color = "#d7cb23";
    m2.style.color = "#ffffff";
    m1.style.color = "#ffffff";
    m4.style.color = "#ffffff";
}
m4.onclick = function() {
    longman.style.left = "-300%";
    m4.style.color = "#d7cb23";
    m2.style.color = "#ffffff";
    m3.style.color = "#ffffff";
    m1.style.color = "#ffffff";
}