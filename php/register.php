<?php
    $connect = new mysqli("localhost", "root", "Bazilevs1488", "byzantium_bd" );
    $connect->query("SET NAMES 'utf8' ");
    function addUser($users_login, $users_password, $users_status, $users_email, $connect)
    {
        $err = array();

        if(!preg_match("/^[a-zA-Z0-9]+$/",$users_login))
        {
            $err[] = "Логин может состоять только из букв английского алфавита и цифр!";
        }
         
        if(strlen($users_login) < 3 or strlen($users_login) > 30)
        {
            $err[] = "Логин должен быть не меньше 3-х символов и не больше 30!";
        }

        if (!preg_match("/^(?:[a-z0-9]+(?:[-_.]?[a-z0-9]+)?@[a-z0-9_.-]+(?:\.?[a-z0-9]+)?\.[a-z]{2,5})$/i", $users_email)) {
            $err[] = "Адрес указан не правильно.";
        }

        $query = mysqli_query($connect, 'SELECT count(users_id) FROM `users` WHERE users_login="'.$users_login.'"');
        $res = $query->fetch_assoc(); 
        if ($res["count(users_id)"]>0){
            $err[] = "Пользователь с таким логином уже существует";  
        }
        $query = mysqli_query($connect, 'SELECT count(users_id) FROM `users` WHERE users_email="'.$users_email.'"');
        $res = $query->fetch_assoc(); 
        if ($res["count(users_id)"]>0){
            $err[] = "Пользователь с таким email уже существует";  
        }
        if(count($err) == 0){
            $password = md5(md5(trim($users_password)));
            $add = $connect->query("INSERT INTO byzantium_bd.users (users_id, users_login, users_password, users_status, users_email) VALUES  (NULL, '$users_login', '$password', '$users_status', '$users_email')");
        }
        if ($err!=null) {
            print "При регистрации произошли следующие ошибки:";
            foreach($err AS $error)
            {
              print $error." ";
            }  
          }
    }
    addUser($_POST["login"], $_POST["passw"], "civil", $_POST["email"], $connect);
?>