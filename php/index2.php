<?php
    header('Content-Type:text/html;charset=UTF-8');

    $uname = $_REQUEST['uname'];
    $ulinkman = $_REQUEST['relation'];
    $ucontent = $_REQUEST['message'];
    $utime = time()*1000;

    $conn = mysqli_connect('127.0.0.1','root','','blogs',3306);
    mysqli_query($conn,"SET NAMES UTF8");

    $sql = "INSERT INTO dept VALUES (NULL,'$uname','$ulinkman','$ucontent','$utime')";
    $result = mysqli_query($conn,$sql);
?>
