<?php include 'inc/layout/header.php'; ?>

<div class="contenedor-barra">
  <h1>Agenda de contactos</h1>
</div>

<div class="bg-amarillo contenedor sombra">
  <form action="#" id="contacto">
    <legend>Añada un campo<span>Todos los capmos son obligatorios</span>
    </legend>
      <div class="campos">
        <div class="campo">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" placeholder="Nombre Contacto">
        </div>
        <div class="campo">
          <label for="empresa">Empresa:</label>
          <input type="text" id="empresa" placeholder="Nombre Empresa">
        </div>
        <div class="campo">
          <label for="telefono">Teléfono:</label>
          <input type="tel" id="telefono" placeholder="Telefono Contacto"required>
        </div>
      </div>
      <div class="campo enviar">
        <input type="submit" value="añadir">
      </div>
  </form>
  </div>
</div>

<div class="bg-blanco contenedor">
  <div class="contacto">
    <h1>Contacto</h1>
  </div>
  <div class="campo-contacto">
    <input class="sombra" type="text" placeholder="Buscar contacto">
  </div>
  <div class="">
    <table>
      <li>loreefveverv</li>
    </table>
  </div>
</div>




<?php include 'inc/layout/footer.php'; ?>
