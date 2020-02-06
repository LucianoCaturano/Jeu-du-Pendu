var bonjour = ['B','O','N','J','O','U','R'];
var devine = ['','','','','','',''];
var lettreIndex = "";

var lettre = prompt("Donnez une lettre.");
lettre = lettre.toUpperCase();

for (i = 0; i < bonjour.length; i++){
  if (lettre === bonjour[i]){
      console.log(lettre, i);
      devine.splice(i, 1, lettre); // = retire un élément à la position i et ajoute "lettre"
      console.log(devine);
    }
}