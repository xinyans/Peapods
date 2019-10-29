    <?php
      session_start();
      $data = $username = $password = $firstName = $lastName = $email = "";
      $errors = array();

      if($_SERVER["REQUEST_METHOD"] == "POST") {
        $db = new mysqli('localhost', 'root', 'cows', 'peapods');
        $username = mysqli_real_escape_string($db, $_POST['username']);
        $password = mysqli_real_escape_string($db, $_POST['password']);
        $firstName = mysqli_real_escape_string($db, $_POST['firstname']);
        $lastName = mysqli_real_escape_string($db, $_POST['lastname']);
        $email = mysqli_real_escape_string($db, $_POST['email']);
        
        if (empty($username)) { array_push($errors, "Username is required"); }
        if (empty($email)) { array_push($errors, "Email is required"); }
        if (empty($password)) { array_push($errors, "Password is required"); }
        
        $user_check_query = "SELECT * FROM userdata WHERE username='$username' OR email='$email' LIMIT 1";
        $result = mysqli_query($db, $user_check_query);
        $user = mysqli_fetch_assoc($result);
        
        if ($user) { // if user exists
          if ($user['username'] === $username) {
            array_push($errors, "Username already exists");
          }
      
          if ($user['email'] === $email) {
            array_push($errors, "email already exists");
          }
        }
      
        // Finally, register user if there are no errors in the form
        if (count($errors) == 0) {
            $password = md5($password);//encrypt the password before saving in the database
      
            $query = "INSERT INTO userdata (lastName, firstName, username, password, email) 
                      VALUES('$lastName', '$firstName', '$username', '$password', '$email')";
            $db->query($query);

        }
        $db->close();
      }
      if(isset($_SESSION['requestPage'])){
        header("location: ..".$_SESSION['requestPage']);
      }
      else {
        header("location: ../index.php");
      }
    ?>
