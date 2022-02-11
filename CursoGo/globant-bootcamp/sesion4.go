package main

import (
	"fmt"
	"sync"
	"time"
)

// Concurrencia, multiples actores que pueden acceder a cierto recurso

//Paralelismo, tareas al mismo tiempo

// Go routines
// Hilos ligeros que administra el run time de go
// Se pueden crear varios goroutines a un solo hilo del procesador
// Goroutines comparten el mismo espacio de memoria
// Una goroutine se ejecuta en paralelo

// Channels
// Sirven para comunicar goroutines

func doSomething() {
	for i := 0; i < 10; i++ {
		time.Sleep(2)
		fmt.Println("Do something function", i)
	}
}

func main() {
	go doSomething()
	fmt.Println("Inside the main function")

	go func() {
		fmt.Println("Inside an anonymous goroutine")
	}()

	for i := 0; i < 10; i++ {
		go func(i int) {
			time.Sleep(5 * time.Millisecond)
			fmt.Println("Go routine", i)
		}(i)
	}

	time.Sleep(time.Second + 2)

	// Canales

	message := make(chan string)

	go func() {
		time.Sleep(time.Second)
		message <- "Hello from go routine"
		fmt.Println("After writing in channel")
		for i := 0; i < 5; i++ {
			fmt.Println(i)
		}
	}()
	// La go routine se va a seguir ejecutando, pero el canal va a bloquear
	// la ejecucion hasta que reciba algo
	// sino se le mandara nada al message entonces tendriamos un deadlock
	// si comentamos la parte en la que se recibe el mensaje, entonces bloqueariamos la goroutine y se quedaria
	// ejecutado hasta el punto donde se manda informacion al mensaje, para evitar eso, se introdujeron
	// los canales con buffer
	d := <-message
	fmt.Println(d)
	fmt.Println("After")
	time.Sleep(time.Second)

	//Canales con buffer

	messageWithBuffer := make(chan string, 2)
	messageWithBuffer <- "HI"
	messageWithBuffer <- "Bye"

	go func() {
		time.Sleep(3 + time.Second)
		n := <-messageWithBuffer
		fmt.Println("From routine", n)
	}()
	// El hecho de que se agrege un valor extra al buffer hace que se bloquee la rutina
	messageWithBuffer <- "Bro"
	fmt.Println(<-messageWithBuffer)
	fmt.Println(<-messageWithBuffer)

	// Mutex
	// Sirven para cominucar go routines, pero puede causar race conditions
	// Que es cuando dos procesos intentan accessar a una variable, entonces pueden cambiar de un momento a
	// a otro y eso puede causar incongruencia
	// Para detectar race conditions podemos correr el programa con
	// go run -race main.go
	// raceConditions()
	withoutRaceCondition()
}

func raceConditions() {
	data := map[string]int{}
	done := make(chan bool)

	go func() {
		for i := 0; i < 100; i++ {
			data["foo"]++
			time.Sleep(time.Millisecond)
		}
		done <- true
	}()

	for i := 0; i < 5; i++ {
		fmt.Println(data["foo"])
		time.Sleep(time.Millisecond)
	}
	// Se cierra el canal
	<-done
}

func withoutRaceCondition() {
	data := map[string]int{}
	done := make(chan bool)

	l := sync.Mutex{}
	go func() {
		for i := 0; i < 1000; i++ {
			// Para evitar el accesso doble se bloquea al escribir y al leer con Mutex
			l.Lock()
			data["foo"]++
			l.Unlock()
			time.Sleep(time.Millisecond)
		}
	}()

	for i := 0; i < 5; i++ {
		l.Lock()
		fmt.Println(data["foo"])
		l.Unlock()
		time.Sleep(time.Millisecond)
	}

	<-done
}
