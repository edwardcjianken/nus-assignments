user_name, user_age_str, user_height_cm_str = input(
    "Enter user's name, age, and height (cm)."
).split()

print(f"Hello {user_name}!")

# Calculate user's age 10 years frm now
user_age = int(user_age_str)
user_height_cm = int(user_height_cm_str)

future_age = user_age + 10
print(f"User's age 10 years from now is {future_age}.")

# Display height in meters
user_height_m = user_height_cm / 100
print(f"User's height in metres is {user_height_m:.2f}m.")
