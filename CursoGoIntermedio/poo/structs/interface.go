package main

import "fmt"

type Person struct {
	id   string
	name string
}

type Employee struct {
	deparment string
}
type FullTimeEmployee struct {
	Person
	Employee
}

type TemporalEmployee struct {
	Person
	Employee
	taxRate int
}

func (ftEmployee FullTimeEmployee) getMessage() string {
	return "Full time employee"
}

func (temp TemporalEmployee) getMessage() string {
	return "Temporal time employee"
}

// Go no implementa interfaces de manera explicita sino implicita
func getMessage(p PrintInfo) {
	fmt.Println(p.getMessage())
}

type PrintInfo interface {
	getMessage() string
}

func main() {
	temporal := TemporalEmployee{}
	getMessage(temporal)

	ft := FullTimeEmployee{}
	getMessage(ft)
}
