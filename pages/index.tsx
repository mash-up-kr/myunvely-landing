import Head from 'next/head';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import ReactFullpage from '@fullpage/react-fullpage';
import styled from '@emotion/styled';

import { FULLPAGE_LICENSE_KEY } from 'utils/constants';
import LogoSection from 'components/landing-contents/LogoSection';

interface FullPageProps {
	fullpageApi: any;
	state: any;
}

export default function Home() {
	const [toggle, setToggle] = useState(false);
	const { x } = useSpring({ from: { x: 0 }, x: toggle ? 1 : 0, config: { duration: 1000 } });
	return (
		<div className="container">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* <header>
				<Header>header</Header>
			</header> */}

			<main>
				<ReactFullpage
					licenseKey={FULLPAGE_LICENSE_KEY}
					navigation={true}
					render={({ state, fullpageApi }: FullPageProps) => (
						<ReactFullpage.Wrapper>
							<LogoSection />
							<div className="section">asdcas</div>
							<SubDiv className="section" />
						</ReactFullpage.Wrapper>
					)}
				/>
				{/* <MainDiv>
					<SpringTest onClick={() => setToggle(!toggle)}>
						<AnimatedDiv
							style={{
								opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
								transform: x
									.interpolate({
										range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
										output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
									})
									.interpolate(x => `scale(${x})`),
							}}
						>
							test
						</AnimatedDiv>
					</SpringTest>
				</MainDiv>
				<SubDiv /> */}
			</main>

			{/* <footer>FOOTER</footer> */}
		</div>
	);
}

const Header = styled.div`
	top: 0;
	position: fixed;
	background-color: transparent;
	z-index: 999;
	transition: background-color 0.25s ease-in-out;
`;
const MainDiv = styled.div`
	height: 100vh;
	background-size: cover;
	background-position: 50%;
	background-repeat: no-repeat;
	background-image: url(https://static.toss.im/assets/homepage/hero.png);
`;

const SpringTest = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	& div {
		font-weight: 600;
		font-size: 8em;
		will-change: opacity;
	}
`;
const AnimatedDiv = styled(animated.div)`
	font-weight: 600;
	font-size: 8em;
	will-change: opacity;
`;

const SubDiv = styled.div`
	height: 200px;
	background: green;
`;
