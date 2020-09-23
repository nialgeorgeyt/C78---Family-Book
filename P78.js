var reasons = ["Nial George", "Aiyana George", "Athmika George", "George Kevin", "Mary Joseph"];
var images = [
    "Nial George.jpg", "Aiyana George.jpg", "Athmika George.jpg", "George Kevin.jpg", "Mary Joseph.jpg"
];
var i = 0;

function nextslide() {
    document.getElementById("reasontext").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    i++;
}