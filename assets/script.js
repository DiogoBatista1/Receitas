function repNav() {
  var topnav = document.getElementById("topnav");
  if (topnav.className === "tpnav") {
    topnav.className += " responsive";
  } else {
    topnav.className = "tpnav";
  }
}
