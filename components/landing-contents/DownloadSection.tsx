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

const AppImage = styled.img`
	position: relative;
	max-width: 80%;
	max-height: 80%;
	height: 80vh;
	vertical-align: middle;
`;
