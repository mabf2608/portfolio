/**********************************************************
 * 
 * 
 * 
 */

function show(element){
    document.getElementById(element).style.visibility="visible";
    /*extrae un elemento y cambia algo en su estilo*/
}

function hide(element){
    document.getElementById(element).style.visibility="hidden";
}

function sound(element){
    document.getElementById('batsound').play();
}

function silence(element){
    document.getElementById('batsound').pause();
}