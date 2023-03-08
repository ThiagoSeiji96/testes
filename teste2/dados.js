const dados = [
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
]

function ReturnMinValue() {
	let minValue = 0;
	let diasMenorFaturamento = []

	dados.forEach(obj => {

		let maxValue;
		let faturamento = obj.valor;

		if(faturamento <= minValue || faturamento == 0){
			minValue = faturamento
			if (minValue == faturamento){
				diasMenorFaturamento.push(obj.dia)
			}
		}


	});
	alert(`O menor valor de faturamento foi ${minValue}, no(s) seguinte(s) dia(s) ${diasMenorFaturamento}`)	
}

function ReturnMaxValue() {
	let faturamento = 0;

	dados.forEach(obj => {
		if(faturamento < obj.valor){
			faturamento = obj.valor
		}
	});

	return alert(`O valor de maior faturamento no mês foi de ${faturamento.toFixed(2)}`)
}

function bestDays(){
	let listaFaturamentoDiario = [];
	let mediaFaturamento;
	let melhoresDias = [];
	let melhoresDiasFaturamento = [];
	let valorTotal = 0;
	let media;


	dados.forEach(obj => {
		listaFaturamentoDiario.push(obj.valor)
	});

	for (let i = 0; i < listaFaturamentoDiario.length; i++) {
		const valorIndex = listaFaturamentoDiario[i];
		valorTotal = valorTotal + valorIndex
	}
	media = valorTotal / dados.length
	
	// for (let i = 0; i < listaFaturamentoDiario.length; i++) {
	// 	const valorDia = listaFaturamentoDiario[i];
	// 	let valorTotal =+ valorDia;
	// 	let media = valorTotal / dados.length
	// 	mediaFaturamento = media
	// }

	dados.forEach(obj => {
		if (obj.valor > media){
			melhoresDias.push(obj.dia)
			melhoresDiasFaturamento.push(obj.valor.toFixed(2))
		}
	});

	return alert (`Os dias melhores que a média foram ${melhoresDias},
	com os seguintes valores ${melhoresDiasFaturamento} e a média de
	faturamento foi ${media.toFixed(2)}`)
}

const showAll = () => {

	ReturnMinValue();
	ReturnMaxValue();
	bestDays();
}