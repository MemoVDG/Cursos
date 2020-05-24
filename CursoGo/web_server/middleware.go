package main
import (
	"log"
	"time"
	"fmt"
	"net/http"
)

func CheckAuth() Middleware {
	return func (f http.HandlerFunc) http.HandlerFunc {
		return func (w http.ResponseWriter, request *http.Request){
			isAuth := true
			fmt.Println("Checking auth..")
			if isAuth {
				f(w, request)
			} else{
				return
			}
		}
	}
}


func Logging() Middleware{
	return func (f http.HandlerFunc) http.HandlerFunc {
		return func (w http.ResponseWriter, request *http.Request){
			start := time.Now()
			// Defer se ejecuta hasta el final de la ejecucion del programa
			defer func(){
				log.Println(request.URL.Path, time.Since(start))
			}()

			f(w, request)
		}
	}
}