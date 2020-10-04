import styled from '@emotion/styled';

export const SectionWrapper = styled.div<{ background: string }>`
	position: relative;
	background-color: ${props => props.background};
`;

export const SectionFlex = styled.div`
	display: flex;
`;

export const SectionLeft = styled.div`
	flex: 3;
	text-align: right;
	align-items: center;
	justify-content: center;

	> * {
		margin-top: 10%;
	}
`;

export const SectionRight = styled.div`
	flex: 2;
	display: flex;
	align-items: center;
	text-align: left;
`;

export const SectionTitle = styled.div<{ color: string }>`
	position: relative;
	display: inline-block;
	line-height: 60px;
	font-size: 36px;
	margin-left: 30px;
	color: ${props => props.color};
	text-align: left;
	font-weight: 700;
`;
