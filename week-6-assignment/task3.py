while True:
    user_input = input("Enter an integer nnn: ")

    # Input validation
    if user_input == "":
        print("Invalid input. Please enter a number.")
        continue

    # Use loop to print all even numbers from 1 up to nnn
    int_nnn = int(user_input)

    for i in range(2, int_nnn, 2):
        print(i)

    break
