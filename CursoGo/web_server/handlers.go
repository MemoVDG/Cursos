package main
import (
	"encoding/json"
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

func PostRequest(w http.ResponseWriter, request *http.Request){
	// Tenemos que decodificar los datos del body y obetner la metadata
	decoder := json.NewDecoder(request.Body)
	var metadata MetaData
	err := decoder.Decode(&metadata)

	// Verificamos si hubo un error en la decodificacion
	if err != nil {
		fmt.Fprint(w, "error: %v", err)
		return
	}

	fmt.Fprint(w, "Payload: %v\n", metadata )
}


func UserPostRequest(w http.ResponseWriter, request *http.Request){
	// Tenemos que decodificar los datos del body y obetner la metadata
	decoder := json.NewDecoder(request.Body)
	var user User
	err := decoder.Decode(&user)

	// Verificamos si hubo un error en la decodificacion
	if err != nil {
		fmt.Fprint(w, "error: %v", err)
		return
	}

	// Sino se pudo parsear a JSON
	response , err := user.ToJson()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(response)

}