import { useEffect, useRef } from 'react';

import * as d3 from 'd3';

const width = '100%';
const height = 300;
const [mt, mr, mb, ml] = [20, 20, 20, 20];
const graphHeight = height - mt - mb;

const data = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'].map((label) => ({
    label,
    value: Math.floor(Math.random() * (20 - 5)) + 5
}));

export default function WeeklyCommits() {
    const barChart = useRef<HTMLDivElement>(null);
    const rendered = useRef(true);

    useEffect(() => {
        if (!rendered.current) {
            return;
        }

        rendered.current = false;

        const graphWidth = (barChart.current?.clientWidth || 1000) - mr - ml;

        // SVG 추가하기
        const svg = d3.select(barChart.current).append('svg').attr('width', width).attr('height', height);

        // GRAPH 추가하기
        const graph = svg
            .append('g')
            .attr('width', graphWidth)
            .attr('height', graphHeight)
            // translate를 해서 그래프가 전체 캔버스의 중심에서 그려지도록 설정
            .attr('transform', `translate(${ml}, ${mt})`);

        // Tooltip 설정하기
        const tooltip = d3
            .select(barChart.current)
            .append('div')
            .attr('class', 'd3-tooltip')
            .style('position', 'absolute')
            .style('z-index', '10')
            .style('visibility', 'hidden')
            .style('min-width', '120px')
            .style('border-radius', '4px')
            .style('color', '#ffffff')
            .style('overflow', 'hidden');

        const xScale = d3
            .scaleBand()
            .domain(data.map((d) => d.label))
            .range([0, graphWidth])
            .paddingOuter(0.25 / 2)
            .paddingInner(0.25);

        // X축이 그래프의 하단에 그려지도록
        const xAxis = d3
            .axisBottom(xScale)
            // grid line 그리기
            .tickSize(graphHeight)
            // x축 label과 x축 사이의 간격 설정
            .tickPadding(10)
            .tickFormat(() => '');

        graph
            .call(xAxis)
            .call((g) => g.select('.domain').attr('stroke', 'transparent'))
            .call((g) => g.selectAll('.tick').attr('stroke-opacity', 0.1))
            .call((g) => g.selectAll('.tick line').remove());

        const yScale = d3
            .scaleLinear()
            .domain([0, d3.extent(data, (d) => d.value)[1]!])
            .nice()
            .range([graphHeight, 0]);

        // Y축이 그래프의 왼쪽에서 그려지도록
        const yAxis = d3.axisLeft(yScale).tickFormat(() => '');

        // Y축 Styling
        graph
            .call(yAxis)
            .call((g) => g.select('.domain').remove())
            .call((g) => g.selectAll('.tick').attr('stroke-opacity', 0.1))
            .call((g) => g.selectAll('.tick line').remove());

        const bars = graph.selectAll('rect').data(data);
        bars.enter()
            .append('rect')
            .attr('x', (d) => xScale(d.label)!)
            .attr('y', yScale(0))
            .attr('width', xScale.bandwidth())
            // 0 -> 값만큼 height가 생기는 animation을 위해서 초기값을 0으로 설정
            .attr('height', graphHeight - yScale(0))
            .attr('fill', '#ffffff')
            // mouse over -> tooltip이 보이도록
            .on('mouseover', function mouseOver(_e, d) {
                tooltip
                    .html(
                        `<div class="d3-tooltip-name">
                                ${d.label}
                            </div>
                            <div class="d3-tooltip-label">
                                <div class="d3-tooltip-color" style="background-color: #ffffff">
                                    <span></span>
                                </div>
                                <span class="d3-tooltip-value">Commits:</span>${d.value.toLocaleString()}
                            </div>`
                    )
                    .style('visibility', 'visible');
                d3.select(this).transition().attr('fill', 'rgba(255, 255, 255, 0.5)');
            })
            // mouse move
            .on('mousemove', function mouseMove(event) {
                tooltip.style('top', `${event.pageY - 10}px`).style('left', `${event.pageX + 10}px`);
            })
            // mouse leave -> tooltip이 보이지 않도록
            .on('mouseleave', function mouseLeave() {
                tooltip.html(``).style('visibility', 'hidden');
                d3.select(this).transition().attr('fill', '#ffffff');
            });

        d3.select(barChart.current)
            .selectAll('rect')
            .data(data)
            .transition()
            .ease(d3.easeLinear)
            .duration(500)
            .attr('y', (d) => yScale(d.value))
            .attr('height', (d) => graphHeight - yScale(d.value))
            .delay((_, i) => i * 10);
    }, []);

    return (
        <div className="w-full bg-black rounded-md pt-5 mt-5">
            <h4 className="font-mono text-[14px] font-bold text-white mx-5 flex justify-between">Weekly Commits</h4>
            <div ref={barChart} />
        </div>
    );
}
