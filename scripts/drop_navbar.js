function dropNav(){
  var x = document.getElementById("top-nav");
  if (x.className === "navegation") {
    x.className += " responsive";
  } else {
    x.className = "navegation";
  }
}