package main

import (
	"fmt"
)

type perro struct{

}

type pez struct{
	
}

type pajaro struct{
	
}

func (perro) caminar() string{
	return "Soy un perro y camino"
}

func (pez) nada() string{
	return "Soy un pez y nado"
}

func (pajaro) vuela() string{
	return "Soy un pajaro y vuelo"
}


func moverPerro(p perro){
	fmt.Println(p.caminar())
}

func moverPez(p pez){
	fmt.Println(p.nada())
}

func moverPajaro(p pajaro){
	fmt.Println(p.vuela())
}
func main(){

	p := perro{}
	moverPerro(p)
	pe := pez{}
	moverPez(pe)
	pa := pajaro{}
	moverPajaro(pa)
}