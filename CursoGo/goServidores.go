package main

import (
	"net/http"
	"fmt"
	"time"
)

// Manejo de concurrencia en Go
func main(){
	// Obtenemos el tiempo de inicio del programa
	inicio := time.Now()

	// Creamos un canal de comunicaciones para los procesos
	canal := make(chan string)

	servidores := []string{
		"http://platzi.com",
		"http://google.com",
		"http://facebook.com",
		"http://instagram.com",
	}

	for _, servidor := range(servidores){
		// Con la palabra reservada "go" antes de la funcion le decimos que sera concurrente
		go revisarServidor(servidor, canal)
	}

	// Debemos de estar a la escucha de los canales, si solo se pone un
	// fmt.Println(<-canal) solo escuchara una vez
	// por lo tanto aca esperamos a que el canal reciba y de ahi pasamos a la otra iteracion
	for i :=0; i < len(servidores); i++{
			fmt.Println(<-canal)
	}


	// Obtenemos el tiempo de ejecucion total del programa
	tiempoPaso := time.Since(inicio)

	fmt.Println("Tiempo de ejecucion %s", tiempoPaso)
}

// Verificamos si el servidor funciona correctamente
func revisarServidor(servidor string, canal chan string){
	// Hacemos peticion
	_, err := http.Get(servidor)

	if err != nil{
		fmt.Println(servidor, "no esta disponible")
		// Mandamos informacion al canal que esta escuchando
		canal <- servidor + "no esta disponible"
	} else{
		fmt.Println(servidor, "funciona correctamente")
		// Mandamos informacion al canal que esta escuchando
		// "<-" indica hacia que lado se le enviara la informacion
		canal <- servidor + "funciona correctamente"
	}

}