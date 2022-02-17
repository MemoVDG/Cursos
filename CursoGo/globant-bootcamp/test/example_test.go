package test

import (
	"testing"
)

// El hecho de que el archivo termine con _test.go le dice al compilador de go que sera para testing

func TestSum(t *testing.T) {
	got, err := Sum(1, 2)
	if err != nil {
		t.Fatal("unexpected error result", err)
	}

	if got != 3 {
		t.Fatalf("Unexpected result, expecting [%v] got [%v]", 3, got)
	}
}

func TestSumWithFail(t *testing.T) {
	got, err := Sum(10, 2)

	if err == nil {
		t.Fatal("Unexpecte error result", err)
	}
	if got != 0 {
		t.Fatalf("Expecting 0, received [%v]", got)
	}
}

// Table test, pruebas que se ejecutan en paralelo

func TestSum3(t *testing.T) {
	type args struct {
		a uint
		b uint
	}

	tests := []struct {
		name      string
		args      args
		want      int
		wantError bool
	}{
		{
			name: "Fail: Invalid value for a",
			args: args{
				a: 10,
				b: 1,
			},
			want:      0,
			wantError: true,
		},
		{
			name: "Fail: Invalid value for b",
			args: args{
				a: 1,
				b: 10,
			},
			want:      0,
			wantError: true,
		},
	}

	for _, tt := range tests {
		tt := tt
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()
			got, err := Sum(tt.args.a, tt.args.b)
			if (err != nil) != tt.wantError {
				t.Errorf("sum() error %v want %v", err, tt.wantError)
				return
			}
			if got != tt.want {
				t.Errorf("sum() got = %v, want %v", got, tt.want)
			}
		})
	}
}

func BenchmarkSum(b *testing.B) {
	// N esta definido por el sistema operativo
	// Para ejecutar las pruebas es go test -bench=. ./test/...
	for i := 0; i < b.N; i++ {
		Sum(1, 8)
	}
}
