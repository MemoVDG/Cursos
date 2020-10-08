from car import Car
if __name__ == "__main__":
    car = Car()
    car.license = "AMUUI"
    car.driver = "Andres"
    print(vars(car))

    car2 = Car()
    car.license = "jhsadjk"
    car.driver = "Ruben"
    print(vars(car2))