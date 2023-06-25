import { useEffect, useRef } from 'react';

import * as d3 from 'd3';
import { PieArcDatum } from 'd3';

const width = '100%';
const height = 300;
const [mt, mr, mb, ml] = [50, 50, 50, 50];
const graphHeight = height - mt - mb;

const radius = height / 2 - 50;

const data = [
    { name: 'ReactJS', value: 30 },
    { name: 'NextJS', value: 20 },
    { name: 'Vanilla JS', value: 5 },
    { name: 'Others', value: 10 }
];

type DataType = { name: string; value: number };

export default function Projects() {
    const donutChart = useRef<HTMLDivElement>(null);
    const rendered = useRef(true);

    useEffect(() => {
        if (!rendered.current) {
            return;
        }

        rendered.current = false;

        const graphWidth = (donutChart.current?.clientWidth || 1000) - mr - ml;

        // SVG 추가하기
        const svg = d3.select(donutChart.current).append('svg').attr('width', width).attr('height', height);

        // GRAPH 추가하기
        const graph = svg
            .append('g')
            .attr('width', graphWidth)
            .attr('height', graphHeight)
            // translate를 해서 그래프가 전체 캔버스의 중심에서 그려지도록 설정
            .attr('transform', `translate(${height / 2}, ${height / 2})`);

        // Tooltip 설정하기
        const tooltip = d3
            .select(donutChart.current)
            .append('div')
            .attr('class', 'd3-tooltip')
            .style('position', 'absolute')
            .style('z-index', '10')
            .style('visibility', 'hidden')
            .style('min-width', '120px')
            .style('border-radius', '4px')
            .style('color', '#ffffff')
            .style('overflow', 'hidden');

        const colors = d3.scaleOrdinal().range(['#000000', '#ffffff', '#ffffff', '#000000']);

        const pie = d3.pie<DataType>().value((d) => d.value);
        const computedData = pie(data);

        const arc = d3
            .arc<PieArcDatum<DataType>>()
            .innerRadius(radius / 2)
            .outerRadius(radius);

        graph
            .selectAll()
            .data(computedData)
            .join('path')
            .attr('d', arc)
            .attr('fill', (d) => colors(d.data.name) as string)
            .attr('stroke', '#ffffff')
            .style('stroke-width', '2px')
            .on('mouseover', function onMouseOver(_event, d) {
                tooltip
                    .html(
                        `<div class="d3-tooltip-name">
                            ${d.data.name}
                        </div>
                        <div class="d3-tooltip-label">
                            <div class="d3-tooltip-color" style="background-color: ${colors(d.data.name) as string}">
                                <span></span>
                            </div>
                            <span class="d3-tooltip-value">${d.data.name}:</span>${d.data.value.toLocaleString()}
                        </div>`
                    )
                    .style('visibility', 'visible');
                d3.select(this).transition().attr('opacity', 1).attr('transform', 'scale(1.1)');
            })
            .on('mousemove', function onMouseMove(event) {
                tooltip.style('top', `${event.pageY - 10}px`).style('left', `${event.pageX + 10}px`);
            })
            .on('mouseleave', function onMouseLeave() {
                tooltip.style('visibility', 'hidden');
                d3.select(this).transition().attr('opacity', 0.9).attr('transform', 'scale(1)');
            });
    }, []);

    return (
        <div className="mt-5 min-w-[300px] rounded-md bg-black pt-5">
            <h4 className="mx-5 flex justify-between font-mono text-[14px] font-bold text-white">
                Projects
                <span className="rounded-md bg-[#ffffff] px-[5px] py-[2.5px] text-[12px] text-black">2022.01 ~ 2022.12</span>
            </h4>
            <div ref={donutChart} className="flex items-center" />
        </div>
    );
}
