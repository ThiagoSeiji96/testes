const dados = [
    {'Estado' : "SP",
     'receitaGerada' : 67836.43},
    {'Estado': "RJ", 
    'receitaGerada' : 36678.66},
    {'Estado':"MG", 
    'receitaGerada' : 29229.88},
    {'Estado' : "ES",
    'receitaGerada' : 27165.48},
    {'Estado' : "Outros", 
    'receitaGerada' : 19849.53}
]

function ExibirPorcentual(btn) {
    let valorTotal = 0;
    for (let i = 0; i < dados.length; i++) {
        const element = dados[i]["receitaGerada"];
        valorTotal = valorTotal + element;
    }
    for (let i = 0; i < dados.length; i++) {
        if (btn == dados[i]['Estado']) {
            let x = dados[i]['receitaGerada'] * 100
            let y = x / valorTotal
            return console.log(`O Porcentual da receita total gerada no Estado de ${dados[i]['Estado']} é de ${y.toFixed(2)}%`)
        }
    }

    receitaTotal = 100
    receitaEstado = x
};
function PegarValor() {
    const valorInput = document.getElementById("input").value;
    ExibirPorcentual(valorInput);
}