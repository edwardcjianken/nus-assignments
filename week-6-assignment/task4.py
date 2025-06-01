def calculate_area_rectangle(l, w):
    return l * w


print("Calculator for rectangle area:")

rectangle_length = int(input("Enter length: "))
rectangle_width = int(input("Enter width: "))

rectangle_area = calculate_area_rectangle(rectangle_length, rectangle_width)
print(f"The area of the rectangle is {rectangle_area}.")
