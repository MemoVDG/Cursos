Vue.component('modal', {
	props: ['text', 'showModal'],
	data() {
		return {};
	},
	methods: {
		closeModal() {
			this.$emit('close-modal');
		},
	},
	template: `
    <div :class="showModal ? 'displayModal' : 'hideModal'" class="container modal">
			<div class="modalHeader">
				<h1 v-on:click="closeModal">Close X </h1>
			</div>
			<slot name="message"></slot>
      <img src="https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Smiling_large.png?v=1571606089">
    </div>
  `,
});

new Vue({
	el: '#app',
	data() {
		return {
			showModal: false,
		};
	},

	methods: {
		openModal() {
			this.showModal = !this.showModal;
		},
	},
});
