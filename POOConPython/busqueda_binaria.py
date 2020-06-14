import random

# Recibe la lista y recibe en donde empieza y donde termina
def busqueda_binaria(lista, comienzo, final, objetivo):
  print(f'Buscando {objetivo} entre {lista[comienzo]} y {lista[final-1]}')
  if comienzo > final:
    return False

  medio = (comienzo + final) // 2

  if lista[medio] == objetivo:
    return True
  elif lista[medio] < objetivo:
    return busqueda_binaria(lista, medio + 1, final, objetivo)
  else:
    return busqueda_binaria(lista, comienzo, medio - 1, objetivo)


if __name__ == '__main__':
  tamano_de_lista = int(input('De que tamaño sera tu lista?'))
  objetivo = int(input('Que numero quieres encontrar?'))

  # Busqueda binaria asume que la lista esta ordenada
  lista = sorted([random.randint(0, 100) for i in range(tamano_de_lista)])

  encontrado = busqueda_binaria(lista, 0, len(lista), objetivo)
  print(lista) 
  print(encontrado)
  print(f'El elemento {objetivo} {"esta" if encontrado else "no esta"} en la lista')