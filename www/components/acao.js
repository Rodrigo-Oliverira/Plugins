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
    if (buttonIndex == 1){
      alert ("Você selecionou errou");
    }else if (buttonIndex == 2){
      alert ("Você acertou na mosca!!!"); 
    }else {
      alert ("A esperança é a última que morre");      
    }
}

navigator.notification.confirm(
  "O Palmeiras tem Mundial?",
  confirmando, 
  "Pergunta:",
  ["Sim","Não","Talvez"]
);
});

$(document) .on("click", "#beep",function() {

navigator.notification.beep(3);

});

$(document) .on("click", "#vibra",function() {

navigator.vibrate([2000]);

});