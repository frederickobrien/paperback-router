import { geoNaturalEarth1, geoOrthographic, geoPath, geoGraticule } from "d3";

const projection = geoNaturalEarth1();
// const globeProjection = geoOrthographic();
const path = geoPath(projection);
const graticule = geoGraticule();

export const Marks = ({ worldMap: { land, interiors } }) => (
  <g className="marks">
    <path className="sphere" d={path({ type: "Sphere" })} />
    <path className="graticules" d={path(graticule())} />
    {land.features.map((feature) => (
      <path className="land" d={path(feature)} />
    ))}
    <path className="interiors" d={path(interiors)} />
  </g>
);
