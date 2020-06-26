from borracho import BorrachoTradicional
from campo import Campo
from coordenadas import Coordenada
from bokeh.plotting import figure, show

def caminata(campo, borracho, pasos):
  inicio = campo.obtener_coordenada(borracho)

  for _ in range(pasos):
    campo.mover_borracho(borracho)
  
  return inicio.distancia(campo.obtener_coordenada)

def simular_caminata(pasos, numero_de_intentos, tipo_de_borracho ):
  borracho = tipo_de_borracho(nombre='Mikel')
  origen = Coordenada(0 , 0)
  distancia = []

  for _ in range(numero_de_intentos):
    campo = Campo()
    campo.anadir_borracho(borracho, origen)
    simular_caminata = caminata(campo, borracho, pasos)
    distancia.append(round(simular_caminata, 1))

  return distancia


def main(distancias_de_caminata, numero_de_intentos, tipo_de_borracho):
  distancias_media_por_caminata = []

  for pasos in distancias_de_caminata:
    distancias = simular_caminata(pasos, numero_de_intentos, tipo_de_borracho)
    distancia_media = round(sum(distancias)/ len(distancias), 4)
    distancia_maxima = max(distancias)
    distancia_minima = min(distancias)
    distancias_media_por_caminata.append(distancia_media)
    print(f'{tipo_de_borracho.__name__} caminata aleatoria {pasos} pasos')
    print(f'Media = {distancia_media}')
    print(f'Maxima = {distancia_maxima}')
    print(f'Minima = {distancia_minima}')

  graficar(distancias_de_caminata,distancias_media_por_caminata)
  
def graficar(x, y):
  grafica = figure(title='Camino aleatorio', x_axis_label='pasos', y_axis_label='distancia')
  grafica.lineal(x, y, legend='Distancia media')

  show(grafica)



if __name__ == "__main__":
    distancias_de_caminata = [10, 100, 1000, 10000]
    numero_de_intentos = 100

    main(distancias_de_caminata, numero_de_intentos, BorrachoTradicional)