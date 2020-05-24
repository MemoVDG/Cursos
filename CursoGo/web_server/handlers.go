package main
import (
	"net/http"
	"fmt"
)

func HandleRoute(w http.ResponseWriter, request *http.Request){
	// Fprint recibe un responsewritter
	fmt.Fprintf(w, "Hello")
}


func HandleHome(w http.ResponseWriter, request *http.Request){
	// Fprint recibe un responsewritter
	fmt.Fprintf(w, "HOme")
}