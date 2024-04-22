<script setup>
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
//import * as am5stock from "@amcharts/amcharts5/stock";
import am5dark from '@amcharts/amcharts5/themes/Dark';
import am5animated from '@amcharts/amcharts5/themes/Animated';
import { shallowRef, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

let root;
let chartdiv = shallowRef(null);
onMounted(() => {
	// ===========================
	// ROOT ELEMENT, THEMES, CHART
	// ===========================
	root = am5.Root.new(chartdiv.value);
	root.setThemes([
		am5dark.new(root),
		am5animated.new(root)
	]);
	let chart = root.container.children.push(
		am5xy.XYChart.new(root, {})
	);
	// ===============
	// X-AXIS & Y-AXIS
	// ===============
	const xAxis = chart.xAxes.push(
		am5xy.DateAxis.new(root, {
			baseInterval: { timeUnit: "day", count: 1 },
			renderer: am5xy.AxisRendererX.new(root, {})
		})
	);
	const yAxis = chart.yAxes.push(
		am5xy.ValueAxis.new(root, {
			renderer: am5xy.AxisRendererY.new(root, {})
		})
	);
	// =============
	// CREATE SERIES
	// =============
	let series = chart.series.push(
		am5xy.CandlestickSeries.new(root, {
			name: "Series",
			xAxis: xAxis,
			yAxis: yAxis,
			openValueYField: "open",
			highValueYField: "high",
			lowValueYField: "low",
			valueYField: "close",
			valueXField: "date",
		})
	);
	// ==================
	// DEFINE SOURCE DATA
	// ==================
	const uri = `https://api.binance.com/api/v3/klines?interval=1d&symbol=${route.params.id}`
	let data;
	am5.net.load(uri)
		.then((result) => {
			data = am5.JSONParser.parse(result.response);
			const candles = data.map((candles) => ({
				date: candles[0],
				open: candles[1],
				high: candles[2],
				low: candles[3],
				close: candles[4],
				volume: candles[5]
			}));
			//console.log(candles);
			data = candles.map((a) => {
				a.open = +a.open;
				a.high = +a.high;
				a.low = +a.low;
				a.close = +a.close;
				a.volume = +a.volume;
				return a;
			});
			series.data.setAll(data);
		}).catch((result) => {
			console.log("Error loading " + result.xhr.responseURL);
		});
});
//console.log(data);
</script>

<template>
	<div>
		<button @click="router.back()">Go back</button>
		<div>
			<div id="hello" ref="chartdiv" class="w-full h-96"></div>
		</div>
	</div>
</template>

<style scoped></style>