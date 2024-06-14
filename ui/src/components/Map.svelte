<script>
	import { drag, geoNaturalEarth1, geoOrthographic, geoPath, select } from 'd3';
	import worldMapGeoJson from '../data/world.json';

	export let book;

	$: is3D = true;
	$: isSpinning = false;

	$: projection = is3D
		? geoOrthographic().fitSize([1000, 1000], { type: 'Sphere' })
		: geoNaturalEarth1().fitSize([1000, 1000], { type: 'Sphere' });
	$: path = geoPath().projection(projection);

	$: {
		if (book?.geometryCollection && is3D) {
			const coordinates = book.geometryCollection.geometries[0].coordinates;
			const [longitude, latitude] = coordinates[0];
			projection.rotate([-longitude, -latitude]);
			path = geoPath().projection(projection);
		}
	}

	setInterval(() => {
		if (is3D && isSpinning) {
			const rotate = projection.rotate();
			projection.rotate([rotate[0] + 0.2, rotate[1]]);
			path = geoPath().projection(projection);
		}
	}, 50);

	const dragHandler = () => {
		if (is3D) {
			const svg = select('svg');
			const sensitivity = 0.25;
			svg.call(
				drag().on('drag', (event) => {
					const rotate = projection.rotate();
					projection.rotate([
						rotate[0] + event.dx * sensitivity,
						rotate[1] - event.dy * sensitivity
					]);
					path = geoPath().projection(projection);
				})
			);
		}
	};
</script>

<div class="settings">
	<button on:click={() => (is3D = !is3D)}>
		{is3D ? 'Switch to 2D' : 'Switch to 3D'}
	</button>
	<button on:click={() => (isSpinning = !isSpinning)} disabled={!is3D}>
		{isSpinning ? 'Stop spinning' : 'Start spinning'}
	</button>
</div>

<div class="map">
	<svg viewBox="0 0 1000 1000">
		<g>
			<path d={path({ type: 'Sphere' })} fill="#f1f1f1" stroke="none" />
			{#each worldMapGeoJson.features as feature}
				<path d={path(feature)} fill="lightgray" stroke="none" />
			{/each}
			{#if book?.geometryCollection}
				{#each book.geometryCollection.geometries as geometry}
					{#if geometry.type === 'LineString'}
						<path class="book-path" d={path(geometry)} />
					{/if}
				{/each}
			{/if}
			<path
				d={path({ type: 'Sphere' })}
				fill="rgba(0,0,0,0)"
				stroke="none"
				on:mousedown={dragHandler}
			/>
		</g>
	</svg>
</div>

<style>
	.map {
		width: 100%;
		height: 100vh;
		padding: 2rem;
		background-color: #252525;
	}
	svg {
		width: 100%;
		height: 100%;
	}
	.book-path {
		fill-opacity: 0;
		stroke: red;
		stroke-width: 1;
	}
	.settings {
		position: absolute;
		top: 0;
		right: 0;
		padding: 1rem;
		z-index: 100;
	}
	button {
		padding: 0.5rem;
	}
</style>
