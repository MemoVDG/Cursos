class Car {
  Intenger id;
  String license;
  Account driver;
  Intenger passengers;
  
  public Car( String license, Account driver) {
    this.license = license;
    this.driver = driver;
  }

  void printDataCar() {
    System.out.println('Licence' + license)
    System.out.println('Licence' + driver)
    System.out.println('Licence' + passengers)
  }
}