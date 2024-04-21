<script setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
let klinesData = ref({});
const router = useRouter();
const route = useRoute();

async function fetchKlinesData() {
	const uri = `https://api.binance.com/api/v3/klines?interval=1d&symbol=${route.params.id}`
	try {
		const response = await fetch(uri);
		//{mode: 'no-cors'}
		const data = await response.json();
		const candleStick = data.map((candles) => ({
			date: candles[0],
			open: candles[1],
			high: candles[2],
			low: candles[3],
			close: candles[4],
			volume: candles[5]
		}));
		console.log(candleStick);

		klinesData.value = candleStick.map((a) => {
			a.open = +a.open;
			a.high = +a.high;
			a.low = +a.low;
			a.close = +a.close;
			a.volume = +a.volume;
			return a;
		});
	} catch (error) {
		console.log(error);
	}
}
onMounted(() => {
	fetchKlinesData();
});
console.log(klinesData);
</script>

<template>
	<div>
		<button @click="router.back()">Go back</button>
		<div>
			<div>{{ klinesData }}</div>
		</div>
	</div>
</template>

<style scoped></style>