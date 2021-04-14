const person = prompt("Welkom! Wat is je naam?");

if (person != null) {
    alert("Hallo " + person + "!");
  }

  for(i=0; i<5; i++){
    const guess = prompt(`Voer een getal in van 0 tot 25 om te beginnen met raden...
        Je hebt ${5-i} pogingen!`);
        const getRndInteger = function (max) {
            return Math.floor(Math.random() * 25);
          }

    if(guess === getRndInteger){
    alert("Gefeliciteerd je hebt gewonnen!");
    break;
    } else if(i !== 4){
    alert(`Dat is helaas niet goed. Try again!`);
    } else {
        alert("Je hebt helaas geen pogingen meer over. Better luck next time!");
    }
  }