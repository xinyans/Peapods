<?php
    session_start();
    if(isset($_REQUEST['code'])) {
        $code = $_REQUEST['code'];
        $db = new mysqli('localhost', 'moo', 'cows', 'peapods');
        $query = "SELECT responsejson FROM formdata WHERE code = '$code'";
        $result = mysqli_query($db, $query);
        if($result and $result->num_rows > 0){
            $printData = mysqli_fetch_all($result);
            echo '{"data":[';
            $print = "";
            foreach($printData as $row){
                $print = $print.$row[0].',';
            }
            echo substr($print, 0, -1);;
            echo ']}';
        }
        else {
            //if there is no such code
            echo "";
        }
        $db->close();
    }
?>
