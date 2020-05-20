package main
import (
	"strconv"
	"strings"
	"bufio"
	"fmt"
	"os"
)

type calc struct{

}

// Le decimos que la funcion operate es parte del struct calc
func (calc) operate(entrada string, operador string) int {
		entradaLimpia := strings.Split(entrada, operador)
		operador1 := parsear(entradaLimpia[0])
		operador2 := parsear(entradaLimpia[1])
		switch operador{
		case "+":
			fmt.Println(operador1 + operador2)
			return operador1 + operador2
		case "-":
			fmt.Println(operador1 - operador2)
			return operador1 - operador2
		case "*":
			fmt.Println(operador1 * operador2)
			return operador1 * operador2
		case "/":
			fmt.Println(operador1 / operador2)
			return operador1 / operador2
		default:
			fmt.Println(operador, " no esta soportado")
			return 0
	}
}

func parsear(entrada string) int {
	// Casteamos a int los valores y sumamos
	// Atoi regresa un string y un error
	operador, _ := strconv.Atoi(entrada)
	return operador
}

func leerEntrada() string{
	// Leemos la entrada de consola
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	return scanner.Text()
} 

func main()  {

	entrada := leerEntrada()
	operador := leerEntrada()


	c := calc{}
	fmt.Println(c.operate(entrada, operador))
}