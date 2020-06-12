class Lavadora:
  def __init__(self):
    pass

  def lavar(self, temperatura='caliente'):
    self._llenar_tanque_de_agua(temperatura)
    self._anadir_jabon()
    # Como inicia con _ es diferente de lavar
    self._lavar()
    self._centrifugar()

  def _llenar_tanque_de_agua(self, temperatura):
    print(f'Llenando el tanque en con agua{temperatura}')

  def _anadir_jabon(self):
    print('Anadiendo jabon')

  def _lavar(self):
    print('Lavando ropa')

  def _centrifugar(self):
    print('Centrifugando')


if __name__ == '__main__':
  lavador = Lavadora()
  lavador.lavar()