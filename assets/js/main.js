

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


$('#enviarCorreo').click(function(){
alert("El correo fue enviado correctamente")
})

$('.card-title').click(function(){
    $('.card-text').toggle("slow",function(){})


})


$('#rojo').dblclick(function(){
    $(this).css("color", "red")
  }) 

  $('#rojo-p').dblclick(function(){
    $(this).css("color", "red")
  }) 




