<?php
    session_start();
    if(isset($_REQUEST['code']) and isset($_REQUEST['data']) and isset($_REQUEST['numGroups'])) {
        $code = $_REQUEST['code'];
        $data = $_REQUEST['data'];
        $numGroups = $_REQUEST['numGroups'];
        if($numGroups > 1){
            $fillForm = 0;
        }
        else {
            $fillForm = 1;
        }
        $db = new mysqli('localhost', 'moo', 'cows', 'peapods');
        $query = "UPDATE forms SET responsejson = ?, fillform = ? WHERE code = ?";
        $statement = $db->prepare($query);
        $statement->bind_param("sss", $data, $fillForm, $code);
        $statement->execute();
        $result = $statement->get_result();
        $db->close();
        echo "success";
    }
    else {
        echo "failure";
    }
?>
