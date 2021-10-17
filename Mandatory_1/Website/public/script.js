document.addEventListener("DOMContentLoaded", burgerMenu);

function burgerMenu() {
    var burger = document.getElementById("myTopnav");

    if (burger.className === "topnav") {
        burger.className += " responsive";
    } else {
        burger.className = "topnav";
    }

    clickBox();
}


var coll = document.getElementsByClassName("collapsible");
var i;

function clickBox() {

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }

}
