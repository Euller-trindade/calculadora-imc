
const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    
    if(nome !== '' && altura !== '' && peso !== ''){

       const valorImc = (peso / (altura * altura)).toFixed(1);

       let classificacao = '';

       if(valorImc < 18.5){
           classificacao = ' abaixo do seu peso ideal.'
       }else if(valorImc < 25){
        classificacao = '  no seu peso ideal.'
    }else if(valorImc < 30){
        classificacao = '  levemente acima do seu peso ideal.'
    }else if(valorImc < 35){
        classificacao = '  com obesidade grau I.'
    }else if(valorImc < 40){
        classificacao = '  com obesidade grau II.'
    }else {
        classificacao = '  com obesidade grau III. Quidado!!'
    }
       resultado.textContent = `${nome} seu IMC é ${valorImc} e você está ${classificacao} `;
    }else{
        resultado.textContent = 'preencha todos os dados!!!'
    }
}


calcular.addEventListener('click', imc)