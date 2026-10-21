CREATE DATABASE TechStore;
GO
USE TechStore;
GO
CREATE TABLE Users
(
    UserID INT IDENTITY(1,1) PRIMARY KEY,

    FullName NVARCHAR(100) NOT NULL,

    Username VARCHAR(50) NOT NULL UNIQUE,

    PasswordHash VARCHAR(255) NOT NULL,

    Phone VARCHAR(20),

    Email VARCHAR(100),

    CreatedAt DATETIME DEFAULT GETDATE()
);
GO
SELECT * FROM Users;
CREATE TABLE Products
(
    ProductID INT IDENTITY(1,1) PRIMARY KEY,

    ProductName NVARCHAR(200) NOT NULL,

    Category VARCHAR(50) NOT NULL,

    Price DECIMAL(18,2) NOT NULL,

    ImageURL NVARCHAR(500),

    Description NVARCHAR(MAX),

    Quantity INT DEFAULT 100,

    CreatedAt DATETIME DEFAULT GETDATE()
);
GO
INSERT INTO Products
(
    ProductName,
    Category,
    Price,
    ImageURL,
    Description,
    Quantity
)
VALUES

(
N'Laptop ASUS',
'computer',
15990000,
'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
N'Laptop ASUS chính hãng',
100
),

(
N'iPhone 15',
'phone',
19990000,
'https://images.unsplash.com/photo-1592286927505-2fd0c6d7d7f2',
N'iPhone 15',
100
),

(
N'AirPods Pro 2',
'headphone',
5990000,
'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434',
N'Tai nghe AirPods Pro 2',
100
),

(
N'Keychron K2',
'keyboard',
2490000,
'https://images.unsplash.com/photo-1587829741301-dc798b83add3',
N'Bàn phím cơ',
100
),

(
N'Samsung Smart TV',
'tv',
15990000,
'https://images.unsplash.com/photo-1593784991095-a205069470b6',
N'Smart TV Samsung',
100
);
GO
SELECT * FROM Products;
CREATE TABLE Orders
(
    OrderID INT IDENTITY(1,1) PRIMARY KEY,

    UserID INT NOT NULL,

    TotalAmount DECIMAL(18,2) NOT NULL,

    PaymentMethod NVARCHAR(50) NOT NULL,

    PaymentStatus NVARCHAR(50)
        DEFAULT N'Chưa thanh toán',

    OrderStatus NVARCHAR(50)
        DEFAULT N'Đang xử lý',

    OrderDate DATETIME
        DEFAULT GETDATE(),

    CONSTRAINT FK_Orders_Users
        FOREIGN KEY (UserID)
        REFERENCES Users(UserID)
);
GO
CREATE TABLE OrderDetails
(
    OrderDetailID INT IDENTITY(1,1) PRIMARY KEY,

    OrderID INT NOT NULL,

    ProductID INT NOT NULL,

    Quantity INT NOT NULL,

    Price DECIMAL(18,2) NOT NULL,

    CONSTRAINT FK_OrderDetails_Orders
        FOREIGN KEY (OrderID)
        REFERENCES Orders(OrderID),

    CONSTRAINT FK_OrderDetails_Products
        FOREIGN KEY (ProductID)
        REFERENCES Products(ProductID)
);
GO
CREATE TABLE Payments
(
    PaymentID INT IDENTITY(1,1) PRIMARY KEY,

    OrderID INT NOT NULL,

    Amount DECIMAL(18,2) NOT NULL,

    PaymentMethod NVARCHAR(50),

    TransactionCode VARCHAR(100),

    PaymentStatus NVARCHAR(50),

    PaymentDate DATETIME DEFAULT GETDATE(),

    CONSTRAINT FK_Payments_Orders
        FOREIGN KEY (OrderID)
        REFERENCES Orders(OrderID)
);
GO