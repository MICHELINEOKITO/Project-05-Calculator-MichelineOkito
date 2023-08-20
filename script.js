// {  } import './calculator';
import{calculate}from "./calculator.js"

// TODO: Faire la manipulation du DOM dans ce fichier

//récuperation de variable
const affichageHistorique = document.querySelector('#calcul');
const elementAcalcul = document.querySelector('#input'); 
const resetElement = document.querySelector('#reset');
const clearElement = document.querySelector('#clear');
const operators = document.querySelector('button[type="submit"]');

const chiffres = document.querySelectorAll('.numpad');

//recuperation des elements à afficher dans input
chiffres.forEach(Number=>(
   Number.addEventListener('click', (e)=>{
        elementAcalcul.value += e.target.innerText;
   })
))

