var dadosLista = [];

function salvarTarefa(){
    let tarefa= document.getElementById('tarefa').value;

    if (tarefa){
        dadosLista.push(tarefa);
        document.getElementById('tarefa').value = "";
        criarLista();
    } else{
        alert("Campo de tarefas não preenchido");
    }

}

function criarLista(){
    let tabela =  "<tr><th class='acoes'>Tarefas</th><th>📝</th></tr>";
    for(let i = 0; i <= (dadosLista.length - 1); i++){
        tabela += "<tr><td class='tabelafont'>" +dadosLista[i] + "</td><td><input type='checkbox' id='checkbox'</button><button class='btn btn-danger' id='btnexcluir' onclick='excluir(this.parentNode.parentNode.rowIndex)'>X</button> </td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}


function excluir(i){
    dadosLista.splice((i - 1), 1);
    document.getElementById('tabela').deleteRow(i);
}