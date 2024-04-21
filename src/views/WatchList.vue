<script setup>
import { ref, reactive, onMounted } from 'vue';
// data from https://api.binance.com/api/v3/ticker/24hr
const asset = ref('USDT');
let watchList = ref({});
async function getTickersData() {
	const uri = 'https://api.binance.com/api/v3/ticker/24hr';
	try {
		const response = await fetch(uri);
		const data = await response.json();
		// filter data to quoteAsset USDT and empty values
		const filterAsset = data.filter((item) => item.symbol.endsWith(asset.value));
		const filterZero = filterAsset.filter((item) => {
			return item.count != 0;
		});
		const filterOut = filterZero.filter((item) => !item.symbol.includes("DOWN" && "UP" && "BEAR" && "BULL"));
		// sort object of data a-b-c
		function sortArray(x, y) {
			return x.symbol.localeCompare(y.symbol);
		}
		let sortedAbc = filterOut.sort(sortArray);
		// object destructuring for symbol, price, volume
		watchList.value = sortedAbc.map(({ symbol, lastPrice, quoteVolume }) => {
			return { symbol, lastPrice, quoteVolume };
		});
	} catch (error) {
		console.log(error);
	}
}
onMounted(() => {
	getTickersData();
});
console.log(watchList);
</script>

<template>
	<div>
		<div>
			<div v-for="ticker in watchList" :key="ticker.symbol">
				<div>
					<RouterLink :to="{name: 'Chart', params: {id: ticker.symbol}}">
						<div>
							<div>{{ ticker.symbol }}</div>
							<div>{{ ticker.lastPrice * 1 }}</div>
							<div>{{ ticker.quoteVolume * 1 }}</div>
						</div>
					</RouterLink>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>