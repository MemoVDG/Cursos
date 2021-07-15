package main

import "fmt"

type Person struct {
	name string
	age  int
}

type Employee struct {
	id int
}

// Go usa "campo anonimo" para hacer composicion en lugar de herencia por lo tanto
// El polimorfismo no funciona de manera tan directa
type FullTimeEmployee struct {
	Person
	Employee
}

func main() {
	ftEmployee := FullTimeEmployee{}

	ftEmployee.name = "Name"
	ftEmployee.age = 2
	ftEmployee.id = 5

	fmt.Println(ftEmployee)
}
