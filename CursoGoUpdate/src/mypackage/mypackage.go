package mypackage

import "fmt"

type car struct {
	brand string
	year  int
}

// CarPublic Car con accesso publico
type CarPublic struct {
	Brand string
	Year  int
}

type carPrivate struct {
	brand string
	year  string
}

func PrintMessage() {
	fmt.Println("Wholi")
}

func printMessage() {
	fmt.Println("Wholi")
}
