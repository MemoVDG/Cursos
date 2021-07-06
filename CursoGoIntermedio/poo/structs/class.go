package main

import "fmt"

type Employee struct {
	id   int
	name string
}

func main() {
	e := Employee{}
	e.id = 1
	e.name = "Chamo"
	fmt.Println(e)
}
