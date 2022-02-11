package main

import (
	"errors"
	"fmt"
	"hello-word/foo"
)

// Como la variable esta declarada en otro archivo se tiene que correr go run .
// esto es posible siempre y cuando el paquete sea el mismo
func main() {
	fmt.Println(foo.ConstanteExportada)
	foo.Hi()
	variadicFunction("Chucho", "Perez")
	countdown(10)

	// Creacion de errores, los errores pueden ser creados de diferentes maneras
	var knowError = errors.New("Some error")
	fmt.Errorf("Another error")
	fmt.Println(knowError)
}

// defer -> ejecuta la sentencia al final de todo
// es una pila, el ultimo que entra es el primero que sale

func countdown(l int) {
	for i := 0; i < 10; i++ {
		defer fmt.Println(i)
	}
}

// Las funciones pueden ser variables

func buz() {
	// Se guarda en variable
	saludo := func() {
		fmt.Println("Executed")
	}
	saludo()
	// Se ejecuta al momento, como funcion anonima
	func() {
		fmt.Println("Brooo")
	}()
}

// Variadic functions, es una funcion que puede recibir N numero de argumentos
func variadicFunction(names ...string) {
	// names se comportara como un arregle
	for _, v := range names {
		fmt.Println(v)
	}
}
