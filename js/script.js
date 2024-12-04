/*Acessa o formulário através do getElementById e fica "escutando"/esperando através do addEventListener o evento(submint)  que ocorrerá no caso o click no botão cadastrar. Quando isso ocorre ele executa a função anonima function(event) desencadeando as ações desejadas* */
document.getElementById("formcadastro").addEventListener("submit", function (event) {
  /*Não deixa carregar uma nova página */
  event.preventDefault();
  /*Declara as variáveis e pega os valores da caixa de texto*/
  var nome = document.getElementById('nome').value;

  var Cat = document.querySelector('.Cat').value
  var Valor = document.getElementById('Valor').value
  var Data = document.getElementById('Data').value

  /*Atribui nome e idade para o objeto aluno*/
  var novo = { nome: nome, Categoria: Cat, Valor: Valor, Data: Data }


  /*Criar lista de alunos, carrega o aquivo do LocalStorage se houver, caso não exista cria uma lista vazia*/
  var salvo = JSON.parse(localStorage.getItem('salvo')) || [];
  /*Insere o aluno digitado na caixa de texto na lista*/


  salvo.push(novo)
  /*Adiciona o aluno ao LocalStorage */
  localStorage.setItem('salvo', JSON.stringify(salvo))
  /*Limpa o formulário*/
  document.getElementById('formcadastro').reset()

  alert("Finança adicionada!")

  //chama a função exibir alunos que irá exibir a listagem de alunos
  exibir()
})

function exibir() {
  //Carrega a lista de alunso do LocalStorage ou inicializa a lista como vazio

  var salvo = JSON.parse(localStorage.getItem('salvo')) || [];
  //alert(lista_aluno[5].nome)
  /* Acessa o elemento output no documento HTML*/
  var output = document.getElementById('output')
  // Limpa o conteúdo atual
  output.innerHTML = '';
  for (let i = 0; i < salvo.length; i++) {
    //Cria a variável li e cria o elemento (tag) li 
    let li = document.createElement('li')
    li.textContent = salvo[i].nome + " R$" + salvo[i].Valor + " -  " + salvo[i].Data + " " + salvo[i].Categoria;
    output.appendChild(li)

    /*Cria a variável li e cria o elemento (tag) li */
    var botao = document.createElement('button')
    botao.textContent = 'Editar'
    botao.id = 'EditarBtn'
    li.appendChild(botao)

    botao.addEventListener('click', function(event){
      var nome = prompt('Digite o novo nome')
      var valor = prompt('Digite o valor')
      salvo[i].nome = nome
      salvo[i].Valor = valor // Atuailza a pagina
      /*Adiciona o aluno ao LocalStorage */
      localStorage.setItem('salvo', JSON.stringify(salvo))
    })


    // Cria o botao de excluir
    var button = document.createElement('button')
    button.textContent = 'Excluir'
    button.id = 'Excluir'
    button.addEventListener('click', function (){
      salvo.splice(i, 1)
      // Atuailza a pagina
      /*Adiciona o aluno ao LocalStorage */
      localStorage.setItem('salvo', JSON.stringify(salvo))
      exibir()
    });

    li.appendChild(button);
  }
}




exibir()