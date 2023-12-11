/*function myfunction(){
    alert("ola!!!")
}

function funcao (){
    alert ("saindo do programa...")
}*/

/*var myvar = setInterval(myTimer,100);

function myTimer (){
    var d = new Date();
    document.getElementById("demo").innerHTML=d.toLocaleTimeString();

}

function date(){
    var e = new Date();
    document.getElementById("demo1").innerHTML=e.getFullYear(2023);
    document.getElementById("demo2").innerHTML=e.getDay(0-6);
    document.getElementById("demo3").innerHTML=e.getDate(1-23);
    
    

}*/


function mostrarHora(){

    let d = new Date();
    document.body.innerHTML= d.getHours() +"horas " + d.getMinutes()+" minutos"+ d.getSeconds()+" segundos " ;
    setInterval(mostrarHora,100);
}


function Anuncio(){
    document.body.style.backgroundImage="url(../IMG/pa.avif) "
var a = document.getElementById("dam").innerHTML = "adiquira já seu PS5"
}

function teste(){
    alert ("anuncio");
    document.body.style.backgroundImage="url(../IMG/pa.avif) "
}

function pr(){
    alert("parando o anuncio....");
    document.body.style.backgroundImage="url(../IMG/branco.avif) "

}

