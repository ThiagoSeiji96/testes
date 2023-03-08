function reverseManual(valorString){
    var teste = [] ;
    for (let i = 0; i < valorString.length; i++) {
        const element = valorString[i];

        teste.unshift(element)
    }
    console.log(teste.join(" "))
    
}

function teste(){
    let valorString = document.getElementById('input').value;
    console.log(valorString)
    reverseManual(valorString);
}