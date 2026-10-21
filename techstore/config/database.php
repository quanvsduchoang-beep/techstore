<?php

$serverName = "LAPTOP-C3D4MAEP\SQLEXPRESS";

$connectionOptions = array(
    "Database" => "TechStore",
    "Uid" => "sa",
    "PWD" => "123456",
    "CharacterSet" => "UTF-8",
    "TrustServerCertificate" => true
);

$conn = sqlsrv_connect($serverName, $connectionOptions);

if ($conn === false) {

    echo "<h2>Kết nối SQL Server thất bại!</h2>";

    echo "<pre>";
    print_r(sqlsrv_errors());
    echo "</pre>";

    exit;
}

echo "Kết nối SQL Server thành công!";

?>