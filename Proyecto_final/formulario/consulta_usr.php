<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "cursosql";

    // Creación de conexión
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Error de conexión a la BD: " . $conn->connect_error);
    }

    // Consulta de usuarios
    $sql = "SELECT * FROM registro";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "<h2>Lista de todos los usuarios registrados:</h2>";
        echo "<ul>";
        while ($row = $result->fetch_assoc()) {
            echo "<li>Nombre: " . $row["nombre"] . "</li>";
            echo "<li>Primer apellido: " . $row["primer_apellido"] . "</li>";
            echo "<li>Segundo apellido: " . $row["segundo_apellido"] . "</li>";
            echo "<li>Email: " . $row["email"] . "</li>";
            echo "<li>Login: " . $row["login"] . "</li>";
            echo "<li>Contraseña: " . $row["password"] . "</li>";
            echo "<br>";
        }
        echo "</ul>";
    } else {
        echo "No hay usuarios registrados.";
    }

    // Cerrar la conexión a la base de datos
    $conn->close();
?>
