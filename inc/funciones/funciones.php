<?php
function obtenerContactos(){
  include 'conexion.php';
  try {
    return $conn->query("SELECT id, nombre, empresa, telefono FROM contactos");
  } catch (Exception $e) {
    echo "Error!!" . $e->getMessage()."<br>";
    return false;
  }
}

// Obtiene un contacto y toma un id.
function obtenerContacto($id){
  include 'conexion.php';
  try {
    return $conn->query("SELECT id, nombre, empresa, telefono FROM contactos WHERE id = $id");
  } catch (Exception $e) {
    echo "Error!!" . $e->getMessage()."<br>";
    return false;
  }
}
