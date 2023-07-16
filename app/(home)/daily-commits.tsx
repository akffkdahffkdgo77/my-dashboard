'use client';

import { useEffect, useRef } from 'react';

import * as d3 from 'd3';

const width = '100%';
const height = 300;
const [mt, mr, mb, ml] = [20, 20, 20, 20];
const graphHeight = height - mt - mb;

const data = Array.from({ length: 31 }).map((_, i) => ({
    label: i,
    value: Math.floor(Math.random() * (20 - 5)) + 5
}));

const dates = Array.from({ length: 31 }).map((_d, index) => (index + 1 > 9 ? `2022-12-${index + 1}` : `2022-12-0${index + 1}`));

type DataType = { label: number; value: number };

export default function DailyCommits() {
    const lineChart = useRef<HTMLDivElement>(null);
    const rendered = useRef(true);

    useEffect(() => {
        if (!rendered.current) {
            return;
        }
        rendered.current = false;

        const graphWidth = (lineChart.current?.clientWidth || 1000) - mr - ml;

        // SVG 추가하기
        const svg = d3.select(lineChart.current).append('svg').attr('width', width).attr('height', height);

        // GRAPH 추가하기
        const graph = svg
            .append('g')
            .attr('width', graphWidth)
            .attr('height', graphHeight)
            // translate를 해서 그래프가 전체 캔버스의 중심에서 그려지도록 설정
            .attr('transform', `translate(${ml}, ${mt})`);

        // Tooltip 설정하기
        const tooltip = d3
            .select(lineChart.current)
            .append('div')
            .attr('class', 'd3-tooltip')
            .style('position', 'absolute')
            .style('z-index', '10')
            .style('visibility', 'hidden')
            .style('min-width', '120px')
            .style('border-radius', '4px')
            .style('color', '#ffffff');

        // 그룹을 추가한 다음 x축 데이터를 그룹에 추가하기
        const xAxisG = graph.append('g');

        const xDomain: [number, number] = [d3.extent(data, (d) => d.label)[0]!, d3.extent(data, (d) => d.label)[1]!];
        const yDomain: [number, number] = [d3.extent(data, (d) => d.value)[0]!, d3.extent(data, (d) => d.value)[1]!];

        // x축 데이터 scale
        const xScale = d3
            .scaleLinear()
            // [min, max] 반환
            .domain(xDomain)
            .range([0, graphWidth]);

        // x축 생성하기
        const xAxis = d3
            // x축은 그래프 하단에
            .axisBottom(xScale)
            // grid line을 그리고 싶으면 추가
            .tickSize(graphHeight)
            // x축과 x축 label 간격 설정
            .tickPadding(10)
            // grid line 수
            .ticks(data.length);

        // 그룹을 추가한 다음 y축 데이터를 그룹에 추가하기
        const yAxisG = graph.append('g');

        // y축 데이터 scale
        const yScale = d3
            // y는 보통 linear를 사용
            .scaleLinear()
            // [min, max]
            .domain(yDomain)
            // 값이 2,5,10의 배수로 나오도록
            .nice()
            .range([graphHeight, 0]);

        // y축은 왼쪽에
        const yAxis = d3.axisLeft(yScale);

        /** 그래프 그리기!!! */
        // x축 설정
        // 축 및 grid line 색상 변경
        xAxisG
            .call(xAxis)
            .call((g) => g.select('.domain').remove())
            .call((g) => g.selectAll('.tick').remove());

        // y축 설정
        // 축 및 grid line 색상 변경
        yAxisG
            .call(yAxis)
            .call((g) => g.select('.domain').remove())
            .call((g) => g.selectAll('.tick').remove());

        const line = d3
            .line<DataType>()
            .curve(d3.curveCardinal)
            .x((d) => xScale(d.label))
            .y((d) => yScale(d.value));

        graph.append('path').datum(data).attr('fill', 'none').attr('stroke', '#ffffff').attr('stroke-width', 2).attr('d', line);

        svg.append('g')
            .selectAll()
            .data(data)
            .join('circle')
            .attr('cx', (d) => xScale(d.label))
            .attr('cy', (d) => yScale(d.value))
            .attr('r', 3)
            .attr('stroke', '#ffffff')
            .attr('stroke-width', 1)
            .attr('fill', '#ffffff')
            .attr('transform', `translate(${ml}, ${mt})`)
            .on('mouseover', function onMouseOver(_event, d) {
                tooltip
                    .html(
                        `<div class="d3-tooltip-name">
                            ${dates[d.label]}
                        </div>
                        <div class="d3-tooltip-label">
                            <div class="d3-tooltip-color" style="background-color: #ffffff">
                                <span></span>
                            </div>
                            <span class="d3-tooltip-value">Commits:</span>${d.value.toLocaleString()}
                        </div>`
                    )
                    .style('visibility', 'visible');
            })
            .on('mousemove', function onMouseMove(event) {
                tooltip.style('top', `${event.pageY - 10}px`).style('left', `${event.pageX + 10}px`);
            })
            .on('mouseleave', function onMouseLeave() {
                tooltip.style('visibility', 'hidden');
            });
    }, []);

    return (
        <div className="mt-5 w-full rounded-md bg-black pt-5">
            <h4 className="mx-5 flex justify-between font-mono text-[14px] font-bold text-white">Daily Commits</h4>
            <div ref={lineChart} />
        </div>
    );
}
