import requests
from bs4 import BeautifulSoup
from selenium import webdriver
import time

# Impors para demoras dinamicas
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException



def obtener_tiempos(vuelo):
    # Del cada vuelo obtenemos hora salida y hora llegada
    # . -> Indica que solo se va a buscar en esa seccion para abajo
    flight_time = vuelo.find_element_by_xpath('.//td')
    print("FLight time", flight_time)



def obtener_info(driver):
    # Obtener vuelos
    # // -> indica que se va a buscar en todo el arbol de la pagina
    vuelos = driver.find_elements_by_xpath('//tr[@class="FlightOptionsGrid--TRANSBORDER"]')
    print(f'Se encontraron {len(vuelos)} vuelos')
    print('Iniciando Scapping')
    vuelo = vuelos[0]

    fasd = vuelo.find_element_by_xpath('.//button[@class="FlightOptionsFlightInfo-btnWrapper"]')
    print(fasd)

    return vuelos

    

# Abrir navegador
options = webdriver.ChromeOptions()
options.add_argument('--headless')
options.add_argument('--profile-directory=Default') 
driver = webdriver.Chrome(executable_path="./drivers/chromedriver.exe", options=options)
driver.get('https://aeromexico.com/es-mx/reserva/opciones?itinerary=MEX_JFK_2020-12-03.JFK_MEX_2020-12-31&leg=1&travelers=A1_C0_I0_PH0_PC0')

delay = 10

try:
    # Demora dinamica
    # Le pasamos el elemento que queremos obtener y espereamos hasta que lo encuentre
    vuelos = WebDriverWait(driver, delay).until(EC.presence_of_element_located((By.XPATH, '//tr[@class="FlightOptionsGrid--TRANSBORDER"]')))
    print('La pagina termino de cargar')
    info_vuelos = obtener_info(driver)
except TimeoutException:
    print('La pagina tardo demasiado en cargar')

driver.close()

