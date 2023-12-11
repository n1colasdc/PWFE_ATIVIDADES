//var pessoas=["maria","jose","carlos","ana"];
//var objetos= ["coher","garfo"];
//var frutas = ["uva","maça", "abacaxi"];

/*pessoas[0];
pessoas.length;
objetos[objetos.length]= "faca";
frutas.indexOf("uva");

window.document.write("pessoa: "+pessoas+"<br>"+"objetos: "+ objetos+"<br>"+"frutas: "+ frutas+"<br>");

window.document.write("<br>");
window.document.write("<br>");
window.document.write("<br>");
window.document.write("<br>");


var carros=[" civic "," vectra "," uno "," camaro "," ferrari "," montana "," santana "];
var marca= ["honda","chevrolet","fiat"];


carros[0];
carros.length;
marca;

window.document.write("O total de carro é "+ carros.length+"<br>"+"Primeiro carro: "+ carros[0]+" da marca: "+marca[0]+"<br>"+"Adicionando carros...");

carros[carros.length]=" corola ";
carros[carros.length]=" hrv ";
carros.push("jeep","siena");
window.document.write("<br>"+"lista atualizada: "+ carros);

window.document.write("<br>"+"com o total de:  "+ carros.length);*/



/*var d = new Date("october 13, 2014  11:13:00");
document.getElementById("D1").innerHTML= d;

 d = new Date(0);
document.getElementById("D2").innerHTML= d;

var d = new Date(99,5,24,11,33,30,0);
document.getElementById("D3").innerHTML= d;

var d = new Date(2014,7,20);
document.getElementById("D4").innerHTML= d;





d =new Date();
document.write("<br>"+ d.toUTCString());
document.write("<br>"+d.toDateString());
document.write("<br>"+d.toLocaleDateString());
document.write("<br>"+d.toLocaleTimeString());

('pt-PT',{hours12: false})*/


 /*var hoje, prazo;
 hoje = new Date();
 prazo = new Date();

 prazo.setFullYear(2023,10,28);
 var dia = ["domingo","segunda","terça","quarta","quinta","sexta","sabado"];

 document.write("<p> hoje é: "+ dia[hoje.getDay()]+ ", "+hoje.getDate() +"/"+ (hoje.getMonth())+"/" +hoje.getFullYear()+"<p>")

 
 document.write("<p> prazo é: "+ dia[prazo.getDay()]+ ", "+prazo.getDate() +"/"+ (prazo.getMonth())+"/" +prazo.getFullYear()+"<p>")*/


/* var x="";

 try{
    if(x== "") throw " vazio";
    if(isNaN(x)) throw " não é um número"
    if(x==10) throw x;
    document.write(x);
 }catch(err){
    document.write(" input "+ err);
 }*/

/* try{
    adddalert ("ERRO!!!");
 }catch(err){
    document.write = err.message;
 }*/


 /*var dividendo = 10;
 var divisor = 0;

 try{
    if(divisor == 0){
    throw new
    Error("erro: divisão por zero não é permitida")
 }
 var resultado = dividendo/divisor;
 document.write("resultado:", resultado);
 }catch(err){
    document.write(err.message);
 }*/

 /*function myFunction(){
    var message,x;
    message= document.getElementById ("message");
    message.innerHTML="";
    x = document.getElementById("demo").value;

    try{
        if(x=="") throw "empty";
        if(isNaN(x)) throw "não é um número";
        x = Number(x);
        if(x < 5) throw "too low";
        if (x>10) throw "too high"
    }catch(err){
        message.innerHTML= "input é "+ err;
    }
 }*/

/* try{
    adddalert ("ERRO!!!");
 }catch(err){
    document.write =( err.message);
 }finally{
    document.write("<br>Será mostrado mesmo com o erro")
 }*/

 