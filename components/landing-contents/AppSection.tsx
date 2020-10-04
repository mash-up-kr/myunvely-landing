import React from 'react';
import styled from '@emotion/styled';

export default () => {
	return (
		<SectionWrapper className="section">
			<VideoWrapper autoPlay muted>
				<source data-src="/animation_2.mp4" type="video/mp4" />
				video 태그를 지원하지 않는 브라우저입니다.
			</VideoWrapper>
			<SectionTitle>
				신경쓰지 않아도
				<br />
				알아서 알려주니까
			</SectionTitle>
		</SectionWrapper>
	);
};

const SectionWrapper = styled.div`
	position: relative;
	background-color: #f6f6f6;
	text-align: center;
`;

const SectionTitle = styled.div`
	position: relative;
	display: inline-block;
	margin-left: 100px;
	line-height: 60px;
	font-size: 36px;
	color: #333333;
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
