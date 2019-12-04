<?php
    session_start();
    $dbPassword = "cows";
    $dbName = "peapods";
    $db = new mysqli('localhost', 'moo', $dbPassword, $dbName);
    
    if($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
    }
    $dbOk = true;
    
    if($dbOk And $_SERVER["REQUEST_METHOD"] == "POST"){
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

        // Gets creator
        if(isset($_SESSION['loginCookie'])){
            $creator_cookie = $_SESSION['loginCookie'];
            $query_result = $db->query("SELECT `username` FROM logins WHERE `loginCookie` = '$creator_cookie'");
            $row = $query_result -> fetch_assoc();
            $creator = $row["username"];
        }
        else {
            $response = array(
                'errors' => true,
                'message' => 'Not logged in!'
            );
            echo json_encode($response);
            die("Message from die: User not logged in.");
        }

        $data = json_encode($_POST["form"]); // Turns the array into a JSON string
        $query = "INSERT INTO forms (`code`, `creator`, `formjson`) VALUES (?, ?, '$data')"; // Mysteriously I could not
        $statement = $db->prepare($query);
        if($statement){
            $statement->bind_param("ss", $code, $creator);
            $statement->execute();
            $statement->close();
            $response = array('errors'=>false,
                'message'=>'New form creation successful',
                'code'=>$code
            );
        }
        else{
            $response = array(
                'errors' => true,
                'message' => 'Unexpected problem with database.'
            );
            
        }
        echo json_encode($response);
    }

    $db->close();
?>