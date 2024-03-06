temTab = false;

function GerarTabuada (num, numX){
    let res = [];

        for (let i = 1; i <= numX; i++) {
            var multRes = num * i;
            res.push(`${num} * ${i} = ${multRes}`)
        }
        temTab = true;

        return res;
} 

function addTabuada(){
    const numtInput = document.getElementById('numtInput');
    const numxInput = document.getElementById('numxInput');

    if (temTab) {
        const tabuadaDiv = document.getElementById("tabuada");
        tabuadaDiv.innerHTML = '';
    } 
    const novaTabuada = GerarTabuada(numtInput.value, numxInput.value);
    return novaTabuada;
}

function enviarClick(){
    const tabuadaDiv = document.getElementById("tabuada");
    const tabuada = addTabuada();

    if (tabuada) {
        tabuada.forEach((linha) => {
            const linhaDiv = document.createElement('div');
            linhaDiv.className = 'linhaTabuada';
            linhaDiv.innerHTML = linha;
            tabuadaDiv.appendChild(linhaDiv);
        });
    }
}



// const GerarTabuada = (num) => {
//     for (let i = 1; i <= 10; i++) {
//         var multRes = num * i;
//         console.log(num, '*', i, "=" , multRes);
//     }
// }

// GerarTabuada(7);