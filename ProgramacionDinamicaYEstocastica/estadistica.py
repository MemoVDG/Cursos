import random
import math

# Promedio de los valores
def media(x):
    return sum(x) / len(x)

# Varianza que tan disperso son los valores
def varianza(x):
    mu = media(x)

    acumulador = 0
    for i in x:
        acumulador += (i - mu)**2
    
    return acumulador / len(x)

# Desviacion estandar, raiz cuadrada de la varianza
def desviacion_estandar(x):
    return math.sqrt(varianza(x))


# Mientras la destribucion normal es mas pequeña, la 
# variabilidad de los datos es menor



if __name__ == '__main__':
    x = [random.randint(1, 21) for i in range(20)]
    mu = media(x)   
    varian = varianza(x)
    sigma = desviacion_estandar(x)

    print(f'Arreglo X {x}')
    print(f'Media = {mu}')
    print(f'Varianza = {varian}')
    print(f'Desviacion estandar = {sigma}')