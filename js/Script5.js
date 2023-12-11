/*var titulo = document.getElementById("titulo");

var conteudo = titulo.textContent;

document.write(conteudo);

var title = document.getElementsByClassName("ti");

var ti = title.textContent;

document.write(ti);*/

var x = document.getElementsByTagName("li");

document.getElementById("demo").innerHTML=x[1].innerHTML;

document.write("pegando: "+ x[1].innerHTML);


/*var elemento = document.getElementsByClassName("exemplo1");
elemento[0].innerHTML = "testando classe";

console.log("JS" + elemento[0].innerHTML);

var elements = document.getElementsByClassName("exemplo2");
elements[0].innerHTML = "testando classe 2";

console.log("JS 2" + elements[0].innerHTML);*/

/*var num = document.getElementsByName ("cor").length;
document.getElementById("seletor").innerHTML=num;
console.log("JS "+ num);*/

/*var element = document.getElementById("cabecalho");
    element.innerHTML= "novo cabeçalho";

document.getElementById("imagem").src = "../IMG/pa.avif"
*/

/*document.getElementById("p2").style.color="blue";

document.getElementById("p2").style.border= "solid"; */  


/*var txt= document.getElementById("intro").childNodes[0].textContent;
document.write(txt);*/

/*var x = document.getElementById("left");

var txt="";

for(var i=0; i < x.childNodes.length; i++){
    txt+="nodo: "+ x.childNodes[i].nodeName+
    "valor: " + x.childNodes[i].nodeValue + "<br>"
}

alert (txt);*/


/*var para = document.createElement("p");

var node = document.createTextNode("esse é novo.");
para.appendChild(node);

var element = document.getElementById("left");
element.appendChild (para);*/

/*var para=document.createElement("p");
var node=document.createTextNode("esse é novo.");
para.appendChild(node);

var element = document.getElementById ("div1");
var child = document.getElementById ("p1");
element.insertBefore(para,child)*/


/*alert ('bummmmmmmm');
    if (confirm('alerta confirmado'))
    alert ('positivo central');
    else
    alert('negativo central');*/

   /* document.write(document.images.length);
*/

/*
function bemvindo(nome1,nome2){
    alert("Bem vindo "+ nome1 + " e "+ nome2);
}*/

function multiplicacao(a,b){
    return a*b;
}

document.getElementById ("resposta").innerHTML = multiplicacao(4,3);

