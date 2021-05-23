package main

import "fmt"

func main() {
	var array [4]int
	array[0] = 1
	array[1] = 3 // En go los arrays son inmutables
	fmt.Println(array)
	// Len: elementos en un array, cap: capacidad max del array
	fmt.Println(array, len(array), cap(array))

	// Slice, no se le indica la cantidad de valores que tendra
	slice := []int{0, 1, 5, 2, 4}
	fmt.Println(slice, len(slice), cap(slice))

	// Metodos en el slice
	fmt.Println(slice[0])
	fmt.Println(slice[:3])
	fmt.Println(slice[0:2])
	fmt.Println(slice[2:])

	slice = append(slice, 9)
	fmt.Println(slice)

	// Agregar una lista
	newSlice := []int{8, 9, 10}
	slice = append(slice, newSlice...)
	fmt.Println(slice)

	sliceLetters := []string{"Hola", "que", "hace"}

	for _, valor := range sliceLetters {
		fmt.Println(valor)
	}

	for i := range sliceLetters {
		fmt.Println(i)
	}

	isPalindromo("ama")
	isPalindromo("chaoaoaoa")

	// Maps o dicts
	m := make(map[string]int)

	m["Jose"] = 14
	m["Pepito"] = 20
	fmt.Println(m)

	for i, value := range m {
		fmt.Println(i, value)
	}

	fmt.Println(m["Jose"]) // Si accedes a un valor que no existe te regresa un zero value, es decir cero
	// Primer valor te regresa el valor, segundo te indica si existe con un voleano
	value, ok := m["J"]

	fmt.Println(value, ok)

}

func isPalindromo(text string) {
	var textReverse string

	for i := len(text) - 1; i >= 0; i-- {
		textReverse += string(text[i])
	}

	if text == textReverse {
		fmt.Println("Es palindromo")
	} else {
		fmt.Println("Nope")
	}
}
