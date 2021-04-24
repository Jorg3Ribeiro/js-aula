// Import stylesheets
import './css/style.css';
import './css/bootstrap.css';
import './js/bootstrap.js';

// Write Javascript code!
(function(w) {

var cadastrar = function(){
  var tabela = document.getElementById('tabela_cadastro_aula');
  var formularioAula = document.getElementById('formulario_cadastro_aula');

  tabela.style.display = "none";
  formularioAula.style.display = "block";

}

w.cadastrar = cadastrar;

})(window);
