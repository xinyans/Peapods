<?php
    session_start();
    if(isset($_REQUEST['code']) and isset($_REQUEST['data'])) {
        $code = $_REQUEST['code'];
        $data = $_REQUEST['data'];
        $db = new mysqli('localhost', 'root', 'cows', 'peapods');
        $query = "UPDATE forms SET groupjson = '$data' WHERE code = '$code'";
        $result = mysqli_query($db, $query);
        $db->close();
        echo "success";
    }
    else {
        echo "failure";
    }

    // $.ajax({
    //     type: "POST",
    //     url: "../Ajax/ajaxReturnAlgoData.php",
    //     data: {code: "abcdef", data = "AsdasdasdJSONJSON"},
    //     success: function(msg){
    //         console.log(msg);
    //     }
    // });
?>
