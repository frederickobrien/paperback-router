<script>
	import { drag, geoOrthographic, geoPath, select } from 'd3';
	import worldMapGeoJson from '../data/world.json';

	export let book;

	const globeSize = 5000;

	const projection = geoOrthographic()
		.fitSize([globeSize, globeSize], { type: 'Sphere' })
		.scale(2250);

	$: isSpinning = false;
	$: path = geoPath().projection(projection);

	$: {
		if (book?.geometryCollection) {
			const coordinates = book.geometryCollection.geometries[0].coordinates;
			const [longitude, latitude] = coordinates[0];
			projection.rotate([-longitude, -latitude]);
			path = geoPath().projection(projection);
		}
	}

	setInterval(() => {
		if (isSpinning) {
			const rotate = projection.rotate();
			projection.rotate([rotate[0] + 0.2, rotate[1]]);
			path = geoPath().projection(projection);
		}
	}, 50);

	const dragHandler = () => {
		const svg = select('svg');
		const sensitivity = 0.25;
		svg.call(
			drag().on('drag', (event) => {
				const rotate = projection.rotate();
				projection.rotate([rotate[0] + event.dx * sensitivity, rotate[1] - event.dy * sensitivity]);
				path = geoPath().projection(projection);
			})
		);
	};

	const zoomHandler = (event) => {
		const scale = projection.scale();
		const newScale = scale - event.deltaY;
		if (newScale < 2250 || newScale > 10000) return;
		projection.scale(newScale);
		path = geoPath().projection(projection);
	};
</script>

<div class="container">
	<div class="settings">
		<button on:click={() => (isSpinning = !isSpinning)}>
			{isSpinning ? 'Stop spinning' : 'Start spinning'}
		</button>
	</div>

	<div class="map" on:wheel={zoomHandler}>
		<svg viewBox={`0 0 ${globeSize} ${globeSize}`}>
			<g>
				<path d={path({ type: 'Sphere' })} class="globe-sea-colour" stroke="none" />
				{#each worldMapGeoJson.features as feature}
					<path d={path(feature)} class="globe-land-colour" stroke="none" />
				{/each}
				{#if book?.geometryCollection}
					{#each book.geometryCollection.geometries as geometry}
						{#if geometry.type === 'LineString'}
							<path class="book-path" d={path(geometry)} />
						{/if}
						{#if geometry.type === 'Point'}
							<path class="marker" d={path(geometry)} />
							<!-- <text
								x={projection(geometry.coordinates)[0]}
								y={projection(geometry.coordinates)[1]}
								fill="black"
								font-size="12"
								text-anchor="middle"
								dy="-1.5em"
							>
								{geometry.properties.notes}
							</text> -->
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
</div>

<style>
	.container {
		position: relative;
	}
	.map {
		background-color: #252525;
		overflow: hidden;
	}
	.globe-sea-colour {
		fill: #f1f1f1;
	}
	.globe-land-colour {
		fill: lightgray;
	}
	svg {
		width: 100%;
		height: 100%;
	}
	.book-path {
		fill-opacity: 0;
		stroke: rgb(192, 50, 50);
		stroke-width: 5;
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
	.marker {
		fill: rgb(192, 50, 50);
		stroke: rgb(192, 50, 50);
		stroke-width: 5px;
	}
	@media (min-width: 1024px) {
		.map {
			height: 100vh;
		}
	}
</style>
