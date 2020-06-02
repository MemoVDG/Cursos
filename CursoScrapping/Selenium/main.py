import requests
from bs4 import BeautifulSoup
from selenium import webdriver
import time


# Abrir navegador
options = webdriver.ChromeOptions()
options.add_argument('--incognito')
driver = webdriver.Chrome(executable_path="./drivers/chromedriver.exe", options=options)
driver.get('https://aeromexico.com/es-mx/reserva/opciones?itinerary=MEX_JFK_2020-12-03.JFK_MEX_2020-12-31&leg=1&travelers=A1_C0_I0_PH0_PC0')

time.sleep(7)

# Obtener vuelos
# // -> indica que se va a buscar en todo el arbol de la pagina
vuelos = driver.find_elements_by_xpath('//button[@class="FlightOptionsFlightInfo-btnWrapper"]')
vuelo = vuelos[0]

# Del primer vuelo obtenemos hora salida y hora llegada
# . -> Indica que solo se va a buscar en esa seccion para abajo
time = vuelo.find_elements_by_xpath('.//div[@class="FlightOptionsTimeline-time"]')
departure_time = time[0].text
arrive_time = time[1].text

# Obtenemos la duracion del vuelo
duration_time = vuelo.find_elements_by_xpath('.//p[@class="FlightOptionsFlightInfoSummary-summary"]/span')
estimate_time = duration_time[1].text

print(f'Salida {departure_time}, Llegada {arrive_time}, tiempo de vuelo {estimate_time} ')


btn_details = vuelo.find_element_by_xpath('.//span[contains(text(), "Detalles")]').click()

