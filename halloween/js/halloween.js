/*******************************************
* Author: Miguel Ángel Bonilla Fernández   *
* File: JavaScript (Halloween)             *
********************************************/
/*SHOWS AN ELEMENT*/
function show(element){
    document.getElementById(element).style.visibility="visible";
}
/*HIDES AN ELEMENT*/
function hide(element){
    document.getElementById(element).style.visibility="hidden";
}
/*PLAYS SOUND*/
function sound(element){
    document.getElementById(element).play();
}
/*PAUSES SOUND*/
function silence(element){
    document.getElementById(element).pause();
}