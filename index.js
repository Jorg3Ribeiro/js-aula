// Import stylesheets
import "./css/style.css";
import "./css/bootstrap.css";
import "./js/bootstrap.js";

// Write Javascript code!
(function(w) {
  var tabela = document.getElementById("tabela_cadastro_aula");
  var formularioAula = document.getElementById("formulario_cadastro_aula");
  var formularioDisciplina = document.getElementById(
    "formulario_cadastro_disciplina"
  );
  var formularioProfessor = document.getElementById(
    "formulario_cadastro_professor"
  );

  var cont = 2;
  var click = 1;
  

  var cadastrar = function() {
    tabela.style.display = "none";
    formularioAula.style.display = "block";
  };

  var voltarTabela = function() {
    formularioAula.style.display = "none";
    tabela.style.display = "block";
  };

  var cadastrarDisciplina = function() {
    formularioAula.style.display = "none";
    formularioDisciplina.style.display = "block";
  };

  var voltarFormulario = function() {
    formularioDisciplina.style.display = "none";
    formularioProfessor.style.display = "none";
    formularioAula.style.display = "block";
  };

  var cadastrarProfessor = function() {
    formularioAula.style.display = "none";
    formularioProfessor.style.display = "block";
  };

  var cadastrarDisciplinaAtiva = function() {
    var nome = document.getElementById("nomeDisciplina");
    var descricao = document.getElementById("nomeDescricao");
    var selectDisciplina = document.getElementById("disciplina");
    var disciplina = [];

    disciplina.push(nome.value);

    for (var i = 0; i < disciplina.length; i++) {
      var option = new Option(disciplina[i], disciplina[i]);
      selectDisciplina.add(option);
    }

    formularioDisciplina.style.display = "none";
    formularioAula.style.display = "block";

    nome.value = null;
    descricao.value = null;
  };

  var cadastrarProfessorAtiva = function() {
    var nome = document.getElementById("nomeProfessor");
    var cpf = document.getElementById("cpfProfessor");
    var email = document.getElementById("emailProfessor");
    var telefone = document.getElementById("telefoneProfessor");
    var endereco = document.getElementById("enderecoProfessor");
    var selectProfessor = document.getElementById("professor");

    var professor = [];

    professor.push(nome.value);

    for (var i = 0; i < professor.length; i++) {
      var option = new Option(professor[i], professor[i]);
      selectProfessor.add(option);
    }

    formularioProfessor.style.display = "none";
    formularioAula.style.display = "block";

    nome.value = null;
    cpf.value = null;
    email.value = null;
    telefone.value = null;
    endereco.value = null;
  };

  var adicionarAluno = function() {
    var tabelaAlunos = document.getElementById("alunosTabela");
    var divNova = document.createElement("div");

    cont = cont + 1;

    tabelaAlunos.appendChild(divNova);
    divNova.innerHTML =
      `<div class="row">
                    <div class="col-md-1">
                      <label>Id:</label>
                      <input type="number" class="form-control" placeholder="Id" name="idAluno` +
      (cont - 1) +
      `" id="idAluno` +
      (cont - 1) +
      `" value="` +
      cont +
      `">
                    </div>
                    <div class="col-md-2">
                      <label>Nome: </label>
                      <input type="text" class="form-control" placeholder="Nome Completo" name="nameAluno` +
      (cont - 1) +
      `" id="nameAluno` +
      (cont - 1) +
      `">
                    </div>
                    <div class="col-md-2">
                      <label>CPF:</label>
                      <input type="number" class="form-control" placeholder="CPF" name="cpfAluno` +
      (cont - 1) +
      `" id="cpfAluno` +
      (cont - 1) +
      `">
                    </div>
                    <div class="col-md-2">
                      <label> Endereço: </label>
                      <input type="text" class="form-control" placeholder="Endereço" name="enderecoAluno` +
      (cont - 1) +
      `" id="enderecoAluno` +
      (cont - 1) +
      `">
                    </div>
                    <div class="col-md-2">
                      <label> Telefone: </label>
                      <input type="number" class="form-control" placeholder="Telefone" name="telefoneAluno` +
      (cont - 1) +
      `" id="telefoneAluno` +
      (cont - 1) +
      `">
                    </div>
                    <div class="col-md-2">
                      <label> Email: </label>
                      <input type="email" class="form-control" placeholder="email" name="emailAluno` +
      (cont - 1) +
      `" id="emailAluno` +
      (cont - 1) +
      `">
                    </div>
                  </div>`;
  };

  var cadastrarAula = function() {
    
    var dados = [];
    var disciplina = document.getElementById("disciplina");
    var professor = document.getElementById("professor");
    var tabelaAula = document.getElementById("tabela_aulas");

    dados.push(disciplina.value);
    dados.push(professor.value);
    disciplina.value = null;
    professor.value = null;

    for (var i = 0; i < cont; i++) {
      var name = document.getElementById("nameAluno" + i);
      var cpf = document.getElementById("cpfAluno" + i);
      var endereco = document.getElementById("enderecoAluno" + i);
      var telefone = document.getElementById("telefoneAluno" + i);
      var email = document.getElementById("emailAluno" + i);

      dados.push(name.value);

      name.value = null;
      cpf.value = null;
      endereco.value = null;
      telefone.value = null;
      email.value = null;
    }

    tabelaDados.push(dados);

    var professorTabela = null;
    var disciplinaTabela = null;
    var alunosTabela = [];

    disciplinaTabela = tabelaDados[0][0];
    professorTabela = tabelaDados[0][1];

    for (var k = 0; k < cont; k++) {
      alunosTabela.push(tabelaDados[0][k + 2]);
    }

    var trNova = document.createElement("tr");
    tabelaAula.appendChild(trNova);
    trNova.innerHTML =
      "<tr>" +
      "<td>" +
      click +
      "</td>" +
      "<td>" +
      professorTabela +
      "</td>" +
      "<td>" +
      disciplinaTabela +
      "</td>" +
      "<td>" +
      alunosTabela +
      "</td>" +
      "</tr>";
    

    click = click + 1;
    cont = 2;

    formularioAula.style.display = "none";
    tabela.style.display = "block";
  };

  (w.cadastrar = cadastrar),
    (w.voltarTabela = voltarTabela),
    (w.cadastrarDisciplina = cadastrarDisciplina),
    (w.voltarFormulario = voltarFormulario),
    (w.cadastrarProfessor = cadastrarProfessor),
    (w.cadastrarDisciplinaAtiva = cadastrarDisciplinaAtiva),
    (w.cadastrarProfessorAtiva = cadastrarProfessorAtiva),
    (w.adicionarAluno = adicionarAluno),
    (w.cadastrarAula = cadastrarAula);
})(window);
