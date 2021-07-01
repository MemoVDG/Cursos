package main

import (
	"fmt"

	pk "CursoGoUpdate/mypackage"
)

type car struct {
	brand string
	year  int
}

func main() {
	myCar := car{
		brand: "Ford",
		year:  2020,
	}

	fmt.Println(myCar)

	var myOtherCar car
	myOtherCar.brand = "Ferrari"

	fmt.Println(myOtherCar)

	var myCar2 pk.CarPublic
	myCar2.Brand = "Tsuru"
	myCar2.Year = 2020

	fmt.Println(myCar2)

	// var myP pk.carPrivate
	// fmt.Println(myP)

	pk.PrintMessage()

}
