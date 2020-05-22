package main

import (
	"net/http"
	"fmt"
	"io"
)

type escritorWeb struct{
	
}

func (escritorWeb) Write(p []byte) (int, error){
	fmt.Println(string(p))
	return len(p), nil
}

func main(){
	respuesta, err := http.Get("https://platzi.com/clases/1846-programacion-golang/26764-imprimiendo-el-contenido-de-una-pagina-web-usando-/")
	if err != nil {
		fmt.Println(err)
	}
	e := escritorWeb{}
	io.Copy(e, respuesta.Body)
}