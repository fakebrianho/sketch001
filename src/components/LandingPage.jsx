'use client'
import { Header } from './Header'
import { Section } from './Section'
import { IntroAnimation } from '@/utils/IntroAnimation'

function LandingPage() {
	IntroAnimation()
	return (
		<>
			<Header />
			<Section />
		</>
	)
}

export default LandingPage
