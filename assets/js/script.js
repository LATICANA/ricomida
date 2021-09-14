$(function () {


  $('#enviarcorreo').click(function () {
    alert('El correo se a enviado correctamente')
  })

  $("h6").dblclick(function(){
    $(this).css("color","red");
  })

  $("h5").click(function(){
    $(".card-text").hide(800);
  });

});