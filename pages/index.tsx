import Head from 'next/head';
import ReactFullpage from '@fullpage/react-fullpage';

import { FULLPAGE_LICENSE_KEY } from 'utils/constants';
import LogoSection from 'components/landing-contents/LogoSection';
import TextAnimationSection from 'components/landing-contents/TextAnimationSection';
import AppSection from 'components/landing-contents/AppSection';

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<ReactFullpage
					licenseKey={FULLPAGE_LICENSE_KEY}
					navigation={true}
					navigationPosition="left"
					render={() => (
						<ReactFullpage.Wrapper>
							<LogoSection />
							<TextAnimationSection />
							<AppSection />
						</ReactFullpage.Wrapper>
					)}
				/>
			</main>
		</div>
	);
}
