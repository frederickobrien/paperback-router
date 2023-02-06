<script>
	// @ts-nocheck

	export let bookData;

	import * as d3 from 'd3';
	import worldMap from '../data/world.json';
	import { onMount, afterUpdate } from 'svelte';

	onMount(async () => {
		let width = window.innerWidth;
		let height = window.innerHeight;

		const sensitivity = 25;

		let projection = d3
			.geoOrthographic()
			.scale(300)
			.center([0, 0])
			.rotate([0, -20])
			.translate([width / 2, height / 2]);

		const initialScale = projection.scale();
		let path = d3.geoPath().projection(projection);

		let svg = d3.select('#map');

		let globe = svg
			.append('circle')
			.attr('fill', '#EEE')
			.attr('stroke', '#000')
			.attr('stroke-width', '0.2')
			.attr('cx', width / 2)
			.attr('cy', height / 2)
			.attr('r', initialScale);

		let map = svg.append('g');

		let data = worldMap;

		map
			.append('g')
			.attr('class', 'countries')
			.selectAll('path')
			.data(data.features)
			.enter()
			.append('path')
			.attr('class', (d) => 'country_' + d.properties.name.replace(' ', '_'))
			.attr('d', path)
			.attr('fill', 'white')
			.style('stroke', 'black')
			.style('stroke-width', 0.3)
			.style('opacity', 0.8);

		svg
			.call(
				d3.drag().on('drag', (event) => {
					const rotate = projection.rotate();
					const k = sensitivity / projection.scale();
					projection.rotate([rotate[0] + event.dx * k, rotate[1] - event.dy * k]);
					path = d3.geoPath().projection(projection);
					svg.selectAll('path').attr('d', path);
				})
			)
			.call(
				d3.zoom().on('zoom', (event) => {
					if (event.transform.k > 0.3) {
						projection.scale(initialScale * event.transform.k);
						path = d3.geoPath().projection(projection);
						svg.selectAll('path').attr('d', path);
						globe.attr('r', projection.scale());
					} else {
						event.transform.k = 0.3;
					}
				})
			);

		//Optional rotate
		d3.timer(() => {
			const rotate = projection.rotate();
			const k = sensitivity / projection.scale();
			projection.rotate([rotate[0] - 1 * k, rotate[1]]);
			path = d3.geoPath().projection(projection);
			svg.selectAll('path').attr('d', path);
		}, 200);
	});

	afterUpdate(() => {
		let map = d3.select('#map').append('g');

		d3.select('#selectedBook').remove();

		map
			.append('path')
			.attr('id', 'selectedBook')
			.datum(bookData)
			.attr('d', d3.geoPath())
			.attr('fill-opacity', 0)
			.attr('stroke', 'red')
			.attr('stroke-width', 1);
	});
</script>

<div style="width: 100%;">
	<!-- <svg id="map" style="width: 100vw; height: 1000vh" /> -->
	<svg id="map" style="width: 100vw; height: 100vh" />
</div>
