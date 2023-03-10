function umElefante(qnt){
    var letra = '1 elefante incomoda muita gente \n';

    for(var i = 2; i <=qnt;i++){
        if(ehPar(i)){
            letra += `${i} elefantes incomodam`;
            
            for(var j = 1; j < i; j++){
                letra += ` , incomodam`;
            }
            
            letra += ` muito mais \n`;
        }

        else{
            letra += `${i} incomodam muita gente \n`;
        }
        
    }

    for(var i = qnt; i >= 2;i--){
        if(!ehPar(i)){
            letra += `${i} elefantes incomodam`;
            
            for(var j = 1; j < i; j++){
                letra += ` , incomodam`;
            }
            
            letra += ` muito menos \n`;
        }
    
        else{
            letra += `${i} incomodam muita gente \n`;
        }
    }

    console.log(letra);
}

function ehPar(numero){
    if(numero % 2 == 0)
        return true;
    else
        return false;
    
}

umElefante(10);