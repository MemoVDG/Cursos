package main

import "fmt"

func main() {
	// Declaracion de constantes
	const pi float64 = 3.146
	const pi2 = 3.1412

	fmt.Println("pi", pi)
	fmt.Println("pi2", pi2)

	// Declaracion de variables enteras
	base := 12 // := indica que la variable no a sido creada anteriormente
	var altura int = 14
	var area int

	fmt.Println(base, altura, area)

	// Zero values, valores por defecto
	var a int
	var b float64
	var c string
	var d bool

	fmt.Println("a", a)
	fmt.Println("b", b)
	fmt.Println("c", c)
	fmt.Println("d", d)

	// Area cuadrado
	const baseCuadrado = 10
	areaCuadrado := baseCuadrado * baseCuadrado
	fmt.Println("Area Cuadrado", areaCuadrado)

	// Operadores aritmeticos

	x := 10
	y := 50
	fmt.Println("Suma", x+y)
	fmt.Println("Resta", x-y)
	fmt.Println("Multiplicacion", x*y)
	fmt.Println("Division", x/y)
	fmt.Println("Residuo", x%y)
	x++
	fmt.Println("Incremento", x)
	x--
	fmt.Println("Decemento", x)

	// Ciclos
	helloMessage := "Hello"
	worldMessage := "World"

	fmt.Println(helloMessage, worldMessage)

	nombre := "Memo"
	apellido := " VDG"
	fmt.Printf("%s y apellido %s \n", nombre, apellido)
	// %v cuando no sabes el tipo de dato
	fmt.Printf("%v y apellido %v \n", nombre, apellido)

	// Sprintf lo guarda como un string para despues imprimirlo
	message := fmt.Sprintf("%v y %v", nombre, apellido)
	fmt.Println(message)

	// Tipo de dato
	fmt.Printf("Tipo de variable %T %T \n", message, x)

	// Uso de funciones
	holaMundo()
	multipleArguments(1, 2, "woppa")
	fmt.Println("Value:", returnValue(2))
	w, t := returnValues(5)
	// Obtener solo un valor
	h, _ := returnValues(10)
	fmt.Println(h)
	fmt.Println("Multiple values:", w, t)
}
func returnValues(a int) (c, d int) {
	return a * 2, a
}

func returnValue(a int) int {
	return a * 2
}
func multipleArguments(a, b int, c string) {
	fmt.Println(a, b, c)

}
func holaMundo() {
	fmt.Println("Hola M")
}
