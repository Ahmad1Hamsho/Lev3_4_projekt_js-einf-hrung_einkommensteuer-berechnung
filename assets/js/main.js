function zusammen() {
  if (document.getElementById("zusammen").checked) {
    document.getElementById("zuE2").style.display = "block";
  } else {
    document.getElementById("zuE2").style.display = "none";
  }
}

function rechnen() {
  const jahre = document.getElementById("jahre").value;
  const zuE2 = document.getElementById("zuE2").value;
  var zuE = document.getElementById("zuE").value;
  if (zuE2 != 0) {
    zuE = (parseInt(zuE) + parseInt(zuE2)) / 2;
  } else {
    zuE = zuE;
  }
  const erg = document.getElementById("ergebniss");
  const y1 = (zuE - 9408) / 10000;
  const z1 = (zuE - 14532) / 10000;
  const y2 = (zuE - 9168) / 10000;
  const z2 = (zuE - 14254) / 10000;
  const y3 = (zuE - 9000) / 10000;
  const z3 = (zuE - 13996) / 10000;
  console.log("zuE", zuE);
  switch (jahre) {
    case "zwanzig":
      if (zuE <= 9408) {
        erg.innerHTML = 0;
      } else if (zuE <= 14532) {
        erg.innerHTML = (972.87 * y1 + 1400) * y1;
      } else if (zuE <= 57051) {
        erg.innerHTML = (212.02 * z1 + 2397) * z1 + 972.79;
      } else if (zuE <= 270500) {
        erg.innerHTML = 0.42 * zuE - 8963.74;
      } else {
        erg.innerHTML = 0.45 * zuE - 17078.74;
      }
      break;
    case "neunzehn":
      if (zuE <= 9168) {
        erg.innerHTML = 0;
      } else if (zuE <= 14254) {
        erg.innerHTML = (980.14 * y2 + 1400) * y2;
      } else if (zuE <= 55960) {
        erg.innerHTML = (216.16 * z2 + 2397) * z2 + 965.58;
      } else if (zuE <= 265326) {
        erg.innerHTML = 0.42 * zuE - 8780.9;
      } else {
        erg.innerHTML = 0.45 * zuE - 16740.68;
      }
      break;
    case "achtzehn":
      if (zuE <= 9000) {
        erg.innerHTML = 0;
      } else if (zuE <= 13996) {
        erg.innerHTML = (997.8 * y3 + 1400) * y3;
      } else if (zuE <= 54949) {
        erg.innerHTML = (220.13 * z3 + 2397) * z3 + 948.49;
      } else if (zuE <= 260532) {
        erg.innerHTML = 0.42 * zuE - 8621.75;
      } else {
        erg.innerHTML = 0.45 * zuE - 16437.7;
      }
      break;
    default:
      erg.innerHTML = "Erorr";
  }
}
