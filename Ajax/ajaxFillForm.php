<?php
    session_start();
    $dbPassword = "macau1stOnlineCasino";
    $dbName = "peapods";
    $db = new mysqli('localhost', 'root', $dbPassword, $dbName);
    
    if($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
    }
    $dbOk = true;
    
    if($dbOk And $_SERVER["REQUEST_METHOD"] == "GET"){
        $code = htmlspecialchars(trim($_GET["code"]));
        $query = "SELECT `form_data` FROM forms WHERE `code` = ?";
        $statement = $db->prepare($query);
        if($statement){
            $statement->bind_param("s", $code);
            $statement->execute();
            $result = $statement->get_result();
            $formData = $result->fetch_assoc();
            if(!$formData){
                $success = array('errors'=>true,'message'=>'Form not found');
            }
            else{
                $success = array('errors'=>false,'message'=>'Fetch form successful','formData'=>$formData["form_data"]);
            }
            echo json_encode($success);
            $statement->close();
        }
    }
    else if($dbOk And $_SERVER["REQUEST_METHOD"] == "POST"){
        $code = substr(uniqid(), -6);
        // Checks if the code is unique
        $codeValidation = $db->query("SELECT * FROM forms WHERE `code` = '$code'");
        // Tries 1000 times before exploding
        $i = 0;
        while($codeValidation->num_rows != 0 And $i < 1000){
            $code = substr(uniqid(), -6);
            $codeValidation = $db->query("SELECT * FROM forms WHERE `code` = '$code'");
            $i = $i + 1;
        }
        if($i >= 1000){
            die("Cannot add this event.");
        }

        $creator = "Xinyan Sun"; // This is the username of creator
        $data = json_encode($_POST["form"]);
        $query = "INSERT INTO forms (`code`, `creator`, `form_data`) VALUES (?, ?, '$data')"; // Mysteriously I could not
        $statement = $db->prepare($query);
        if($statement){
            $statement->bind_param("ss", $code, $creator);
            $statement->execute();
            $statement->close();
            $success = array('errors'=>false,'message'=>'New form creation successful','code'=>$code);
            echo json_encode($success);
        }
        else{
            echo "Unexpected problem with database.";
            $queryErrors = array(
                'errors' => true,
            );
            echo json_encode($queryErrors);
        }

    }

    $db->close();
?>