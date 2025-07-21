SELECT 
    Products.Name AS ProductName, OrderDetails.Quantity AS QuantityOrdered, Orders.OrderDate
FROM 
    Products
JOIN 
    OrderDetails 
    ON Products.ProductID = OrderDetails.ProductID
JOIN 
    Orders 
    ON OrderDetails.OrderID = Orders.OrderID
WHERE 
    Orders.OrderDate >= '2024-06-01' 
    AND Orders.OrderDate < '2024-07-01'
ORDER BY 
    Orders.OrderDate DESC;