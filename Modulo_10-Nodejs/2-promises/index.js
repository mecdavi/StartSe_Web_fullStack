function mensagemGabriel(callback){
    setTimeout(()=>{
        console.log('cuidado com o copo do tio')
        callback()
    },0);
}

function mensagemRafael(){
    console.log('to cuidando');
}

mensagemGabriel(mensagemRafael);
