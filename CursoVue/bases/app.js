new Vue({
	el: '#app',

	data() {
		return {
			name: 'Bitcoin',
			symbol: 'BTC',
			value: 0,
			img:
				'https://lh3.googleusercontent.com/proxy/jPPDC1NNi2Is8xj2NwpHCKKuCr9spfV-nkxDN1nnqtRptzFUgU8Huyoau3uEf8RaMKAc-rUYWvE7iufbd_lLBjXKF5syulMzfMfm0Eb4fTwZHc9Svk3-AM6Gitm8',
			changePercent: 10,
			prices: [50, 865, 312, 897, 4, 96, 2143, 785],
			pricesWithDays: [
				{ day: 'Lunes', value: 8400 },
				{ day: 'Martes', value: 7900 },
				{ day: 'Miercoles', value: 8200 },
				{ day: 'Jueves', value: 9000 },
				{ day: 'Viernes', value: 9400 },
				{ day: 'Sabado', value: 10000 },
				{ day: 'Domingo', value: 10200 },
			],
			showPrices: false,
			price: 8400,
			color: 'A4D4F4',
		};
	},

	// Funciones que cambian valores dependiendo de otro valor
	// es decir si cambia name o symbole el metodo se va a activar
	computed: {
		// Siempre regresan algo
		title() {
			return `${this.name} - ${this.symbol}`;
		},
		convertedValue() {
			if (!this.value) {
				return 0;
			}

			return this.value / this.price;
		},
	},

	// Watcher son funciones que ejecutan un codigo
	// Es decir que a partir del cambio de una variable se ejecuta una funcion
	watch: {
		// Se definen con el nombre de la variable que se va observar
		showPrices(newValue, oldValue) {
			// Recibe el viejo y el nuevo valor
			console.log(newValue, oldValue);
		},
	},
	methods: {
		toggleShowPrices() {
			this.showPrices = !this.showPrices;

			this.color = this.color.split('').reverse().join('');
		},
	},
});
