<?php
    session_start();
    if(isset($_REQUEST['code'])) {
        $code = $_REQUEST['code'];
        $db = new mysqli('localhost', 'root', 'cows', 'peapods');
        $query = "SELECT responsejson FROM formdata WHERE code = '$code'";
        $result = mysqli_query($db, $query);
        if($result and $result->num_rows > 0){
            $printData = mysqli_fetch_all($result);
            echo '{"data"=[';
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

   /**
   *     Code to make this ajax request:
   *
   *     $.ajax({
   *         type: "POST",
   *         url: "../Ajax/ajaxGetData.php",
   *         data: {code: "abcdef"},
   *         contentType: "application/json; charset=utf-8",
   *         dataType: "json",
   *         success: function(msg){
   *             alert(msg);
   *         }
   *     });
   * 
   *    or line of form project.websys/Ajax/ajaxGetData.php?code=abcdef
    **/
?>
