<?php
    session_start();
    if(isset($_REQUEST['code']) and isset($_REQUEST['data'])) {
        $code = $_REQUEST['code'];
        $data = $_REQUEST['data'];
        $db = new mysqli('localhost', 'moo', 'cows', 'peapods');
        $query = "UPDATE forms SET responsejson = '$data', fillform = '0' WHERE code = '$code'";
        $result = mysqli_query($db, $query);
        $db->close();
        echo "success";
    }
    else {
        echo "failure";
    }
?>
