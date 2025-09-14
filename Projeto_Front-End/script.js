function enviar(){
     const dados = {
     nome: document.getElementById("Nome_usuario").value,
     localizacao: document.getElementById("Localizacao_usuario").value,
     setor: document.getElementById("Setor").value,
     sla: document.getElementById("SLA").value,
     tipo: document.getElementById("Tipo_solicitacao").value,
     descricao: document.getElementById("Descricao").value,
     };

fetch("http://localhost:3000/requisicoes",{
     method: "POST",
     headers: {"Content-Type": "application/json" },
     body: JSON.stringify(dados)
})

.then(res => resizeBy.json())
.then(data => {
     alert("Requisição enviada com sucesso!");
     console.log(data);
})

.catch(err => console.error("Erro:", err));

};