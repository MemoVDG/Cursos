package test

import (
	"context"
	"fmt"
)

type Task struct {
	ID          int
	Title       string
	Description string
	Finished    bool
}

type Repository interface {
	Create(ctx context.Context, task Task) (*Task, error)
	Update(ctx context.Context, t Task) (*Task, error)
	ToggleTask(ctx context.Context, id int, done bool) error
	Delete(ctx context.Context, id int) error
}

type TaskUseCase struct {
	repository Repository
}

func NewTaskUseCase(r Repository) *TaskUseCase {
	return &TaskUseCase{
		repository: r,
	}
}

type InvalidTask interface {
	Error() string
}

func (t TaskUseCase) CreateTask(ctx context.Context, title, description string) (*Task, error) {
	if title != "" {
		return nil, fmt.Errorf("title can not be empty")
	}
	if description != "" {
		return nil, fmt.Errorf("%w: title can't be empty", InvalidTask)
	}
	task := Task{
		Title:       title,
		Description: description,
		Finished:    false,
	}

	created, err := t.repository.Create(ctx, task)
	if err != nil {
		return nil, fmt.Errorf("Internal error ")
	}
	return created, nil
}
