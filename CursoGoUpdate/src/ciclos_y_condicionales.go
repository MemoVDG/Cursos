package main

import "fmt"

func main() {
	// For condicional
	for i := 0; i < 10; i++ {
		fmt.Println(i)
	}

	// For while
	counter := 0
	fmt.Println("------")
	for counter < 10 {
		fmt.Println(counter)
		counter++
	}

	// For infinito
	/*for {
		fmt.Println("Infinito")
	}*/

	// Operadores logicos
	valor := 1
	valor2 := 4
	if valor == 1 {
		fmt.Println("Es uno")
	} else {
		fmt.Println("No es uno")
	}

	if valor == 1 && valor2 == 4 {
		fmt.Println(" Es verdad")
	}

	if valor == 1 || valor == 4 {
		fmt.Println("Tambien es verdad")
	}

	// Switch
	switch modulo := 5 % 2; modulo {
	case 0:
		fmt.Println("Es par")
	default:
		fmt.Println("Impar")
	}

	value := 101
	switch {
	case value > 100:
		fmt.Println("Mayor a 100")
	case value < 100:
		fmt.Println("Menor a 100")
	default:
		fmt.Println("No condicion")
	}

	// Defer
	// Defer indica que esta seccion se debe de ejecutar hasta el final de toda la funcion
	defer fmt.Println("HOLA")
	fmt.Println("MUNDO")

	for i := 0; i < 3; i++ {
		if i == 2 {
			fmt.Println("Es 2")
			continue
		}
		fmt.Println(i)
		if i == 1 {
			break
		}

	}

}
