SELECT 
    ID AS OrderID,
    OrderDate,
    TotalAmount
FROM 
    Orders
WHERE 
    OrderDate BETWEEN '2024-01-01' AND '2024-01-31'
    AND TotalAmount > 500.00