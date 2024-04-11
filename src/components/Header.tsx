import React from 'preact/compat'
import { useEffect, useState, useRef } from 'preact/hooks'

const Header = () => {
	const [darkMode, setDarkMode] = useState<boolean | null>(null)
	const myRef = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		const element = document.querySelector('html')

		setDarkMode(true)
		element?.classList.add('dark')
		const handleClick = () => {
			element?.classList.toggle('dark')
			setDarkMode((prevMode) => !prevMode)
		}

		if (myRef.current) {
			myRef.current.addEventListener('click', handleClick)
		}

		return () => {
			if (myRef.current) {
				myRef.current.removeEventListener('click', handleClick)
			}
		}
	}, [])

	useEffect(() => {
		let lastScrollTop = 0
		const elementToAnimate = document.getElementById('header')

		window.addEventListener('scroll', function () {
			const currentScroll = window.scrollY || document.documentElement.scrollTop

			if (currentScroll > lastScrollTop) {
				elementToAnimate?.classList.add('-translate-y-16')
			} else {
				elementToAnimate?.classList.remove('-translate-y-16')
			}

			lastScrollTop = currentScroll <= 0 ? 0 : currentScroll
		})
	}, [])

	return (
		<header
			id="header"
			class="bg-secondary-color fixed top-0 z-50 flex h-16 w-full items-center justify-center gap-4 bg-opacity-75 pl-24 font-mono font-extrabold uppercase text-white backdrop-blur-md backdrop-filter transition duration-500 ease-in md:justify-evenly lg:text-lg dark:bg-transparent dark:text-white"
		>
			<a href="/">
				<div class="flex items-center gap-2">
					<img
						width={25}
						src={'/geek-danipereiradev.png'}
						alt="danipereiradev-icon"
						loading="eager"
						class="invert"
					/>
					<h1>DANIPEREIRA.DEV</h1>
				</div>
			</a>

			<nav class="text-sm">
				<ul class="flex flex-col items-center gap-12 text-white md:flex-row">
					<li class="hover:underline">
						<a href="#">Web Design</a>
					</li>
					<li class="hover:underline">
						<a href="#">Projects</a>
					</li>
					<li class="hover:underline">
						<a href="#">Contact</a>
					</li>
					<li class="flex gap-4">
						<button type="button" class="theme-change" ref={myRef}>
							{!darkMode ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="icon icon-tabler icons-tabler-outline icon-tabler-bulb"
								>
									<>
										<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
										<path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"></path>
										<path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"></path>
										<path d="M9.7 17l4.6 0"></path>
									</>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="icon icon-tabler icons-tabler-outline icon-tabler-bulb-off"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
									<path d="M11.089 7.083a5 5 0 0 1 5.826 5.84m-1.378 2.611a5.012 5.012 0 0 1 -.537 .466a3.5 3.5 0 0 0 -1 3a2 2 0 1 1 -4 0a3.5 3.5 0 0 0 -1 -3a5 5 0 0 1 -.528 -7.544" />
									<path d="M9.7 17h4.6" />
									<path d="M3 3l18 18" />
								</svg>
							)}
						</button>
						<span class="text-2xl">🇪🇸</span>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
