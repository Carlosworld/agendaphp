// Insertar el  contacto a la base de datos.

$(document).ready(function() {
  $(document).on('click','.enviar input',function(e) {

    // console.log('distes clic correctamente...');

    const dataForm ={
           nombre:$("#nombre").val(),
           empresa:$("#empresa").val(),
           telefono:$("#telefono").val(),
           accion:$("#accion").val(),
           id:$("#id").val()

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
             // console.log(dataForm);


            // Eviamos y recibimos datos atraves de post.
             $.post('inc/modelos/modelo-contactos.php', dataForm, function(response){
               console.log(response);
               const respuesta  = JSON.parse(response);
               console.log('---->',respuesta);
               // Dos parametros texto y clase.
               mostrarNotificacion('los campos fueron llenados correctamente', 'correcto');

              $("#contacto")[0].reset()

               // Insertamos los datos por usuario creado
               var html = `
               <tr>
               <td>${respuesta.datos.nombre}</td>
               <td>${respuesta.datos.empresa}</td>
               <td>${respuesta.datos.telefono}</td>
                <td>
                  <a class="btn-editar btn" href="editar.php?id=${respuesta.datos.id}">
                    <i class="fas fa-pen-square"></i>
                  </a>
                  <button data-id="${respuesta.datos.id}" type="button" class="btn-borrar btn">
                    <i class=" fas fa-trash-alt"></i>
                  </button>
                  </td>
                  </tr>
               `;

               // mostramos los datos en el html
               $('tbody').append(html);
               numeroContactos();
             });

           }else {
             // editar el contacto.
             // leer el id.
             $.post('inc/modelos/modelo-contactos.php', dataForm, function(response){
               console.log(response);

                 mostrarNotificacion('El contacto fue editado correctamente', 'correcto');


             })
             setTimeout(()=>{
               window.location.href = 'index.php';
             },3000);
             e.preventDefault();
           }

         }
  })
})

// Borrador de filas
$(document).ready(function(e){

  $(document).on('click','.listado-contactos button', function() {
    var elemento = $(this)[0];
    var id = $(elemento).attr('data-id')

    const respuesta = confirm("¿Estas seguro (a)?");

    if (respuesta) {
    $.get(`inc/modelos/modelo-contactos.php?id=${id}&accion=borrar`,function(response) {

        mostrarNotificacion('El contacto fue eliminado correctamente', 'correcto');

        });
        $(this).closest(elemento.parentElement.parentElement).remove()
         numeroContactos();
      }else {
         mostrarNotificacion('hubo un error', 'error');
      }

})

})

// Buscador.
$(document).ready(function(e) {
  $('#buscar').on('input',function() {
      const elemento = $(this).val();
      const registros = $('tbody tr');


        for(registro of registros) {
          registro.style.display ='none';
          // console.log(registro.childNodes[1].textContent.replace(/\s/g, ' ').search(elemento) != -1);
        if(registro.childNodes[1].textContent.replace(/\s/g, ' ').search(elemento) != -1){
          registro.style.display ='table-row';
        }
        numeroContactos();
      }
  })
})

// Notificación en pantalla.
function mostrarNotificacion(mensaje, clase){
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
numeroContactos();

function numeroContactos() {
  const totalContactos = document.querySelectorAll('tbody tr');
        contenedorNumero = document.querySelector('total-contactos span');

  let total = 0;

  totalContactos.forEach(contacto => {
    if(contacto.style.display === '' || contacto.style.display === 'table-row'){
        total++;
    }
  });

$('.total-contactos span').text(total);

}
