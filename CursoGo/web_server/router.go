package main

import (
	"net/http"
)

type Router struct {
	// Creamos un mapa de mapas en donde vendra el tipo de call y la ruta
	// ejemplo "POST" de "api"
	rules map[string]map[string]http.HandlerFunc
}

func NewRouter() *Router {
	return &Router{
		rules: make(map[string]map[string]http.HandlerFunc),
	}
}

// Recibimos la url y el metodo (POST, PUT, GET, DELETE)
func (r *Router) FindHandler(path string, method string) (http.HandlerFunc, bool, bool) {

	// Primero verificamos que existe la url
	_, exist := r.rules[path]

	/*
		Despues verificamos si existe la UTL para ese METODO,
		Por ejemplo que exista un /api con un metodo POST
	*/

	handler, methodExist := r.rules[path][method]

	// Devolvemos si tiene un handler, si el metodo existe y si la ruta existe
	return handler, methodExist, exist
}

/*
	Necesitamos implementar la clase ServerHTTP que es donde devolveremos el resultado
	de la peticion,
*/
func (r *Router) ServeHTTP(w http.ResponseWriter, request *http.Request) {
	// El http.ResponseWriter sirve para responderle a los clientes
	// http.Request contiene el body del request

	// Extraemos el PATH y el METHOD de request para saber cual es la ruta que se esta bucando
	handler, methodExist, exist := r.FindHandler(request.URL.Path, request.Method)

	// Verifiucamos si el path exsite
	if !exist {
		// Retornamos que no existe
		w.WriteHeader(http.StatusNotFound)
		return
	}

	if !methodExist {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}

	// Verificamos si el Metodo existe
	if !methodExist {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}

	handler(w, request)
}
