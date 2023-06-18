<?php
  if($_POST){

    $nombre = $_POST['nombre'];
    $apellido1 = $_POST['primer_apellido'];
    $apellido2 = $_POST['segundo_apellido'];
    $email = $_POST['email'];
    $login = $_POST['login'];
    $clave = $_POST['clave'];


    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      die("El formato del correo electrónico no es válido.");
    }

    if (strlen($clave) < 4 || strlen($clave) > 8) {
      die("La contraseña debe tener entre 4 y 8 caracteres.");
    }
    

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "cursosql";

    // Creación de conexión
    $conn = new mysqli($servername, $username, $password, $dbname);

      if($conn->connect_error){
        die("Error de conexión a la BD: " . $conn->connect_error);
    }
    

    // Comprobación de email ya en uso
    $sql = "SELECT * FROM registro WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
      die("Este correo electrónico ya está en uso.");
    }

    // Insertación de datos
    $sql = "INSERT INTO registro (nombre, primer_apellido, segundo_apellido, email, login, password) 
            VALUES ('$nombre', '$apellido1', '$apellido2', '$email', '$login', '$clave')";

    if ($conn->query($sql) === TRUE) {
      echo "Registro completado con éxito";
    } else {
      echo "Error al insertar los datos: " . $conn->error;
    }

    // Cerrar la conexión a la base de datos
    $conn->close();
  }
?>
