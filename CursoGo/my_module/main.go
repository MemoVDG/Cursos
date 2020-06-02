package main 

import "github.com/Memo28/mycalculator"

func main(){
	entrada := mycalculator.LeerEntrada()
	operador := mycalculator.LeerEntrada()
	c := mycalculator.Calc{}
	fmt.Println(c.Operate(entrada, operador))
}