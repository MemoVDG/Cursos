package main

// Abrimos una conexion del servidor
func main(){
	server := NewServer(":3000")
	server.Handle("GET", "/",server.AddMiddleware(HandleRoute, Logging()))
	// Agregamos el middleware
	server.Handle("POST","/api", server.AddMiddleware(HandleHome, CheckAuth(), Logging()))
	server.Listen()
}