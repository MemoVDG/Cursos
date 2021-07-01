package main

import (
	"fmt"
	"sync"
	"time"
)

func say(text string, wg *sync.WaitGroup) {
	defer wg.Done() // Esperar a que esta funcoon sea la ultma en ejecutarse
	fmt.Println(text)

}
func main() {
	// Acumula un conjunto de go routines y los va liberando
	var wg sync.WaitGroup // Paquete para interactura de forma primitiv con goroutines

	fmt.Println("Hello")
	wg.Add(1)

	go say("world", &wg) // Con la palabra "go" se ejecuta la funccion de manera concurrente
	wg.Wait()

	go func(text string) {
		fmt.Println(text)
	}("Adios") // Funcion anonima

	time.Sleep(time.Second) // No es recomendable usar slepp

}
