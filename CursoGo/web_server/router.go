package main

import (
	"net/http"
)

type Router struct{
	rules map[string]http.HandlerFunc
}

func NewRouter() *Router{
	return &Router{
		rules: make(map[string]http.HandlerFunc),
	}
}

func (r *Router) FindHandler(path string) (http.HandlerFunc, bool) {
	handler, exist := r.rules[path]

	return handler, exist
}

/* 
	Necesitamos implementar la clase ServerHTTP que es donde devolveremos el resultado
	de la peticion, 
*/
func (r *Router) ServeHTTP(w  http.ResponseWriter, request *http.Request) {
	// El http.ResponseWriter sirve para responderle a los clientes
	// http.Request contiene el body del request

	// Extraemos el path de request para saber cual es la ruta que se esta bucando
	handler, exist := r.FindHandler(request.URL.Path)

	if !exist {
		// Retornamos que no existe
		w.WriteHeader(http.StatusNotFound)
		return 
	}

	handler(w, request)
}