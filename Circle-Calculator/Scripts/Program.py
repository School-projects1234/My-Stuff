import math

def calculate_radius(diameter):
    return diameter / 2

def calculate_diameter(radius):
    return radius * 2

def calculate_circumference(radius):
    return 2 * 3.14159265359 * radius

print("What do you want to calculate?")
print("1. Radius")
print("2. Diameter")
print("3. Circumference")
choice = int(input("Enter your choice (1-3): "))

if choice == 1:
    print("\x1b[2J\033[H")
    print("Calculate radius from:")
    print("1. Diameter")
    print("2. Circumference")
    sub_choice = int(input("Enter your choice (1-2): "))
    if sub_choice == 1:
        print("\x1b[2J\033[H")
        diameter = float(input("Enter the diameter: "))
        radius = calculate_radius(diameter)
        print("\x1b[2J\033[H")
        print(f"The radius is: {radius:.2f}")
    elif sub_choice == 2:
        print("\x1b[2J\033[H")
        circumference = float(input("Enter the circumference: "))
        radius = circumference / (2 * math.pi)
        print("\x1b[2J\033[H")
        print(f"The radius is: {radius:.2f}")
    else:
        print("\x1b[2J\033[H")
        print("Invalid choice. Please try again.")

elif choice == 2:
    print("\x1b[2J\033[H")
    print("Calculate diameter from:")
    print("1. Radius")
    print("2. Circumference")
    sub_choice = int(input("Enter your choice (1-2): "))
    if sub_choice == 1:
        print("\x1b[2J\033[H")
        radius = float(input("Enter the radius: "))
        diameter = calculate_diameter(radius)
        print("\x1b[2J\033[H")
        print(f"The diameter is: {diameter:.2f}")
    elif sub_choice == 2:
        print("\x1b[2J\033[H")
        circumference = float(input("Enter the circumference: "))
        diameter = circumference / math.pi
        print("\x1b[2J\033[H")
        print(f"The diameter is: {diameter:.2f}")
    else:
        print("\x1b[2J\033[H")
        print("Invalid choice. Please try again.")

elif choice == 3:
    print("\x1b[2J\033[H")
    print("Calculate circumference from:")
    print("1. Diameter")
    print("2. Radius")
    sub_choice = int(input("Enter your choice (1-2): "))
    if sub_choice == 1:
      print("\x1b[2J\033[H")
      diameter = float(input("Enter the diameter: "))
      circumference = calculate_circumference(diameter / 2)
      print("\x1b[2J\033[H")
      print(f"The circumference is: {circumference:.2f}")
    elif sub_choice == 2:
      print("\x1b[2J\033[H")
      radius = float(input("Enter the radius: "))
      circumference = (radius * 2) * math.pi
      print("\x1b[2J\033[H")
      print(f"The circumference is: {circumference:.2f}")
    else:
      print("\x1b[2J\033[H")
      print("Invalid choice. Please try again") 
else:
  print("\x1b[2J\033[H")
  print("Invalid choice. Please try again")
