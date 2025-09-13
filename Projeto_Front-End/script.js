
// Cria uma função enviar para criar um alert para mostra a mensagem quando clicar no botão enviar 
function enviar(){
    // Cria uma variavel (resposta) que recebe a frase (Requisição enviada com suesso!) 
   let resposta = "Requisção enviada com sucesso!";
   // Cria um alert que recebe a variavel resposta que te a frase dentro dela
   alert(resposta); 

   /*
   Definimos uma variável (inputs) que o valor dela será constante, ela vai guarda todos os campos de input
   document = representa toda a página HTML no JavaScript. É como o "Mapa" do HTML

   ********************************************************************************************************************************************
   querySelectorAll() = É uma função do DOM que seleciona todos os elementos que combinam com o seletor CSS que você passar 
   seja ele id, class ou até div. É ele retorna uma lista com todos os inputs encotrados dentro da div Campo_Preencher.Esse tipo de lista
   é chamado de NodeList, que se comporta parecido com array.
   Diferente do get.ElemetById, que por sua vez só pega um elemeto de uma vez.

   *********************************************************************************************************************************************
   "#Campo_Preencher input" é um seletor CSS que serve para identificar elementos específicos no HTML, nesse caso: todos
    os <input> que estão dentro do elemento com id Campo_Preencher
    input = Dentro do campo #Campo_Preencher, pega todos os <input>. 

   *********************************************************************************************************************************************
   forEach() = É um método que percore todos os elementos de um array ou uma lista é executa uma determinada função para cada um dele.

   *********************************************************************************************************************************************
    function(input) { ... } Define a função que será executada para cada input. 
    input = É o nome do pârametro que representa cada elemento da lista com o loop pecorendo todas eles.
   ********************************************************************************************************************************************** 
   input.value = ""; = Acessa o conteúdo do campo input, e define esse conteudo como vazio ou seja, limpo o campo.
   */

   const inputs = document.querySelectorAll("#Campo_Preencher input");
   inputs.forEach(function(input) {
        input.value="";
   });
}