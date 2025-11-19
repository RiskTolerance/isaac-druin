<script lang="ts">
	import { Chart } from 'chart.js/auto';
	import { onMount } from 'svelte';

	let data = {
		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
		datasets: [
			{
				label: 'My First Dataset',
				data: [65, 59, 80, 81, 56, 55],
				backgroundColor: 'rgb(255, 99, 132)'
			}
		]
	};

  let chart: HTMLCanvasElement;

	onMount(() => {
		const ctx = chart;
		new Chart(ctx, {
			type: 'bar',
			data: data,
			options: {
				responsive: true,
				plugins: {
					legend: {
						display: false
					}
				}
			}
		});
	});
</script>

<canvas bind:this={chart} id="myChart"></canvas>
