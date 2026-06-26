//DEFINE O OBJETO COM OS RESULTADOS (BANCO DE DADOS)
const placarOficial ={
    1: {time1:3,time2:0},
    2: {time1:3,time2:0}
}
//FUNÇÃO SALVAR PALPITE
function salvarPalpite(nomeJogo,id){
//CAPTURAR OS ELEMENTOS DO DOM

    const input1 = document.getElementById('time1-${id}')
    const input2 = document.getElementById('time2-${id}')

    //VALIDAÇÃO DOS CAMPOS
}