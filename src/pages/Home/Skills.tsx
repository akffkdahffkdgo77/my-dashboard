import { useEffect, useRef } from 'react';

import * as d3 from 'd3';
import { PieArcDatum } from 'd3';

const height = 300;
const [mt, , mb, ml] = [50, 50, 50, 50];
const graphHeight = height - mt - mb;

const radius = height / 2 - 50;

const data = [
    { name: 'JavaScript', value: 500 },
    { name: 'TypeScript', value: 400 },
    { name: 'HTML', value: 300 },
    { name: 'CSS', value: 200 },
    { name: 'SCSS', value: 100 }
];

const colors = ['#000000', '#ffffff', '#000000', '#ffffff', '#000000'];

type DataType = { name: string; value: number };

export default function Skills() {
    const donutChart = useRef<HTMLDivElement>(null);
    const rendered = useRef(true);

    useEffect(() => {
        if (!rendered.current) {
            return;
        }
        rendered.current = false;

        const width = donutChart.current!.clientWidth + Math.floor(ml / 2);

        // SVG 추가하기
        const svg = d3.select(donutChart.current).append('svg').attr('width', width).attr('height', height);

        // GRAPH 추가하기
        const graph = svg
            .append('g')
            .attr('width', width)
            .attr('height', graphHeight)
            // translate를 해서 그래프가 전체 캔버스의 중심에서 그려지도록 설정
            .style('transform', 'translate(50%, 50%');

        // Tooltip 설정하기
        const tooltip = d3
            .select(donutChart.current)
            .append('div')
            .attr('class', 'd3-tooltip')
            .style('position', 'absolute')
            .style('z-index', '10')
            .style('opacity', '0')
            .style('min-width', '120px')
            .style('border-radius', '4px')
            .style('color', '#fff')
            .style('overflow', 'hidden');

        const colorScale = d3.scaleOrdinal().range(colors);

        function onMouseOver(event: MouseEvent, d: PieArcDatum<DataType>) {
            const currentTarget = event.target as HTMLElement;
            tooltip
                .html(
                    `   <div class="d3-tooltip-name">
                            ${d.data.name}
                        </div>
                        <div class="d3-tooltip-label">
                            <div class="d3-tooltip-color" style="background: ${colorScale(d.data.name)}">
                                <span></span>
                            </div>
                            <span class="d3-tooltip-value">${d.data.name}:</span>${d.data.value / 10}%
                        </div>`
                )
                .style('opacity', '1')
                .transition()
                .duration(200);

            d3.select(currentTarget).transition().attr('opacity', 1).attr('transform', 'scale(1.1)');
        }

        function onMouseMove(event: MouseEvent) {
            tooltip.style('top', `${event.pageY - 10}px`).style('left', `${event.pageX + 10}px`);
        }

        function onMouseLeave(event: MouseEvent) {
            tooltip.html(``).style('opacity', '0').transition().duration(200);

            const currentTarget = event.target as HTMLElement;
            d3.select(currentTarget).transition().attr('opacity', 0.9).attr('transform', 'scale(1)');
        }

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
            .attr('class', (d) => (d.index === 0 ? 'raise' : ''))
            .attr('d', arc)
            .attr('stroke', '#ffffff')
            .attr('fill', (d) => colorScale(d.data.name) as string)
            .on('mouseover', onMouseOver)
            .on('mousemove', onMouseMove)
            .on('mouseleave', onMouseLeave)
            .transition()
            .duration(1200)
            .attrTween('d', (d) => {
                const i = d3.interpolate(d.startAngle, d.endAngle);
                return function drawArc(t: number) {
                    // eslint-disable-next-line no-param-reassign
                    d.endAngle = i(t);
                    return `${arc(d)}`;
                };
            });

        d3.select('.raise').raise();
    }, []);

    return (
        <div className="mt-5 w-full rounded-md bg-black pt-5">
            <h4 className="mx-5 flex justify-between font-mono text-[14px] font-bold text-white">Most Used Languages</h4>
            <div ref={donutChart} />
        </div>
    );
}
