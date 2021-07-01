package main

import "fmt"

// Es buena practica indicar si el chanel va a recibir o va a sacar
func say(text string, c chan<- string) {
	c <- text // Ingresamos el dato en el canal
}

func main() {
	// Solo recibe una goroutine
	c := make(chan string, 1)

	fmt.Println("Hello")

	go say("Bye", c)

	fmt.Println(<-c) // Sacar el dato del canala
}
