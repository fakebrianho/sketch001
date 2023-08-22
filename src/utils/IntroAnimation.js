import { gsap } from 'gsap'
import { Flip } from 'gsap/Flip'
import { useEffect, useState } from 'react'

gsap.registerPlugin(Flip)

function getFinalState(_images, _heroWrapper, _imageState, _setImageState) {
	gsap.set([_images, _heroWrapper], {
		xPercent: -50,
		yPercent: -50,
	})
	let st = Flip.getState(_heroWrapper, _images)
	_setImageState(Flip.getState([_heroWrapper, _images]))
}
function setInitialState(_images, _heroWrapper, _heroImage, _imagesWrapper) {
	_heroWrapper.classList.add('initial')
	_imagesWrapper.classList.add('initial')
	const lineReveal = '.intro_line'
	gsap.set(_images, {
		xPercent: 0,
		yPercent: 0,
		y: 80,
	})
	gsap.set(_heroWrapper, {
		scale: 0.15,
		y: 80,
	})
	gsap.set(_heroImage, {
		scale: 1.5,
	})
	gsap.set(lineReveal, {
		scaleX: 0,
		opacity: 1,
	})
}

function fadeIn(_images, _heroWrapper, _state, _heroImage) {
	return gsap.to([_images, _heroWrapper], {
		y: 0,
		opacity: 1,
		duration: 3,
		ease: 'power3.inOut',
		stagger: 0.1,
		onComplete: () => moveImagesToCenter(_state, _heroWrapper, _heroImage),
	})
}
function moveImagesToCenter(_state, _heroWrapper, _heroImage) {
	Flip.to(_state, {
		duration: 2,
		ease: 'expo.inOut',
		stagger: 0.15,
		onComplete: () => scaleCenter(_heroWrapper, _heroImage),
		//
	})
}
function scaleCenter(_heroWrapper, _heroImage) {
	const tl = gsap.timeline({
		onComplete: () => revealText(),
	})
	tl.to(_heroWrapper, {
		scale: 1,
		duration: 2,
		ease: 'expo.inOut',
	}).to(
		_heroImage,
		{
			scale: 1,
			duration: 3,
			ease: 'expo.inOut',
		},
		0
	)
	return tl
}
function revealText() {
	const titleReveal = 'h1 [data-animation="text-reveal"] > *'
	const navReveal = '.header [data-animation="text-reveal"] > *'
	const lineReveal = '.intro_line'
	const tl = gsap.timeline()
	tl.to(titleReveal, {
		y: 0,
		stagger: 0.2,
		duration: 1,
		ease: 'expo.outIn',
	})
		.to(
			navReveal,
			{
				y: 0,
				stagger: 0.3,
				duration: 1,
				ease: 'expo.outIn',
			},
			0
		)
		.to(
			lineReveal,
			{
				scaleX: 1,
				transformOrigin: 'left center',
			},
			0
		)
	return tl
}
export function IntroAnimation() {
	const [animationState, useAnimationState] = useState(null)
	const [_image, setImages] = useState(null)
	const [_wrapper, setWrapper] = useState(null)
	const [_heroImage, setHero] = useState(null)
	useEffect(() => {
		const heroImage = document.querySelector('.intro_center-image img')
		const heroWrapper = document.querySelector('.intro_center-image')
		const imagesWrapper = document.querySelector('.intro_images')
		const images = [...imagesWrapper.querySelectorAll('img')]
		setImages(images)
		setWrapper(heroWrapper)
		setHero(heroImage)
		getFinalState(images, heroWrapper, animationState, useAnimationState)
		setInitialState(images, heroWrapper, heroImage, imagesWrapper)
	}, [])

	useEffect(() => {
		if (animationState) {
			fadeIn(_image, _wrapper, animationState, _heroImage)
		}
	}, [animationState])
}
