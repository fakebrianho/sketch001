/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { useState, useEffect } from 'react'
import image1 from '../assets/1.jpg'
import image2 from '../assets/2.jpg'
import image3 from '../assets/3.jpg'
import image4 from '../assets/4.jpg'
import image5 from '../assets/5.jpg'
import image6 from '../assets/6.jpg'
import image7 from '../assets/7.jpg'
import image8 from '../assets/8.jpg'

// import
export function Section() {
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

	return (
		<section className='intro'>
			<div className='intro_text'>
				<h1 className='intro_title'>
					<span data-animation='text-reveal'>
						<span>it's </span>
					</span>
					<span data-animation='text-reveal'>
						<span>in the </span>
					</span>
					<span data-animation='text-reveal'>
						<span>Details</span>
					</span>
				</h1>
			</div>
			<div className='intro_line'></div>
			<div className='intro_center-image' data-hidden>
				<img src='/assets/1.jpg' alt='' />
			</div>
			<div className='intro_images'>
				<img src='/assets/2.jpg' alt='' data-hidden />
				<img src='/assets/3.jpg' alt='' data-hidden />
				<img src='/assets/4.jpg' alt='' data-hidden />
				<img src='/assets/5.jpg' alt='' data-hidden />
				<img src='/assets/6.jpg' alt='' data-hidden />
				<img src='/assets/7.jpg' alt='' data-hidden />
				<img src='/assets/8.jpg' alt='' data-hidden />
			</div>
		</section>
	)
}
