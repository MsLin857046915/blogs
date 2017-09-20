 <?php
        header('Content-Type:application/json;charset=UTF-8');

        $utime = time()*1000;
        $conn = mysqli_connect('127.0.0.1','root','','blogs',3306);
        mysqli_query($conn,"SET NAMES UTF8");
        $sql = "SELECT * from dept order by utime DESC LIMIT 0,4";
        $result = mysqli_query($conn,$sql);
        $a=[];
        while(($row = mysqli_fetch_assoc($result))!=null){
              $a[]=$row;
        }
             echo json_encode($a);

