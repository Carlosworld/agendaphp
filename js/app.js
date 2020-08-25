// Insertar el  contacto a la base de datos.

$(document).ready(function() {
  $(document).on('click','.enviar input',function(e) {

    // console.log('distes clic correctamente...');

    const dataForm ={
           nombre:$("#nombre").val(),
           empresa:$("#empresa").val(),
           telefono:$("#telefono").val(),
           accion:$("#accion").val()
         };

         if (dataForm.nombre===''||dataForm.empresa===''||dataForm.telefono==='') {
            // console.log('el nombre esta vacio');
            // Dos parametros texto y clase.
             mostrarNotificacion('Todos los Campos son Obligatorios', 'error');

         }else {
           // console.log(dataForm);

           // Pasa la validacion, crear llamado ajax.
           if (dataForm.accion === 'crear') {
             // Creamos un nuevo Contacto.
             console.log(dataForm);

           }else {
             console.log('nada..');
           }

         }
  })
})

// Notificación en pantalla.

function mostrarNotificacion(mensaje, clase){
  console.log(mensaje);
  console.log(clase);
  const notificacion = document.createElement('div');
  notificacion.classList = clase + ' notificacion '+ 'sombra';

  notificacion.textContent = mensaje;

  // formulario


$( notificacion, ".enviar" ).insertBefore( $("form legend") );

// Ocultar y mostrastrar la notificacion.

    setTimeout(()=>{
      notificacion.classList.add('visible');

      setTimeout(()=>{
        notificacion.classList.remove('visible');
        notificacion.remove();
      },3000);
    },1000);
}

// const formularioContactos = document.querySelector('#');
//
// eventListeners() ;
//
// function eventListeners(){
//
// }
