$(document).ready(function() {

  $('#formulario-mobile').submit(function(e){
    let nombre = $("#ingresa-nombre-m").val();
    $("#ingresa-nombre").val(nombre);
    $("#nombre").text("" + nombre);
    $(".ty").slideDown();
    e.preventDefault();
  });
  $('#formulario-web').submit(function(e){
    let nombre = $("#ingresa-nombre").val();
    $("#ingresa-nombre").val(nombre);
    $("#nombre").text("" + nombre);
    $(".ty").slideDown();
    e.preventDefault();
  });

});
