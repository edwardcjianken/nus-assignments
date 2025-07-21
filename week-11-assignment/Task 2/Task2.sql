-- Task 2a
INSERT INTO Customers (Name, Email, Phone, Address)
VALUES ('Lisa Thompson', 'lisa.thompson@example.com', '555-234-5678', '789 Cedar Lane, Hometown, USA');

-- Task 2b
UPDATE Customers
SET Email = 'new.email@example.com'
WHERE ID = 3;

-- Task 2c
DELETE FROM Orders
WHERE ID = 2; 

