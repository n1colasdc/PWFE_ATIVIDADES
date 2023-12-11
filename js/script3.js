function subimitFuncion(e,b){
   
    if(e.value == null ||e.value== ""){
        alert("favor preencher o campo 1");
    }else if(b.value== null || b.value =="" ){
        alert("favor preencher o campo 2");
    }else{
        alert("obrigado!!!");
    }

    window.onbeforeunload = function(){
        return 'tchau';
    };        
}


