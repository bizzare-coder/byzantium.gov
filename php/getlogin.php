<?php
    #возвращаем в виде текста имя пользователя
    $connect = new mysqli("localhost", "root", "Bazilevs1488", "byzantium_bd" );
    $connect->query("SET NAMES 'utf8' ");
    $query = mysqli_query($connect, 'SELECT users_login FROM `users` WHERE users_id="'.$_COOKIE['id'].'" LIMIT 1');
    $res = $query->fetch_assoc();
    echo $res["users_login"];
?>