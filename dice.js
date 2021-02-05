function refresh() {
  //1st dice
  var n = Math.floor(Math.random() * 6) + 1;
  var randomImages = "images/" + "dice" + n + ".png"; //assign random images
  var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImages); //replacing the 1st element of attribute with new random attribute
  //2nd dice
  var o = Math.floor(Math.random() * 6) + 1;
  var randomImages = "images/" + "dice" + o + ".png";
  var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImages); ///repeated same as above
  if (n > o) {
    document.querySelector("h1").innerHTML = "Player-1 wins 🏁";
  } else if (o > n) {
    document.querySelector("h1").innerHTML = "Player-2 wins 🏁";
  } else {
    document.querySelector("h1").innerHTML = "🏁Its a Draw🏁";
  }
}
