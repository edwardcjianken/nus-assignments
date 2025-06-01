while True:
    user_input = input("Enter a number: ")

    # Input validation
    if user_input == "":
        print("Invalid input. Please enter a number.")
        continue

    # Check for positive, negative, or zero.
    user_input = int(user_input)

    if user_input == 0:
        print("Number is zero.")
    elif user_input < 0:
        print("Number is negative.")
    elif user_input > 0:
        print("Number is positive.")
    else:
        print("Invalid input. Please try again!")

    break
