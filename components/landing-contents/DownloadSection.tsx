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
		<SectionWrapper className="section" background="#6091dc">
			<SectionFlex>
				<SectionLeft>
					<AppImage data-src="/img_app_screen.png" />
				</SectionLeft>
				<SectionRight>
					<TichLogo data-src="/tich_download_section_logo.png" />
					<SectionTitle color="white">
						당신의 청결한
						<br />
						생활습관
						<br />
						첫걸음
					</SectionTitle>
				</SectionRight>
			</SectionFlex>
		</SectionWrapper>
	);
};

const AppImage = styled.img`
	position: relative;
	max-width: 80%;
	max-height: 80%;
	height: 80vh;
	vertical-align: middle;
`;

const TichLogo = styled.img`
	margin-bottom: 35px;
`;
