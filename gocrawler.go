package main

import (
	"fmt"

	"github.com/gocolly/colly"
)

func main() {
	// Create a collector
	//m := colly.NewCollector()

	// Set HTML callback
	// Won't be called if error occurs
	/*m.OnHTML("span.price-tag-fraction", func(e *colly.HTMLElement) {
		fmt.Println(e.Text)
	})*/

	// Set error handler
	/*m.OnError(func(r *colly.Response, err error) {
		fmt.Println("Request URL:", r.Request.URL, "failed with response:", r, "\nError:", err)
	})*/

	// Start scraping
	/*m.Visit("https://articulo.mercadolibre.com.mx/MLM-762971432-bateria-cocina-38-piezas-ollas-cuchillos-sartenes-tramontina-_JM")
	m.Visit("https://articulo.mercadolibre.com.mx/MLM-739140865-4-pack-cepillo-dental-biodegradable-bamboo-carbon-activado-_JM")
	m.Visit("https://articulo.mercadolibre.com.mx/MLM-764499445-bafle-amplificado-8-ksr-con-5000w-pmpo-recargable-bluetooth-_JM?quantity=1&variation=52704204450")
	m.Visit("https://articulo.mercadolibre.com.ar/MLA-816846568-tablet-convertible-2en1-exo-wings-tw7-2g-ssd-64g-101-w10-_JM")
	m.Visit("https://articulo.mercadolibre.com.mx/MLM-623001936-pantalon-levis-hombre-511-slim-fit-azul-04511-2365-_JM")*/


	// Create a collector
	m := colly.NewCollector()

	// Set HTML callback
	// Won't be called if error occurs
	m.OnHTML("lp", func(e *colly.HTMLElement) {
		fmt.Println(e)
	})
	
		// Set error handler
	m.OnError(func(r *colly.Response, err error) {
		fmt.Println("Request URL:", r.Request.URL, "failed with response:", r, "\nError:", err)
	})
	
	m.Visit("https://www.liverpool.com.mx/tienda/pdp/pantalla-samsung-4k-uhd-de-55-pulgadas,-modelo-un55tu8000fxzx/1094820843")

}