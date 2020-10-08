class Main {

  public static void main(String [] args) {
    
    Car car = new Car("AMQJK", Account("OK", "OK"));
    car.passenger = 4;
    System.out.println("Car license:" + car.license);

    Car car2 = new Car("AM!$123", Account("OK", "OK"));;
    car.passenger = 3;
    car2.printDataCar()


  }
}