<?php
    session_start();
    if($_SERVER["REQUEST_METHOD"] == "POST" or $_SERVER["REQUEST_METHOD"] == "GET") {
        $code = $_REQUEST['code'];
        $db = new mysqli('localhost', 'root', 'cows', 'peapods');
        $query = "SELECT * FROM groupdata WHERE usercode = '$code' LIMIT 1";
        $result = mysqli_query($db, $query);
        if($result and $result->num_rows == 1){
            $printData = mysqli_fetch_assoc($result);
            echo $printData['groupjson'];
        }
        else {
            //if there is no such code
            echo "";
        }
        $db->close();
    }

   /**
   *     Code to make this ajax request:
   *
   *     $.ajax({
   *         type: "POST",
   *         url: "../Ajax/getGroups.php",
   *         data: {code: "testcode"},
   *         contentType: "application/json; charset=utf-8",
   *         dataType: "json",
   *         success: function(msg){
   *             alert(msg);
   *         }
   *     });
   * 
   *    or line of form project.websys/Ajax/getGroups.php?code=testcode
    **/
?>
