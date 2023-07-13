/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-use-before-define */
// @ts-nocheck

import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { styled } from 'styled-components'
import ReactPlayer from 'react-player'

import { tricks, TreeNode } from './data' // Importing the data from the updated dataset
import { useMediaQuery } from '../../../hooks'

const SubContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100%;
   position: relative;
`
const Overlay = styled.div`
   position: absolute;
   height: 100%;
   width: 100%;
   background-color: #333;
   opacity: 0.8;
`

const RadialTree: React.FC = () => {
   const svgRef = useRef<SVGSVGElement>(null)
   const [isOpen, setOpen] = useState(false)
   const [video, setVideo] = useState('')

   useEffect(() => {
      // SVG dimensions
      const width = 2000
      const height = width
      const cx = width * 0.5
      const cy = height * 0.59
      const radius = Math.min(width, height) / 2 - 2

      // Create a radial tree layout
      const treeLayout = d3
         .tree<TreeNode>()
         .size([2 * Math.PI, radius])
         .separation((a, b) => (a.parent === b.parent ? 1 : 1) / a.depth)

      // Create a hierarchy from the tricks data
      const root = treeLayout(
         d3.hierarchy<TreeNode>(tricks[0]).sort((a, b) => d3.ascending(a.data.name, b.data.name)),
      )

      // Create the SVG container
      const svg = d3
         .select(svgRef.current)
         .attr('width', width)
         .attr('height', height)
         .attr('viewBox', [-cx, -cy, width, height])
         .attr('style', 'width: 100%; height: 100%; ')
         .call(d3.zoom<SVGSVGElement, unknown>().scaleExtent([1.2, 30]).on('zoom', zoomHandler))
         .append('g')

      // Append links
      svg.append('g')
         .attr('fill', 'none')
         .attr('stroke', '#f3f4f6')
         .attr('stroke-opacity', 0.4)
         .attr('stroke-width', 2)
         .selectAll('path')
         .data(root.links())
         .join('path')
         .attr(
            'd',
            d3
               .linkRadial<TreeNode, d3.RadialLink<TreeNode>>()
               .angle((d) => d.x!)
               .radius((d) => d.y!),
         )

      svg.append('g')
         .selectAll('circle')
         .data(root.descendants())
         .join('circle')
         .attr(
            'transform',
            (d) => `rotate(${(d.x! * 180) / Math.PI - 90}) translate(${d.y - 10},0)`,
         )
         .attr('fill', () => '#ef4444')
         .attr('r', 10)
         .on('click', (event, d) => {
            setVideo(d.data?.link)
            setOpen(true)
         })

      // Append labels
      svg.append('g')
         .selectAll('text')
         .data(root.descendants())
         .join('text')
         .attr(
            'transform',
            (d) =>
               `rotate(${(d.x! * 180) / Math.PI - 90}) translate(${d.y},0) rotate(${
                  d.x! >= Math.PI ? 180 : 0
               })`,
         )
         .attr('dy', '0.31em')
         .attr('x', (d) => (d.x! < Math.PI === !d.children ? 26 : -26))
         .attr('text-anchor', (d) => (d.x! < Math.PI === !d.children ? 'start' : 'end'))
         .attr('paint-order', 'stroke')
         .attr('fill', 'currentColor')
         .text((d) => d.data.name)

      // Zoom handler function
      function zoomHandler(event: d3.D3ZoomEvent<SVGSVGElement, unknown>) {
         svg.attr('transform', event.transform)
      }

      // Cleanup function to remove the zoom behavior
      return () => {
         svg.on('.zoom', null)
      }
   }, [])
   const { isDesktop } = useMediaQuery()
   const [isReady, setIsReady] = useState(false)

   return (
      <SubContainer>
         <svg ref={svgRef} />
         {isOpen && video && (
            <>
               <div style={{ position: 'absolute', alignSelf: 'center', zIndex: 1 }}>
                  <ReactPlayer
                     url={video}
                     isOpen={isOpen}
                     onReady={() => setIsReady(true)}
                     playing={true}
                     volume={0.5}
                     onEnded={() => {
                        setOpen(false)
                        setIsReady(false)
                     }}
                     width="auto"
                     height={isDesktop ? '700px' : '500px'}
                     style={{ borderRadius: '5px' }}
                  />
               </div>
               {!isReady && (
                  <div style={{ position: 'absolute', alignSelf: 'center', zIndex: 1 }}>
                     Loading...
                  </div>
               )}
               <Overlay
                  onClick={() => {
                     setOpen(false)
                     setIsReady(false)
                  }}
               />
            </>
         )}
      </SubContainer>
   )
}

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100%;

   svg circle:hover {
      r: 15;
      transition: 0.2s ease-in-out;
      cursor: pointer;
   }
   font-weight: 400;
`

const TextContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: fit-content;

   position: absolute;
   top: 5%;
   left: 2%;
   z-index: 2;
   gap: 5px;
   h1 {
      font-size: 100px;
   }
   h2 {
      font-size: 25px;
   }
   p {
      font-size: 20px;
      margin-top: 10px;
   }

   @media screen and (max-width: 768px) {
      h1 {
         font-size: 25px;
      }
      h2 {
         font-size: 14px;
      }
      p {
         font-size: 14px;
         margin-top: 0px;
      }
   }

   font-weight: 400;
`

export default function DataTree() {
   const { isDesktop } = useMediaQuery()
   return (
      <Container>
         <TextContainer>
            <h1>hi, i like to skate</h1>
            <h2>click each node to see</h2>
            {isDesktop && <p>(hover on me and scroll to continue)</p>}
            {!isDesktop && <p>(swipe here to continue)</p>}
         </TextContainer>
         <RadialTree />
      </Container>
   )
}
