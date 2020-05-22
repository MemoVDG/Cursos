package main

import (
	"fmt"
)

type taskList struct{
	tasks []*task 
}

func (t *taskList) agregarAList(tl *task){
	t.tasks = append(t.tasks, tl)
}

func (t *taskList) eliminarDeList(index int){
	t.tasks = append(t.tasks[:index], t.tasks[index + 1:]...)
}

func (t *taskList) imprimirLista(){
	for _, tarea := range t.tasks {
		fmt.Println("Nombre", tarea.nombre)
		fmt.Println("Descripcion", tarea.descripcion)
	}
}

func (t *taskList) listaCompletados(){
	for _, tarea := range t.tasks {
		if tarea.completado == true {
			fmt.Println("Nombre", tarea.nombre)
			fmt.Println("Descripcion", tarea.descripcion)
		}
	}
}

type task struct{
	nombre string
	descripcion string
	completado bool
}

func (t *task) marcarCompleta(){
	t.completado = true
}

func (t *task) actualizarDescripcion(descripcion string){
	t.descripcion = descripcion
}

func (t *task) actualizarNombre(nombre string){
	t.nombre = nombre
}

func main(){
	t := &task{
		nombre: "Completar curso de Go",
		descripcion : "Completar el curso esta semana",
		completado: false,
	}

	t1 := &task{
		nombre: "Completar curso de Python",
		descripcion : "Completar el curso esta semana",
		completado: false,
	}

	t2 := &task{
		nombre: "Completar curso de Node",
		descripcion : "Completar el curso esta semana",
		completado: false,
	}

	// Imprime con formato
	fmt.Printf("%+v\n", t)
	t.marcarCompleta();
	t.actualizarNombre("Finalizar curso")
	t.actualizarDescripcion("Finalizar cuirsp pronto")
	fmt.Printf("%+v\n", t)

	lista := &taskList{
		tasks: []*task{
			t1, t2,
		},
	}

	fmt.Println(lista.tasks[0])
	lista.agregarAList(t)
	fmt.Println(len(lista.tasks))
	lista.eliminarDeList(1)
	fmt.Println(len(lista.tasks))

	for i:= 0; i < len(lista.tasks) ; i++ {
		fmt.Println("Index", i ,"nombre", lista.tasks[i].nombre)
	}

	for index, tarea := range lista.tasks {
		fmt.Println("Index", index, "nombre", tarea.nombre)
	}

	for i:= 0; i < 10 ; i++{
		fmt.Println(i)
		if i == 5 {
			break
		}
	}

		for i:= 0; i < 10 ; i++{
		fmt.Println(i)
		if i == 5 {
			continue 
			fmt.Println("Cinco")
		}
	}

	fmt.Println("--------------")

	lista.imprimirLista()

	lista.tasks[1].marcarCompleta()

	fmt.Println("--------------")
	lista.listaCompletados()


	mapaTareas := make(map[string]*taskList)

	mapaTareas["Nestor"] = lista


	t4 := &task{
		nombre: "Completar curso de React",
		descripcion : "Completar el curso esta semana",
		completado: false,
	}

	t5 := &task{
		nombre: "Completar curso de HTML",
		descripcion : "Completar el curso esta semana",
		completado: false,
	}

	lista2 := &taskList{
		tasks: []*task{
			t4, t5,
		},
	}

	mapaTareas["Ricardo"] = lista2

	fmt.Println("----Tareas Nestor----")
	mapaTareas["Nestor"].imprimirLista()

	fmt.Println("----Tareas Ricardo----")
	mapaTareas["Ricardo"].imprimirLista()
}