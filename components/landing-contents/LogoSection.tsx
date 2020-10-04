import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

export default () => {
	const onStoreLinkClick = useCallback(() => {
		window.open('https://play.google.com/store', '_blank');
	}, []);

	return (
		<SectionWrapper className="section">
			<LogoWrapper>
				<BubbleImg data-src="/bubble.png" />
				<LogoImg data-src="/img_main_tich.png" />
				<TextDiv>
					당신의 <span>청결한</span> 생활습관 첫걸음
				</TextDiv>
			</LogoWrapper>

			<StoreLink data-src="/ic_google_store.png" onClick={onStoreLinkClick} />
		</SectionWrapper>
	);
};

const infinityRotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const fadein = keyframes`
from {
  opacity:0;
}
to {
  opacity:1;
}
`;

const SectionWrapper = styled.div`
	position: relative;
	text-align: center;
`;

const LogoWrapper = styled.div`
	position: relative;
	max-width: 90%;
	max-height: 90%;
	height: 90vh;
	margin: 0 auto;
	text-align: center;
`;

const BubbleImg = styled.img`
	max-width: 100%;
	max-height: 100%;
	animation: ${infinityRotate} 5s linear infinite;
`;

const LogoImg = styled.img`
	position: absolute;
	top: 45%;
	left: 50%;
	width: 60%;
	height: auto;
	max-width: 500px;
	transform: translate(-50%, -50%);
`;

const StoreLink = styled.img`
	position: absolute;
	left: 80px;
	top: 50%;
	width: 60px;
	height: 60px;
	cursor: pointer;
	transform: translateY(-50%);

	&:hover {
		filter: contrast(50%);
	}
`;

const TextDiv = styled.div`
	position: absolute;
	top: 65%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 1.8em;
	opacity: 0;
	animation: ${fadein} 1s;
	animation-delay: 0.5s;
	animation-fill-mode: forwards;

	> span {
		color: #5093e2;
	}
`;
