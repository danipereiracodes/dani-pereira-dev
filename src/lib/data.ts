import balloonImage from '../../public/balloon-cropped.png'
import elefantesImage from '../../public/elefantes.png'

export interface PortfolioItemTypes {
	id: number
	title: string
	buttonLive: string
	buttonCode: string
	buttonInfo: string
	isLive: Boolean
	imageUrl: ImageMetadata | string
	description: string
	status?: string
	techLogos: string[]
	linkLive: string | undefined
	linkCode: string
	technologies: string[]
	popupDescription: any
}

export interface ExperienceDataTypes {
	id: number
	position: string
	company: string
	dates: string
	achievements: string[]
	isFront: boolean
}

export const portfolioData: PortfolioItemTypes[] = [
	{
		id: 1,
		title: 'EL VIAJE DE LOS ELEFANTES',
		buttonLive: '',
		buttonCode: '',
		buttonInfo: '',
		isLive: true,
		imageUrl: elefantesImage,
		description: 'Lorem ipsum',
		techLogos: ['/js.png', '/node-logo.png', '/css.png', '/html.png'],
		linkLive: 'https://elviajedeloselefantesbeta.com/',
		linkCode: '#',
		technologies: ['Wordpress', 'html', 'css', 'Javascript', 'Php'],
		popupDescription: ''
	},
	{
		id: 2,
		title: 'BALLOON APP',
		buttonLive: '',
		buttonCode: '',
		buttonInfo: '',
		isLive: true,
		imageUrl: balloonImage,
		description: 'Lorem ipsum',
		techLogos: ['/js.png', '/react.png'],
		linkLive: 'https://balloon.balloonapp.net/',
		linkCode: 'https://github.com/danipereiracodes/Balloon_Front',
		technologies: ['Html', 'CSS', 'Javascript', 'Reactjs', 'Nodejs', 'Express', 'Sql'],
		popupDescription: ''
	},
	{
		id: 1,
		title: 'EL VIAJE DE LOS ELEFANTES',
		buttonLive: '',
		buttonCode: '',
		buttonInfo: '',
		isLive: true,
		imageUrl: elefantesImage,
		description: 'Lorem ipsum',
		techLogos: ['/js.png', '/node-logo.png', '/css.png', '/html.png'],
		linkLive: 'https://elviajedeloselefantes.com/',
		linkCode: '#',
		technologies: ['Wordpress', 'html', 'css', 'Javascript', 'Php'],
		popupDescription: ''
	}
]

export const experienceData = [
	{
		id: 0,
		position: 'Junior Frontend Developer',
		company: 'Babel Sistemas de información',
		dates: 'July 2022 - Jan 2024',
		achievements: [
			'Collaborated with senior developers to refactor and optimize codebase, resulting in a notable reduction in page load times and improved overall user experience.',
			'Implemented responsive design features and accessibility improvements, leading to a big increase in mobile user engagement and positive user feedback on usability.'
		],
		isFront: true
	},
	{
		id: 1,
		position: 'Junior Frontend Developer',
		company: 'Grupo Reprogalicia',
		dates: 'March 2022 - June 2022',
		achievements: [
			'Worked closely with the development team to migrate UI components from jQuery to React, contributing to a modernized codebase and enhanced maintainability.',
			'Assisted in the integration of RESTful APIs into frontend components, improving data fetching processes and contributing to a more seamless user experience.'
		],
		isFront: true
	},
	{
		id: 0,
		position: 'Web Designer',
		company: 'Pg Webs',
		dates: 'June 2015 - Sept 2021',
		achievements: [
			'Designed and implemented responsive website layouts using Wordpress or plain HTML5, CSS3 and style frameworks like Bootstrap, ensuring cross-browser compatibility and mobile responsiveness.',
			'Collaborated with clients to understand their design preferences and requirements, delivering visually appealing and functional websites that met their needs and received positive feedback.'
		],
		isFront: false
	}
]
