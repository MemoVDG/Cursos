package test

import (
	"context"
	"fmt"
	"reflect"
	"testing"
)

// go test ./test/... -cover nos dice que tan cubierto esta codigo en cuanto a testing
type mockRepo struct {
	update     func(ctx context.Context, t Task) (*Task, error)
	toggleTask func(ctx context.Context, id int, done bool) (*Task, error)
	delete     func(ctx context.Context, id int) error
	create     func(ctx context.Context, task Task) (*Task, error)
}

func (m mockRepo) Update(ctx context.Context, t Task) (*Task, error) {
	return m.update(ctx, t)
}

func (m mockRepo) ToggleTask(ctx context.Context, id int, done bool) (*Task, error) {
	return m.toggleTask(ctx, id, done)
}

func (m mockRepo) Delete(ctx context.Context, id int) error {
	return m.delete(ctx, id)
}

func (m mockRepo) Create(ctx context.Context, task Task) (*Task, error) {
	return m.create(ctx, task)
}

func TestCreateTask(t *testing.T) {
	type fields struct {
		repo Repository
	}
	type args struct {
		ctx         context.Context
		title       string
		description string
	}

	type expect struct {
		want *Task
		err  error
	}

	tests := []struct {
		fields fields
		name   string
		args   args
		expect expect
	}{
		{
			name: "Empty title",
			args: args{
				ctx:         context.TODO(),
				title:       "",
				description: "description",
			},
			expect: expect{
				err:  fmt.Errorf("title can not be empty"),
				want: nil,
			},
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {

			useCase := NewTaskUseCase(tt.fields.repo)
			got, err := useCase.CreateTask(tt.args.ctx, tt.args.title, tt.args.description)
			if err != nil && tt.expect.err != nil {
				t.Fatalf("Unexpected error [%v] expected [%v]", got, tt.expect.err)
			}

			// Reflect sirve para comparar valores y tipos
			if !reflect.DeepEqual(got, tt.expect.want) {
				t.Fatalf("Unexpected error [%v] expected [%v]", got, tt.expect.want)
			}
		})
	}
}
