package main

import "fmt"

type pc struct {
	ram   int
	brand string
	disk  int
}

func (mypc pc) String() string {
	return fmt.Sprintf("Tengo %d GB RAM y %d de disco y soy %s", mypc.ram, mypc.disk, mypc.brand)
}

func main() {
	mypc := pc{ram: 16, brand: "MSI", disk: 10}

	fmt.Println(mypc)
}
