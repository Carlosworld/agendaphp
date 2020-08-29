<?php



if($_POST['accion'] == 'crear') {

  include '../funciones/conexion.php';
  $nombre = filter_var($_POST['nombre'], FILTER_SANITIZE_STRING);
  $empresa = filter_var($_POST['empresa'], FILTER_SANITIZE_STRING);
  $telefono = filter_var($_POST['telefono'], FILTER_SANITIZE_STRING);

  try {
    // Realizar la consulta ala base de datos.

    $stmt = $conn->prepare("INSERT INTO contactos (nombre, empresa, telefono) VALUES (?,?,?)");
    $stmt->bind_param('sss',$nombre,$empresa,$telefono);
    $stmt->execute();

    if ($stmt->affected_rows == 1) {
      $respuesta = array(
        'respuesta' => 'correcto',
        'datos'=> array(
          'nombre' => $nombre,
          'empresa' => $empresa,
          'telefono' => $telefono,
          'id_insetado' => $stmt->id
        )
      );
    }else {
      $respuesta = array(
        'respuesta' => 'error',
      );
    }

    $stmt->close();
    $conn->close();

  } catch (\Exception $e) {
    // En caso de un error tomar la conexion.
    $respuesta = array(
      'pass' => $e->getMessage()
    );
  }
  echo json_encode($respuesta);
}

elseif($_POST['accion'] == 'editar'){

        include '../funciones/conexion.php';
        $nombre = $_POST['nombre'];
        $empresa = $_POST['empresa'];
        $telefono = $_POST['telefono'];
        $id = $_POST['id'];
var_dump($_POST);
        try {
            // Realizar la caonsulta a la base de datos.
            $stmt = $conn->prepare("UPDATE contactos SET nombre = ?, empresa = ?, telefono = ? WHERE id = ?");
            $stmt->bind_param('sssi', $nombre, $empresa, $telefono, $id);
            $stmt->execute();
            if ($stmt->affected_rows == 1) {
                $respuesta = array(
                    'respuesta' => 'correcto',

                );
            }else{
                $respuesta = array(
                    'respuesta' => 'error',

                );
            }

            $stmt->close();
            $conn->close();
        } catch (Exception $e) {
            // En caso de un error, tomar la conexión.
            $respuesta = array(
                'pass' => $e->getMessage()
            );
        }
        echo json_encode($respuesta);
}

elseif($_GET['accion'] == 'borrar'){

        include '../funciones/conexion.php';
  $id_contacto = $_GET['id'];
        try {
            // Realizar la caonsulta a la base de datos.
            $stmt = $conn->prepare("DELETE FROM contactos WHERE id = ?");
            $stmt->bind_param('i', $id_contacto);
            $stmt->execute();
            if ($stmt->affected_rows > 0) {
                $respuesta = array(
                    'respuesta' => 'correcto',

                );
            }else{
                $respuesta = array(
                    'respuesta' => 'error',

                );
            }

            $stmt->close();
            $conn->close();
        } catch (Exception $e) {
            // En caso de un error, tomar la conexión.
            $respuesta = array(
                'pass' => $e->getMessage()
            );
        }
        echo json_encode($respuesta);
}


?>
