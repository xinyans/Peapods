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
        $query = "UPDATE forms SET responsejson = '$data', fillform = '$fillForm' WHERE code = '$code'";
        $result = mysqli_query($db, $query);
        $db->close();
        echo "success";
    }
    else {
        echo "failure";
    }
?>
