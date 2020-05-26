/* 
	Al importar el main, decimos que el main.go va a poder accesar a 
	todos los metodos el archivo server.go
*/
package main

import (
	"net/http"
)

type Server struct{
	port string
	router *Router
}


func NewServer(port string) *Server{
	return &Server{
		port: port,
		router: NewRouter(),
	}
}

// Listener del servidor y regresa error en caso de que no se pueda conectar
func (s *Server) Listen() error{
	/*
		Ponemos a escuchar el server en el puerto y el segundo parametro es
		el manejador de rutas
	*/
	http.Handle("/", s.router)

	error := http.ListenAndServe(s.port, nil)
	
	if error != nil{
		return error
	}

	return nil

}


// Manejador de las rutas
func (s *Server) Handle(method string, path string, handler http.HandlerFunc){
	// Rules es el map de los PATHS y METHODS con la funcion que le corresponde a esa ruta
	// Se tiene que inicializar el mapa
	_, exist := s.router.rules[path]
	if !exist{
		s.router.rules[path] = make(map[string]http.HandlerFunc)
	}
	s.router.rules[path][method] = handler
}

/* 
	Los 3 "..." indican que no se sabe cuantos elementos de tipo middleware
	van a llegar a la funcion
*/
func (s *Server) AddMiddleware(f http.HandlerFunc, middlewares ...Middleware) http.HandlerFunc{
	for _, mid := range middlewares{
		// Vamos llamando a cada middleware
		f = mid(f)
	}

	return f
}