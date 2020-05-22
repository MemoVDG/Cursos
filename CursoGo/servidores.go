package main

import (
	"net/http"
	"fmt"
	"time"
)
func main(){
	inicio := time.Now()

	servidores := []string{
		"http://platzi.com",
		"http://google.com",
		"http://facebook.com",
		"http://instagram.com",
	}

	for _, servidor := range(servidores){
		revisarServidor(servidor)
	}

	// Obtenemos el tiempo de ejecucion total del programa
	tiempoPaso := time.Since(inicio)

	fmt.Println("Tiempo de ejecucion %s", tiempoPaso)
}

// Verificamos si el servidor funciona correctamente
func revisarServidor(servidor string){
	// Hacemos peticion
	_, err := http.Get(servidor)

	if err != nil{
		fmt.Println(servidor, "no esta disponible")
	} else{
		fmt.Println(servidor, "funciona correctamente")
	}

}