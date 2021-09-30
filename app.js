var friendName = ["Samuel", "George", "Berthe", "Flora", "Catherine"];

var locationName = [
  "the linen closet",
  "the trampoline",
  "mom's basement",
  "three car garage",
  "the bunkbed",
  "soaking tub",
  "bird bath",
  "spiral staircase",
  "back of the cadillac",
  "deep end",
];

var weaponName = [
  "shrimp fork",
  "oil painting of the poodle",
  "Holy Spirit",
  "six pack",
  "sea urchin",
  "C-PAP",
  "cast iron",
  "rusty golf club",
  "feline dander",
  "candelabra",
  "christmas tree lights",
  "missing lego",
  "info-mercials",
  "energy vampire",
  "green smoothie",
  "butter knife",
  "crochet hook",
  "wiffle ball bat",
  "pillow",
  "bedazzled chihuahua",
];

function getAClue() {
  for (var i = 0; i < 100; i++) {
      
    var h3 = document.createElement("h3");
    h3.addEventListener("click", function () {
      alert(
        "I accuse " +
          friendName[i % friendName.length] +
          ", with the " +
          weaponName[i % weaponName.length] +
          " in the " +
          locationName[i % locationName.length] +
          "!!!"
      );
      i++
    });

    var h3Content = document.createTextNode("ACCUSATION " + [i + 1]);
    h3.appendChild(h3Content);

    document.body.appendChild(h3);
  }
}

getAClue();
