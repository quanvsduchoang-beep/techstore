<?php

require_once "../config/database.php";

header("Content-Type: application/json; charset=UTF-8");

$data = json_decode(
    file_get_contents("php://input"),
    true
);

$username = trim($data["username"] ?? "");
$password = $data["password"] ?? "";

$sql = "
    SELECT
        UserID,
        FullName,
        Username,
        PasswordHash
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
        "message" => "Lỗi truy vấn"
    ], JSON_UNESCAPED_UNICODE);

    exit;
}

$user = sqlsrv_fetch_array(
    $stmt,
    SQLSRV_FETCH_ASSOC
);

if (!$user) {

    echo json_encode([
        "success" => false,
        "message" => "Sai tài khoản hoặc mật khẩu"
    ], JSON_UNESCAPED_UNICODE);

    exit;
}

if (!password_verify(
    $password,
    $user["PasswordHash"]
)) {

    echo json_encode([
        "success" => false,
        "message" => "Sai tài khoản hoặc mật khẩu"
    ], JSON_UNESCAPED_UNICODE);

    exit;
}

unset($user["PasswordHash"]);

echo json_encode([
    "success" => true,
    "message" => "Đăng nhập thành công",
    "user" => $user
], JSON_UNESCAPED_UNICODE);