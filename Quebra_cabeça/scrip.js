//abrir a imagem particionada

let colunas = document.querySelectorAll(".coluna");


//ordem das imagens 

let ordemCorreta = [
    "9.jpg",
    "8.jpg",
    "7.jpg",
    "6.jpg",
    "5.jpg",
    "4.jpg",
    "3.jpg",
    "2.jpg",
    "1.jpg",
];

// elementos arrastaveis

document.addEventListener("dragstart" , (elem) => {
    elem.target.classList.add("arrastando");
})

document.addEventListener("dragend", (elem) =>{
    elem.target.classList.remove("arrastando");
    //chamar função para confirmar a montagem do quebra cabeça

    verificarOrdem();
})


// quando estiver sobre um lugar soltavel

colunas.forEach((coluna)=> {
    coluna.addEventListener("dragover", (elem) => {
        coluna.classList.add("hover");
    })
})

// quando sair do lugar soltavel 

colunas.forEach((coluna) => {
    coluna.addEventListener("dragleave", (elem) => {
        coluna.classList.remove("hover");

        let elementoArrastado = document.querySelector(".arrastando");

    // inverter os elementos (troca)

    let filho = coluna.children[0];
    let colunaElementoArrastado = elementoArrastado.parentElement;
    colunaElementoArrastado.appendChild(filho);
    coluna.appendChild(elementoArrastado);
        });
});

// elementos iguais 

function arraysIguais(arr1,arr2){
    if (arr1.lenght !== arr2.lenght) return false;
    for (let index = 0; index < arr1.length; index++) {
        if (arr1[index] !== arr2[index]) return false; 
       
    }
    return true;
}

function verificarOrdem(){
    let imagensAtuais = [];
    colunas.forEach((coluna)=>{
        let parte = coluna.querySelector("img");
        if(parte) {
            imagensAtuais.push(parte.src.split("/").pop());
        }
        console.log(imagensAtuais);
        console.log(ordemCorreta);
    });
}

// sortear aleatoriamente as imagens

function sortearImagem(){
    let numeros = [];
    for (let index = 1; index <= 9; index++) {
       let aleatorio = Math.ceil(Math.random()*(9-0) + 0); // 0  é exclusivo

       while(numeros.includes(aleatorio)) {
        aleatorio = Math.ceil(Math.random()*(9-0)+ 0);
       }
       numeros.push(aleatorio);
       let parte = document.getElementById("parte" + index);
       parte.src = "IMG/" + aleatorio + ".jpg";
       console.log (aleatorio); 
    }
    verificarOrdem();

}

sortearImagem();
