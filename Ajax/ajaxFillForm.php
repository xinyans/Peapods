<?php
    session_start();
    $dbPassword = "cows";
    $dbName = "peapods";
    $db = new mysqli('localhost', 'moo', $dbPassword, $dbName);
    
    if($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
    }
    $dbOk = true;
    
    if($dbOk And $_SERVER["REQUEST_METHOD"] == "GET"){
        $code = htmlspecialchars(trim($_GET["code"]));
        $query = "SELECT `formjson` FROM forms WHERE `code` = ?";
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
                $success = array('errors'=>false,'message'=>'Fetch form successful','formData'=>$formData["formjson"]);
            }
            echo json_encode($success);
            $statement->close();
        }
    }
    else if($dbOk And $_SERVER["REQUEST_METHOD"] == "POST"){
        $code = $_POST["code"];
        $data = json_encode($_POST["data"], JSON_NUMERIC_CHECK);
        $query = "INSERT INTO formdata (`code`, `responsejson`) VALUES (?, ?)";
        $statement = $db->prepare($query);
        if($statement){
            $statement->bind_param("ss", $code, $data);
            $statement->execute();
            $statement->close();
            $success = array('errors'=>false,'message'=>'Form response recorded successful','code'=>$code);
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