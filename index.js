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

  (w.cadastrar = cadastrar),
    (w.voltarTabela = voltarTabela),
    (w.cadastrarDisciplina = cadastrarDisciplina),
    (w.voltarFormulario = voltarFormulario),
    (w.cadastrarProfessor = cadastrarProfessor);
})(window);
