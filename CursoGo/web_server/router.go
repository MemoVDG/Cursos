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
		rules: make(map[string]http.HandlerFunc),
	}
}

// Regresamos dos valores booleanos indicando el primero que existe la ruta y el segundo indica si existe el verbo
func (r *Router) FindHandler(path string, method string) (bool http.HandlerFunc, bool http.HandlerFunc) {
	// Verificamos que existe la url y el verbo o metodo
	_, exist := r.rules[path]
	handler, methodExist := r.rule[path][method]

	return handler, methodExist, exist
}

/*
	Necesitamos implementar la clase ServerHTTP que es donde devolveremos el resultado
	de la peticion,
*/
func (r *Router) ServeHTTP(w http.ResponseWriter, request *http.Request) {
	// El http.ResponseWriter sirve para responderle a los clientes
	// http.Request contiene el body del request

	// Extraemos el path de request para saber cual es la ruta que se esta bucando
	handler, methodExist, exist := r.FindHandler(request.URL.Path, request.Method)

	if !exist {
		// Retornamos que no existe
		w.WriteHeader(http.StatusNotFound)
		return
	}

	if !methodExist {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}

	handler(w, request)
}
