package main

import (
	"fmt"
	"strconv"
	"time"
)

func main() {
	var x int
	x = 8
	y := 7

	fmt.Println(x)
	fmt.Println(y)

	myvalue, err := strconv.ParseInt("NaN", 0, 64)
	if err != nil {
		fmt.Println("%v\n", err)
	} else {
		fmt.Println(myvalue)
	}

	// Map o Dict
	m := make(map[string]int)
	m["key"] = 6
	fmt.Println(m["key"])

	// Slice
	s := []int{1, 2, 3}

	for index, value := range s {
		fmt.Println(index, value)
	}

	s = append(s, 16)

	for index, value := range s {
		fmt.Println(index, value)
	}

	//Go routines
	c := make(chan int)
	go doSomething(c)
	// Comunicamos una routine con otra
	<-c

	g := 25
	fmt.Println(g)
	h := &g
	// Imprime direccion de memoria
	fmt.Println(&h)
	// Imprime el valor
	fmt.Println(*h)

}

func doSomething(c chan int) {
	time.Sleep(3 * time.Second)
	fmt.Println("Termino")
	c <- 1
}
