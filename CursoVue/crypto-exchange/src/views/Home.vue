<template>
	<div>
		<bounce-loader :loading="isLoading" :size="100" :color="'#68d391'" />
		<px-assets-table v-if="!isLoading" :assets="assets"></px-assets-table>
	</div>
</template>

<script>
import PxAssetsTable from '@/components/PxAssetsTable';
import api from '@/api';

export default {
	name: 'Home',
	components: {
		PxAssetsTable,
	},

	data() {
		return {
			isLoading: false,
			assets: [],
		};
	},

	created() {
		this.isLoading = true;
		api
			.getAssets()
			.then((assets) => (this.assets = assets))
			.finally(() => (this.isLoading = false));
	},
};
</script>
