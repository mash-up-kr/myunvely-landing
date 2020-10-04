import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const texts = [
	'칫솔은 한 3개월 된 것 같은데',
	'샤워타올은 작년에 샀는데',
	'면도날 언제 바꿨더라',
	'렌즈 바꿔야겠다 눈 아프네',
	'행주는 오래써도 되려나?',
];

const getRandom = (end: number) => Math.floor(Math.random() * end);

export default () => {
	const [textSpans, setTextSpans] = useState<(() => JSX.Element)[]>([]);

	useEffect(() => {
		const arr = Array.from({ length: 15 }).map((_, i) => {
			const text = texts[getRandom(texts.length)];
			const delay = getRandom(20) / 10;
			return () => (
				<TextSpan top={getRandom(95)} left={getRandom(95)} delay={delay} key={i}>
					{text}
				</TextSpan>
			);
		});
		setTextSpans(arr);
	}, []);

	return (
		<SectionWrapper className="section">
			<div>{textSpans.map(sp => sp())}</div>
			<VideoWrapper autoPlay muted>
				<source data-src="/animation_1.mp4" type="video/mp4" />
				video 태그를 지원하지 않는 브라우저입니다.
			</VideoWrapper>
			<SectionTitle>
				나와 가장 가까운
				<br />
				청결 사이클을
			</SectionTitle>
		</SectionWrapper>
	);
};

const fadeinout = keyframes`
0% {
  opacity:0;
}
20% {
  opacity:1;
}
80% {
  opacity:1;
}
100% {
  opacity:0;
}
`;

const TextSpan = styled.span<{ top: number; left: number; delay: number }>`
	position: absolute;
	top: ${props => props.top}%;
	left: ${props => props.left}%;
	font-size: 20px;
	color: #5c5c5c;
	white-space: pre;
	font-weight: 700;
	opacity: 0;
	animation: ${fadeinout} 5s linear;
	animation-delay: ${props => props.delay}s;
	animation-direction: alternate;
`;

const SectionWrapper = styled.div`
	position: relative;
	background-color: #3a3a3a;
	text-align: center;
`;

const SectionTitle = styled.div`
	position: relative;
	display: inline-block;
	margin-left: 100px;
	line-height: 60px;
	font-size: 36px;
	color: white;
	text-align: left;
	font-weight: 700;
`;

const VideoWrapper = styled.video`
	position: relative;
	max-width: 80%;
	max-height: 80%;
	height: 80vh;
	z-index: 30;
	vertical-align: middle;
`;
