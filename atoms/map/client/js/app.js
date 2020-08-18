import * as d3 from 'd3'
import { $ } from 'shared/js/util'

import * as topojson from 'topojson'
import statesTopo from 'us-atlas/counties-10m.json'
import bubbleData from 'shared/server/data_joined.json'

// Convert TopoJSON to GeoJSON. TopoJSON is smaller (hence why we use it),
// but can't be used directly in D3

const statesFc = topojson.feature(statesTopo, statesTopo.objects.states)

// 'fc' is short for 'FeatureCollection', you can log it to look at the structure
console.log(statesFc)

// Wrap everything to do with drawing the map in one function

const draw = () => {

    // $ is shorthand for document.querySelector
    // selects the SVG element
    const svgEl = $('.elex-map')

    // get the SVG's width as set in CSS
    const width = svgEl.getBoundingClientRect().width
    const height = width*0.66

    const svg = d3.select(svgEl)
        .attr('width', width)
        .attr('height', height)

    // set up a map projection that fits our GeoJSON into the SVG

    const proj = d3.geoAlbersUsa()
        .fitExtent([
            [ -69 , 0 ], [ width, height ] ], statesFc)

    const path = d3.geoPath().projection(proj)

    // set up two different scales, one for electoral votes, one for population

    const evScale = d3.scaleSqrt()      // square-root scale ...
        .domain([ 0, 55 ])              // ... from 0 to 55 electoral votes
        .range([ 0, 40 ])               // .. mapped to a circle radius between 0 and 30px

    const popScale = d3.scaleSqrt()
        .domain([ 0, 20*10**6 ])
        .range([ 0, 40 ])


    // Now let's draw the actual states (behind our bubbles)

    const stateShapes = svg
        .selectAll('blah')
        // do something for each feature ( = area ) in the GeoJSON
        .data( statesFc.features )
        .enter()
        .append('path')
        .attr('d', path)
        .attr('class', 'elex-state')

    // Now let's add the bubbles

    const stateBubbles = svg
        .selectAll('blah')
        .data( bubbleData )
        .enter()
        .append('circle')
        .each( function(d, i) {

            const bubble = d3.select(this)

            // scale bubbles by electoral college votes initially

            bubble
                .attr('cx', d.x/860*width)
                .attr('cy', d.y/860*width)
                .attr('r',  evScale(d.ev) )
                .attr('class', 'elex-bubble')

        } )

    // after 2 seconds, switch to the population scale instead

    stateBubbles
        .transition()
        .delay(2000)
        .duration(800)
        .attr('r', d => popScale(d.pop))

}

// call the draw function

draw()