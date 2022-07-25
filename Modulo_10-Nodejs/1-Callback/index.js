function mensagemGabriel(){
    const promiseMensagem = new Promise((resolve, reject)=>{ 
        setTimeout(()=>{
            console.log('cuidado com o copo do tio')
            resolve();
        },0);
    });
    return promiseMensagem;
}

function mensagemRafael(){
    console.log('to cuidando');
}

mensagemGabriel().then(mensagemRafael);
