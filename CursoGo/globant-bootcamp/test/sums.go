package test

import "fmt"

func Sum(a, b uint) (int, error) {
	if a > 9 {
		return 0, fmt.Errorf("Only digits are allowed")
	}

	if b > 9 {
		return 0, fmt.Errorf("Only digits are allowed")
	}

	return int(a + b), nil
}
