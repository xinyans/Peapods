<?php
    session_start();
    if($_SERVER["REQUEST_METHOD"] == "POST") {
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
            echo "Invalid Group Code";
        }
        $db->close();
    }

   /**
   *     Code to make this ajax request:
   *
   *     $.ajax({
   *         type: "POST",
   *         url: "../Ajax/getGroups.php",
   *         data: {code: "testasdcode"},
   *         success: function(msg){
   *             alert(msg);
   *         }
   *     });
    **/
?>

