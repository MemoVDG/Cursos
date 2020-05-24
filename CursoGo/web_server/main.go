package main

// Abrimos una conexion del servidor
func main(){
	server := NewServer(":3000")
	server.Handle("/",server.AddMiddleware(HandleRoute, Logging()))
	// Agregamos el middleware
	server.Handle("/api", server.AddMiddleware(HandleHome, CheckAuth(), Logging()))
	server.Listen()
}