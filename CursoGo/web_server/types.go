package main
import (
	"net/http" 	
	"encoding/json"
)

type Middleware func(http.HandlerFunc) http.HandlerFunc

type User struct{
	// Le decimos que cuando sea codificado en JSON tenga ese nombre
	Name string `json:"name"`
	Email string `json:"email"`
	Phone string `json:"phone"`
}

type MetaData interface{}

func (u *User) ToJson() ([]byte, error) {
	return json.Marshal(u)
}