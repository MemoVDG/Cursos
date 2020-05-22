package main

import (
	"fmt"
)

func main(){
	// Creamos un map y le decimos que la llave sera de tipo string y nos regresara un entero
	n1 := make(map[string]int)

	n1["a"] = 8

	fmt.Println(n1["a"])
}