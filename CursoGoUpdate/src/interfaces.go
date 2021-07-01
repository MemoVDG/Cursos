package main

import "fmt"

type cuadrado struct {
	base float64
}

type rectangulo struct {
	base   float64
	altura float64
}

type figuras interface {
	area() float64
}

func (c cuadrado) area() float64 {
	return c.base * c.base
}

func (r rectangulo) area() float64 {
	return r.base * r.altura
}

func calcular(f figuras) {
	fmt.Println("Area", f.area())
}

func main() {

	myCuadrado := cuadrado{base: 8}
	myRectangulo := rectangulo{base: 2, altura: 4}
	w := make(map[int][]string)
	print(w)

	calcular(myRectangulo)
	calcular(myCuadrado)

	// Lista de interfaces
	myInterfaceList := []interface{}{"Hola", 121, 12.12, myRectangulo}

	fmt.Println(myInterfaceList)

}
