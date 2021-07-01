package main

import "fmt"

type pc struct {
	ram   int
	disk  int
	brand string
}

func (myPc pc) ping() {
	fmt.Println(myPc.brand, "Pong")
}

func (myPc *pc) duplicateRam() {
	myPc.ram = myPc.ram * 2
}

func main() {
	a := 20
	b := &a

	//& te da la direccion de memoria
	//* te da el valor del apuntador de memoria
	fmt.Println(a)
	fmt.Println(*b)

	*b = 100 // Se accessa al valor en direccion de memoria y se modifica

	fmt.Println(a)

	myPc := pc{
		ram:   16,
		disk:  20,
		brand: "msi",
	}
	myPc.ping()

	fmt.Println(myPc.ram)
	myPc.duplicateRam()
	fmt.Println(myPc.ram)
	fmt.Println(myPc)

}
