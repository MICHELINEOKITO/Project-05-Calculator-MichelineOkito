 # Instructions

## Screens
* The bottom input (*can be selected with id value* `input`) holds the current input number.
* The upper label (*can be selected with id value* `calcul`) holds the current computation string as the user types. Operators are preceeded and followed by a single space.
* A number is added to the label after pressing an operator.
* Le calcul ne se fait que quand on apuie sur `=`ou `%`. `
* For example, the computation `23 × 2 = 46`, will have `2` in the input and the string `23 × 2` in the text above the input field.

## Buttons
Buttons are the ***ONLY WAY*** to input data and work as they do in a physical calculator as follows:
- Pressing the numpad adds the digit on the input value
- The dot `.` can be in a string only once and can only follow a digit
- Zero cannot be repeated at the beginning of a number eg. `0000` is not valid input value
- Pressing the `+/-` buttong changes the sign of the current input number
- Pressing the `%` button returns the calculations result as a percentage. i.e. divides it a 100.
- `AC` resets everything, and `C` clears the input alone.
- When displaying the result of an operation, an equal sign `=` is added to the input string and the results is diplayed in the input field.

## Bonus
- ...
- Add a `00`
- 
<!--Traduction 
Instructions
Écrans

. L'entrée inférieure (qui peut être sélectionnée avec la valeur d'identification input) contient le numéro d'entrée actuel.

. L'étiquette supérieure (qui peut être sélectionnée avec la valeur id calcul) contient la chaîne de calcul actuelle au fur et à mesure que l'utilisateur la tape. Les opérateurs sont précédés et suivis d'un espace.

. Un nombre est ajouté à l'étiquette après avoir appuyé sur un opérateur.

. Le calcul ne se fait que quand on apuie sur =ou %. `

. Par exemple, le calcul 23 × 2 = 46, aura 2 dans l'entrée et la chaîne 23 × 2 dans le texte au-dessus du champ de saisie.




Boutons



 Les boutons sont la SEULE façon d'entrer des données et fonctionnent de la même façon que sur une calculatrice physique, comme suit :

. Une pression sur le pavé numérique ajoute le chiffre à la valeur d'entrée

. Le point . ne peut figurer qu'une seule fois dans une chaîne de caractères et ne peut suivre qu'un chiffre.

. Le zéro ne peut pas être répété au début d'un nombre, par exemple 0000 n'est pas une valeur d'entrée valide.

. Une pression sur le bouton +/- change le signe du chiffre saisi.
L'appui sur le bouton % renvoie le résultat du calcul sous forme de pourcentage, c'est-à-dire qu'il le divise par 100.

. AC remet tout à zéro et C efface l'entrée seule.

. Lors de l'affichage du résultat d'une opération, un signe égal = est ajouté à la chaîne de saisie et le résultat s'affiche dans le champ de saisie.


Bonus
...
Ajouter un 00





# Plan de cours
  ## Tâches
  1. liste fonctions
     * UI : pavé numérique, opérations, affichages, effacer, annuler, deuxième affichage pour montrer le calcul en cours
     * Le champ de saisie accepte les données du clavier et des boutons du pavé numérique.
     * opérations fondamentales (+, -, *, /)
     * historique : paneau a droite de la liste du plus recent au plus ancien des operations effectuees, click sur un item restore l'operation faite et sa reponses dans les displays
     * Le bouton C efface l'entrée en cours et la supprime des deux affichages.
     * Le bouton AC annule l'ensemble de l'opération

<!--VERIFICATION-->

const form = document.querySelector("form");
const buttons = form.querySelectorAll("button");
const label = document.querySelector("#input");
const userInput = form.elements["userInput"];
// { calculate } import './calculator';

import {
  percentageSign,
  equalsSign,
  handleEqualsClick,
  handlePercentageClick,
  handleOtherOperatorsClick,
  handleResetClick,
  handleButtonClick,
  clearResult,
} from "./calculator.js";
// TODO: Faire la manipulation du DOM dans ce fichier

label.textContent = "";
userInput.value = "";

function handleSubmitClick(textContent) {
  if (textContent === equalsSign) {
    handleEqualsClick(label, userInput);
  } else if (textContent === percentageSign) {
    handlePercentageClick(userInput, label);
  } else {
    handleOtherOperatorsClick(textContent, userInput, label);
  }
}

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    switch (this.type) {
      case "submit":
        handleSubmitClick(this.textContent);
        break;
      case "reset":
        handleResetClick(label, form);
        break;
      case "button":
        handleButtonClick(this.textContent, userInput);
        break;
      default:
        break;
    }
  });
});

userInput.addEventListener("input", function() {
  this.value = this.value.match(/[0-9.]*/)[0];
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
});

form.addEventListener("reset", function() {
  clearResult();
});
