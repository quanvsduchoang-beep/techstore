<?php

require_once "../config/database.php";

header("Content-Type: application/json; charset=UTF-8");

$sql = "
    SELECT
        ProductID,
        ProductName,
        Category,
        Price,
        ImageURL,
        Description,
        Quantity
    FROM Products
    ORDER BY ProductID
";

$stmt = sqlsrv_query($conn, $sql);

if ($stmt === false) {

    echo json_encode([
        "success" => false,
        "message" => "Không lấy được sản phẩm",
        "error" => sqlsrv_errors()
    ], JSON_UNESCAPED_UNICODE);

    exit;
}

$products = [];

while ($row = sqlsrv_fetch_array(
    $stmt,
    SQLSRV_FETCH_ASSOC
)) {

    $products[] = $row;

}

echo json_encode([
    "success" => true,
    "data" => $products
], JSON_UNESCAPED_UNICODE);