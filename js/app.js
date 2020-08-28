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
             // console.log(dataForm);
            $("#contacto")[0].reset()

            // Eviamos y recibimos datos atraves de post.
             $.post('inc/modelos/modelo-contactos.php', dataForm, function(response){
               console.log(response);
               const respuesta  = JSON.parse(response);

               // Dos parametros texto y clase.
               mostrarNotificacion('los campos fueron llenados correctamente', 'correcto');

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

             });


           }else {
             console.log('nada..');
           }

         }
  })
})

// Borrador de filas
$(document).ready(function(e){

  $(document).on('click','.listado-contactos button', function() {
    var elemento = $(this)[0];
    var id = $(elemento).attr('data-id')

    $(this).closest(elemento.parentElement.parentElement).remove()

    const respuesta = confirm("¿Estas seguro (a)?");

    if (respuesta) {
      $.get(`inc/modelos/modelo-contactos.php?id=${id}&accion=borrar`,function(response) {

      });

    }

    // $.post('delete_product.php',{id},response)

    // $(this).closest(element).remove() /* remove the <br/> */
    // .end() /* go back to what was found originally */
    // .remove(); /* and remove */

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
