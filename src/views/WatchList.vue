<script setup>
import { ref, reactive, onMounted } from 'vue';
//import tickerData from '../data/ticker24.json';
const asset = ref('USDT');
let watchList = ref({});
async function getTickersData() {
	const uri = 'https://api.binance.com/api/v3/ticker/24hr';
	try {
		const response = await fetch(uri);
		const tickerData = await response.json();
		// filter data to quoteAsset USDT and empty values
		const filterAsset = tickerData.filter((item) => item.symbol.endsWith(asset.value));
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
			// compact number format
			const format = new Intl.NumberFormat("en", { notation: "compact", });
			quoteVolume = format.format(quoteVolume);
			return { symbol, lastPrice, quoteVolume };
		});
	} catch (error) {
		console.log(error);
	}
}
onMounted(() => {
	getTickersData();
});
console.log("watch:", watchList);
</script>

<template>
	<div class="container">
		<div class="">
			<article v-for="ticker in watchList" :key="ticker.symbol" class="mb-1 border border-green-700 rounded-2xl">
				<RouterLink :to="{ name: 'Chart', params: { id: ticker.symbol } }"
					class="flex justify-between hover:bg-gray-700">
					<div class="flex items-center">
						<div class="">
							<input type="checkbox" :value="ticker"
								class="bg-gray-600 text-green-400 rounded-l h-8 mr-2 ml-2 border-2 border-green-600 w-3">
						</div>
						<figure class="">
							<img src="../public/logo.png" class="h-10 w-10 ml-2 mr-2 rounded-full">
						</figure>
						<div class="">
							<p class="text-md">
								<strong>
									<span>{{ ticker.symbol }}</span>
								</strong>
								<br>
								<small>Symbol name</small>
							</p>
						</div>
					</div>
					<div class="flex justify-end mr-3">
						<p class="text-md text-right">
							<strong>
								<span>{{ ticker.lastPrice * 1 }}</span>
							</strong>
							<br>
							<small>{{ ticker.quoteVolume }}</small>
						</p>
					</div>
				</RouterLink>
			</article>
		</div>
	</div>
</template>

<style scoped></style>