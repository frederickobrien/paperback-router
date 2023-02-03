import React, { useRef } from "react";
import * as d3 from "d3";
import world_json from '../data/world.json'

export const Globe = (bookData) => {

    const svgRef = useRef();

    let width = window.innerWidth
    let height = window.innerHeight
    const sensitivity = 33

    let projection = d3.geoOrthographic()
        .scale(250)
        .center([0, 0])
        .rotate([0, -20])
        .translate([width / 2, height / 2])

    const initialScale = projection.scale()
    let path = d3.geoPath().projection(projection)

    const svg = d3.select(svgRef.current)

    let globe = svg.append("circle")
        .attr("fill", "#EEE")
        .attr("stroke", "#000")
        .attr("stroke-width", "0.2")
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("r", initialScale)

    svg.call(d3.drag().on('drag', (event) => {
        const rotate = projection.rotate()
        const k = sensitivity / projection.scale()
        projection.rotate([
            rotate[0] + event.dx * k,
            rotate[1] - event.dy * k
        ])
        path = d3.geoPath().projection(projection)
        svg.selectAll("path").attr("d", path)
    }))
        .call(d3.zoom().on('zoom', (event) => {
            if (event.transform.k > 0.3) {
                projection.scale(initialScale * event.transform.k)
                path = d3.geoPath().projection(projection)
                svg.selectAll("path").attr("d", path)
                globe.attr("r", projection.scale())
            }
            else {
                event.transform.k = 0.3
            }
        }))

    let map = svg.append("g")

    let data = world_json

    map.append("g")
        .attr("class", "countries")
        .selectAll("path")
        .data(data.features)
        .enter().append("path")
        .attr("class", d => "country_" + d.properties.name.replace(" ", "_"))
        .attr("d", path)
        .attr("fill", "white")
        .style('stroke', 'black')
        .style('stroke-width', 0.3)
        .style("opacity", 0.8)

    map.append("path")
        .datum(bookData)
        .attr("d", d3.geoPath())
        .attr('fill-opacity', 0)
        .attr('stroke', 'red')
        .attr("stroke-width", 1);

    //Optional rotate
    d3.timer(() => {
        const rotate = projection.rotate()
        const k = sensitivity / projection.scale()
        projection.rotate([
            rotate[0] - 1 * k,
            rotate[1]
        ])
        path = d3.geoPath().projection(projection)
        svg.selectAll("path").attr("d", path)
    }, 200)
    return (
        <div style={{backgroundColor: "#323232"}}>
            <svg
                ref={svgRef}
                style={{ 
                    width: width, 
                    height: height 
                }}
            ></svg>
        </div>
    );
}
