package main

import "fmt"

func message(text string, c chan string) {
	c <- text
}

func main() {
	c := make(chan string, 2)

	c <- "Mensaje1"
	c <- "Mensaje2"

	fmt.Println(len(c), cap(c))

	// Cuando se cierra el canal ya no se pueden agregar datos
	close(c)

	// Iterar sobre datos en el canal
	for message := range c {
		fmt.Println(message)
	}

	// Select, sirve para seleccionar el cana
	email := make(chan string)
	email2 := make(chan string)

	go message("Mensaje 1", email)
	go message("Mensaje 2", email2)

	for i := 0; i < 2; i++ {
		select {
		case m1 := <-email:
			fmt.Println("Email recibido de email 1", m1)
		case m2 := <-email2:
			fmt.Println("Email recibido de email 2", m2)
		}
	}
}
