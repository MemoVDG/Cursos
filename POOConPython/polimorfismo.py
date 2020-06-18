class Persona:

  def __init__(self, nombre):
    self.nombre = nombre

  
  def avanzar(self):
    print('Ando caminando')

class Ciclista(Persona):

  def __init__(self, nombre):
    super().__init__(nombre)
  

  # Si queremos hacer un overwrite de una funcion
  # solo cramos una funcion con el mismo nombre
  def avanzar(self):
    print('Moviendome en bicicleta')

def main():
  persona = Persona('Mikel')
  persona.avanzar()

  ciclista = Ciclista('Toño')
  ciclista.avanzar()

if __name__ == '__main__':
  main()