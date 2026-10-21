<?php

header(
    "Content-Type: application/json; charset=UTF-8"
);

require_once "../config/database.php";


$data = json_decode(
    file_get_contents("php://input"),
    true
);


$name =
    trim($data["name"] ?? "");

$username =
    trim($data["username"] ?? "");

$password =
    $data["password"] ?? "";


if (
    $name === "" ||
    $username === "" ||
    $password === ""
) {

    echo json_encode([
        "success" => false,
        "message" => "Vui lòng nhập đầy đủ thông tin"
    ]);

    exit;
}


/* Kiểm tra username */

$sql = "
    SELECT UserID
    FROM Users
    WHERE Username = ?
";


$stmt = sqlsrv_query(
    $conn,
    $sql,
    [$username]
);


if ($stmt === false) {

    echo json_encode([
        "success" => false,
        "message" => "Lỗi truy vấn SQL"
    ]);

    exit;
}


if (sqlsrv_has_rows($stmt)) {

    echo json_encode([
        "success" => false,
        "message" => "Tên đăng nhập đã tồn tại"
    ]);

    exit;
}


/* Mã hóa mật khẩu */

$passwordHash =
    password_hash(
        $password,
        PASSWORD_DEFAULT
    );


/* Thêm người dùng */

$sql = "
    INSERT INTO Users
    (
        FullName,
        Username,
        PasswordHash
    )
    VALUES
    (?, ?, ?)
";


$stmt = sqlsrv_query(
    $conn,
    $sql,
    [
        $name,
        $username,
        $passwordHash
    ]
);


if ($stmt === false) {

    echo json_encode([
        "success" => false,
        "message" => "Đăng ký thất bại"
    ]);

    exit;
}


echo json_encode([
    "success" => true,
    "message" => "Đăng ký thành công"
]);

?>