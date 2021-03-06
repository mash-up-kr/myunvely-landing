import React from 'react';
import styled from '@emotion/styled';
import {
	SectionFlex,
	SectionLeft,
	SectionRight,
	SectionTitle,
	SectionWrapper,
} from 'components/Section';

export default () => {
	return (
		<SectionWrapper className="section" background="#f6f6f6">
			<SectionFlex>
				<SectionLeft>
					<VideoWrapper autoPlay muted>
						<source data-src="/animation_2.mp4" type="video/mp4" />
						video 태그를 지원하지 않는 브라우저입니다.
					</VideoWrapper>
				</SectionLeft>
				<SectionRight>
					<SectionTitle color="#333333">
						신경쓰지 않아도
						<br />
						알아서 알려주니까
					</SectionTitle>
				</SectionRight>
			</SectionFlex>
		</SectionWrapper>
	);
};

const VideoWrapper = styled.video`
	position: relative;
	max-width: 80%;
	max-height: 80%;
	height: 80vh;
	z-index: 30;
	vertical-align: middle;
`;
