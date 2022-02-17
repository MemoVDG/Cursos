package main

import (
	"context"
	"fmt"
	"math/rand"
	"time"
)

func main() {
	// Context sirve para compartir context entre funciones y rutinas
	// Controlar timeout y cancelar rutinas
	// Compartir valores
	//ctx := context.Background()
	//done := make(chan bool)

	//ctxTimeout, cancel := context.WithTimeout(ctx, time.Second)
	//go doSomething(ctxTimeout, done)

	//ctxWithValue := context.WithValue(ctxTimeout, "foo", "my value")
	//go doSomething(ctxWithValue, done)

	//<- done
	//cancel()
	res := make(chan string)
	ctxe, cancel := context.WithCancel(context.Background())
	go performRequest(ctxe, res, 1)
	go performRequest(ctxe, res, 2)
	go performRequest(ctxe, res, 3)
	go performRequest(ctxe, res, 4)

	msg := <-res
	cancel()
	fmt.Println(msg)
}

func doSomethingX(ctx context.Context, done chan<- bool) {
	for {
		select {
		case <-ctx.Done():
			fmt.Println("Context done")
			done <- true
			return
		default:
			fmt.Println("Running")
			time.Sleep(time.Millisecond * 500)
		}
	}
}

func performRequest(ctx context.Context, res chan<- string, i int) {
	d := rand.Int() % 50
	time.Sleep(time.Millisecond * time.Duration(d))

	select {
	case res <- fmt.Sprintln("response from request %d", i):
	case <-ctx.Done():
		fmt.Println("request", i, "done")
	}
}
