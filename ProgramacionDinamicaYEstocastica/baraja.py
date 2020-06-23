import random
import collections
# Simulaciones de montecarlo nos permite simular para
# predecir el resultado de un problema

PALOS = ['espada', 'corazon', 'rombo', 'trebol']
VALORES = ['as', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jota', 'reina', 'rey']

def crear_baraja():
    barajas = []
    for palo in PALOS:
        for valor in VALORES:
            barajas.append((palo, valor))

    return barajas

def obtener_mano(barajas, tamano_mano):
    # Obtiene de lo que se le pase un ejemplo random del tamaño 
    # especificado sin repeticion
    mano = random.sample(barajas, tamano_mano)

    return mano

def probabilidad_pares(manos):
    pares = 0
    for mano in manos:
        valores = []
        for carta in mano:
            valores.append(carta[1])
        
        counter = dict(collections.Counter(valores))
        for val in counter.values():
            if val == 2:
                pares +=1
                break

        probabilidad_par = pares / intentos
    print(f'La probabilidad de obtener un par en una mano de {tamano_mano} baraja es {probabilidad_par}')


def main(tamano_mano, intentos):
    barajas = crear_baraja()

    manos = []

    for _ in range(intentos):
        mano = obtener_mano(barajas, tamano_mano)
        manos.append(mano)
    
    probabilidad_pares(manos)
    





if __name__ == "__main__":
    tamano_mano = int(input('De cuantas barajas sera la mano?: '))
    intentos = int(input('Veces a correr la simulacion: '))

    main(tamano_mano, intentos)