<?php
    #возвращаем в виде текста имя пользователя
    include 'conf.php';
    $query = mysqli_query($connect, 'SELECT * FROM `comments`');
    while($res = $query->fetch_assoc()){
      $user = mysqli_query($connect, 'SELECT users_login FROM `users` WHERE users_id="'.strval($res["user_id"]).'" LIMIT 1');
      $nick = $user->fetch_assoc();
      echo "<p class='username'>".$nick["users_login"]."</p>";
      echo "<p class='datetime'>".$res["time_stamp"]."</p>";
      echo "<p class='comment'>".$res["comment_text"]."</p>";
    }
    echo $res["comment_text"];
?>
