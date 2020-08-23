<?php include 'inc/layout/header.php'; ?>

<div class="contenedor-barra">
  <h1>Agenda de contactos</h1>
</div>

<div class="bg-amarillo contenedor sombra">
  <form action="#" id="contacto">
    <legend>Añada un campo<span>Todos los capmos son obligatorios</span>
    </legend>
    <?php include 'inc/layout/formulario.php'; ?>
  </form>
  </div>
</div>

<div class="bg-blanco contenedor sombra contactos">
  <div class="contenedor-contactos">
    <h2>Contactos</h2>
    <input type="text" id="buscar" class="buscador sombra" placeholder="buscar contactos">

    <p class="total-contactos"><span>2</span> contactos</p>

    <div class="contenedor-tabla">
      <table id="listado-contactos" class="listado-contactos">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Empresa</th>
            <th>Telefon</th>
            <th>Acciones</th>
          </tr>

          <tbody>
            <tr>
              <td>Juan</td>
              <td>Udemy</td>
              <td>09573364561</td>
              <td>
                <a class="btn-editar btn" href="editar.php?id=1">
                  <i class="fas fa-pen-square"></i>
                </a>
                <button data-id="1" type="button" class="btn-borrar btn">
                  <i class=" fas fa-trash-alt"></i>
                </button>
              </td>
              <tr>
                <td>Juan</td>
                <td>Udemy</td>
                <td>09573364561</td>
                <td>
                  <a class="btn-editar btn" href="editar.php?id=1">
                    <i class="fas fa-pen-square"></i>
                  </a>
                  <button data-id="1" type="button" class="btn-borrar btn">
                    <i class=" fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>      <tr>
                      <td>Juan</td>
                      <td>Udemy</td>
                      <td>09573364561</td>
                      <td>
                        <a class="btn-editar btn" href="editar.php?id=1">
                          <i class="fas fa-pen-square"></i>
                        </a>
                        <button data-id="1" type="button" class="btn-borrar btn">
                          <i class=" fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
            </tr>
          </tbody>
        </thead>
      </table>

    </div>
  </div>
</div>


<?php include 'inc/layout/footer.php'; ?>
