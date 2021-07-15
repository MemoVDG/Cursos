package main

import "fmt"

type Employee struct {
	id       int
	name     string
	vacation bool
}

//Receiver functions, sirven para asignar funciones a structs
func (e *Employee) SetId(id int) {
	e.id = id
}

func (e *Employee) SetName(name string) {
	e.name = name
}

func (e *Employee) GetId() int {
	return e.id
}

func (e *Employee) GetName() string {
	return e.name
}

func NewEmployee(id int, name string, vacation bool) *Employee {
	return &Employee{
		id:       id,
		name:     name,
		vacation: vacation,
	}
}

func main() {
	e := Employee{}
	e.id = 1
	e.name = "Chamo"
	e.SetId(5)
	e.SetName("Otro")
	fmt.Println(e)
	fmt.Println(e.GetId())
	fmt.Println(e.GetName())

	e2 := Employee{
		id:       12,
		name:     "Name",
		vacation: true,
	}

	fmt.Println(e2)

	e3 := new(Employee) // New regresa un apuntador
	e3.SetId(10)

	fmt.Println(*e3)

	e4 := NewEmployee(1, "House", false)
	fmt.Println(*e4)
}
