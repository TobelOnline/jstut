"use strict";

window.addEventListener("load", function() {

    let heading = document.getElementById("heading");

    heading.addEventListener("click", function() {
        var alert = document.querySelector(".alert[rel='hello']");
        alert.style.color = "red";


    }, false);
    

}, false); 