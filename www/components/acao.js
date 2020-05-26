// This is a JavaScript file

$(document).on("click","#alerta",function() {

function retorno() {
    // do something
}

navigator.notification.alert(
    'Este é um teste de alerta!',  // message
    retorno ,       // callback
    "Atenção:",
    "OK" 

);
});

$(document) .on("click", "#confirma",function() {

  function confirmando(buttonIndex) {
    alert('Você selecionou ' + buttonIndex);
}

navigator.notification.confirm(
  "O Palmeiras tem Mundial?",
  confirmando, 
  "Pergunta:",
  ["Sim","Não","Talvez"]
);
});