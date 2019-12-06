<?php
    session_start();
    if(isset($_REQUEST['code'])) {
        $code = $_REQUEST['code'];
        $db = new mysqli('localhost', 'moo', 'cows', 'peapods');
        $query = 'SELECT formname FROM forms WHERE CODE = "'.$code.'"';
        $result = $db->query($query);
        if($result){
            $groupname = $result->fetch_assoc()['formname'];
            echo $groupname;
        }
        else {
            //if there is no such code
            echo "Groups";
        }
        $db->close();
    }
?>
