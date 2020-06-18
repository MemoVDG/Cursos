class CasillaDeVotacion:

  def __init__(self, identificador, pais):
    self._identificador = identificador
    self._pais = pais
    self._region = None

  # Definimos el getter de region con decoradores
  @property
  def region(self):
    return self._region

  # Definimos el setter de region con decoradores
  @region.setter
  def set_region(self, region):
    if region in self._pais:
      self._region = region

    raise ValueError(f'La ragion {region} no es valida en {self._pais}')


