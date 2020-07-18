Vue.component('CoinDetail', {
	data() {
		return {
			value: 0,
			showPrices: false,
		};
	},
	props: ['coin'],
	methods: {
		toggleShowPrices() {
			this.showPrices = !this.showPrices;
			// Se le pueden pasar parametros
			this.$emit('change-color', this.showPrices ? 'FCFAFC' : 'AFFCAD');
		},
		// Emitimos evento para modificar propiedad en el padre
	},
	// Funciones que cambian valores dependiendo de otro valor
	// es decir si cambia name o symbole el metodo se va a activar
	computed: {
		// Siempre regresan algo
		title() {
			return `${this.coin.name} - ${this.coin.symbol}`;
		},
		convertedValue() {
			if (!this.value) {
				return 0;
			}
			return this.value / this.coin.price;
		},
	},

	template: `
	<div>
		<img v-on:mouseover="toggleShowPrices" v-on:mouseout="toggleShowPrices" :src="coin.img" :alt="coin.name" />
		
		<h1 :class="coin.changePercent > 0 ? 'green' : 'red' ">
				<!-- Propiedad computada -->
				{{ title }}

				<!-- 
          V-show usa el css style:display y
          V-if remueve el elemento del DOM
        -->
				<span v-if="coin.changePercent > 10">Mayor</span>
				<span v-else>
					Menor
				</span>
		</h1>

		<input type="number" v-model="value" />
		<span>{{ convertedValue }}</span>
		<br>
		<br>
		<span v-on:click="toggleShowPrices"> {{showPrices ? 'Esconder precios 🙈  ' : 'Ver Precios 🐵 '}}</span>
		<ul v-show="showPrices">
			<li
				class="uppercase"
				v-for="(p, i) in coin.pricesWithDays"
				:class="{ orange: p.value == coin.price, red: p.value < coin.price, green: p.value > coin.price}"
			>
					{{ i }} - {{p.value}} - {{p.day}}
			</li>
		</ul>
				
	</div>
	`,
});

new Vue({
	el: '#app',

	data() {
		return {
			btc: {
				name: 'Bitcoin',
				symbol: 'BTC',
				img: 'https://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png',
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
				price: 8400,
			},
			color: 'A4D4F4',
		};
	},
	methods: {
		// Este evento es activado por el component hijo
		updateColor(color) {
			this.color = color || this.color.split('').reverse().join('');
		},
	},
});
