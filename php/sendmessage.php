<?php
include 'conf.php';
$text = $_POST["comment"];
$id = $_COOKIE["id"];
$add = $connect->query("INSERT INTO byzantium_bd.comments (comment_id, user_id, time_stamp, comment_text) VALUES  (NULL, '$id', NULL, '$text')");
?>
