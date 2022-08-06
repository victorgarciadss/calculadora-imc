function calcular() {
    let peso = document.getElementById('txtpeso').value;
    let altura = document.getElementById('txtaltura').value;
    let res = document.getElementById('res');

    if (peso.length == 0 || altura.length == 0) {
        window.alert('Digite seu peso e sua altura!!');
    } else {
        let imc = (peso/(altura*altura)).toFixed(2)
        
        res.innerHTML = ''
        res.innerHTML = `<p>Seu Peso é ${peso}Kg</p>`
        res.innerHTML += `<p>Sua Altura é ${altura} Metros</p>`
        res.innerHTML += `<p>Seu IMC é ${imc}<p>`
        let classe = ''

        if (imc < 17) {
           classe = 'Muito Abaixo do Peso'
           res.innerHTML += `<p>Você está ${classe}, procure atendimento médico e faça tratamento!</p>`

        } else if (imc >= 17 && imc < 18.5) {
            classe = 'Abaixo do peso'
            res.innerHTML += `<p>Você está ${classe}, tente se alimentar melhor!</p>`

        } else if (imc >= 18.5 && imc < 25) {
            classe = 'Peso Normal'
            res.innerHTML += `<p>Você está com ${classe}, continue se alimentando bem e fazendo exercícios físicos!</p>`

        } else if (imc >= 25 && imc < 30) {
            classe = 'Acima do Peso'
            res.innerHTML += `<p>Você está ${classe}, tente comer alimentos mais saudáveis!</p>`

        } else if (imc >= 30 && imc < 35) {
            classe = 'Obesidade Grau 1'
            res.innerHTML += `<p>Você está com ${classe}, faça mais exercícios físicos e melhore a alimentação!</p>`

        } else if (imc >= 35 && imc < 40) {
            classe = 'Obesidade Grau 2'
            res.innerHTML += `<p>Você está com ${classe}, mude seus hábitos alimentares e faça exercícios, se possível procure um especialista!</p>`

        } else if (imc >= 40) {
            classe = 'Obesidade Grau 3'
            res.innerHTML += `<p>Você está com ${classe}. procure um médico imediatamente e faça tratamento pois essa obesidade requer cuidado!</p>` 
        }
    }
    
} 

    
function limpar() {
    let peso = document.getElementById('txtpeso').value;
    let altura = document.getElementById('txtaltura').value;
    
    if (peso.length == 0 && altura.length == 0) {
        window.alert('Digite os dados necessários para calcular o IMC antes de limpar!')
    } else {
        document.getElementById('txtpeso').value='';
        document.getElementById('txtaltura').value='';
        res.innerHTML = 'Informe seu Peso e sua Altura para verificar sua Saúde Corporal!'
        
    } 
    
}
