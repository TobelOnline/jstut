"use strict"

window.addEventListener("load", function() {

  // get button
  let button =  document.getElementById('click-me');

  //
  button.addEventListener("click", changeHeading, false);

})

let changeHeading = function() {
  let heading = document.getElementById("heading");
  console.log(heading.innerHTML);
  heading.style.display= "none";
  document.createAttribute("")
}

//setInterval(function(){console.log("Test");},2000)

console.log(document);
