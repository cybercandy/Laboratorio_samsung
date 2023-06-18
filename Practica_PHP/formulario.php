<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Formulario de Registro php</title>
            <!-- CSS -->
        <link rel="stylesheet" href="estilos.css">
</head>

<body>
    <div class="container">

        <form method="POST" action=" ">
            <h1><em>Formulario de Registro</em></h1>

            <label for="nombre">Nombre<span><em> (requerido)</em></span></label>
            <div class="form-field">
                <input type="text" name="nombre" class="form-input" required/>
            </div>

            <label for="apellido">Apellido<span><em> (requerido)</em></span></label>
            <div class="form-field">
                <input type="text" name="apellido" class="form-input" required/>
            </div>

            <label for="email">Email<span><em> (requerido)</em></span></label>
            <div class="form-field">
                <input type="text" name="email" class="form-input" required/>
            </div>

            <div class="field button-field">
                <button name="submit" type="submit">Subscribirse</button>
            </div>
            
            

            <?php

            if($_POST){
                $nombre = $_POST['nombre'];
                $apellido = $_POST['apellido'];
                $email = $_POST['email'];

                $servername ="localhost";
                $username = "root";
                $password = "";
                $dbname = "cursosql";

                //Create connection
                $conn = new mysqli($servername, $username, $password, $dbname);

                if($conn->connect_error){
                    die("Connection failed: " . $conn->connect_error);
                }

                $sql = "INSERT INTO usuario (nombre, apellido, email) VALUES ('$nombre', '$apellido', '$email')";

                if($conn->query($sql) === TRUE){
                    echo "Usuario creado correctamente";
                }else{
                    echo "Error: ". $sql . "<br" . $conn->error;
                }

                $conn->close();
            }

            ?>
        
        </form>
    </div>
</body>
</html>