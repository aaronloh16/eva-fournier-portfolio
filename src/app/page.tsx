'use client';

import Image from 'next/image';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import ThemeToggle from '@/components/ThemeToggle';

// Portfolio data with organized before/after projects
const portfolioProjects = [
	{
		id: 1,
		title: 'Living Room Transformation',
		location: 'Calgary, AB',
		beforeImage: '/portfolio/living-areas/living-room-before3.webp',
		afterImage: '/portfolio/living-areas/living-room-after3.webp',
		description:
			'Transformed this living space into a warm, inviting area perfect for entertaining.',
	},
	{
		id: 2,
		title: 'Fireplace Area Styling',
		location: 'Calgary, AB',
		beforeImage: '/portfolio/living-areas/fireplace-before.webp',
		afterImage: '/portfolio/living-areas/fireplace-after.webp',
		description:
			'Created a cozy focal point that transforms the entire living space.',
	},
	{
		id: 3,
		title: 'Secondary Living Room',
		location: 'Calgary, AB',
		beforeImage: '/portfolio/living-areas/living-room-5-before.webp',
		afterImage: '/portfolio/living-areas/living-room-5-after.webp',
		description:
			'Bright, modern living space with strategic furniture placement and décor.',
	},
	{
		id: 4,
		title: 'Main Bedroom Staging',
		location: 'Calgary, AB',
		beforeImage: '/portfolio/bedrooms/main-bedroom-before.webp',
		afterImage: '/portfolio/bedrooms/main-bedroom-after.webp',
		description:
			'Created a serene, hotel-like retreat with sophisticated styling.',
	},
	{
		id: 5,
		title: 'Pink Bedroom Makeover',
		location: 'Calgary, AB',
		beforeImage: '/portfolio/bedrooms/pink-bedroom-before.webp',
		afterImage: '/portfolio/bedrooms/pink-bedroom-after.webp',
		description: 'Transformed this bedroom into a soft, elegant sanctuary.',
	},
	{
		id: 6,
		title: 'Bedroom 4 Transformation',
		location: 'Calgary, AB',
		beforeImage: '/portfolio/bedrooms/bedroom4-before.webp',
		afterImage: '/portfolio/bedrooms/bedroom4-after.webp',
		description:
			'Modern bedroom design with clean lines and thoughtful styling.',
	},
	{
		id: 7,
		title: 'Kids Primary Bedroom',
		location: 'Calgary, AB',
		beforeImage: '/portfolio/bedrooms/kid-bedroom-primary-before.webp',
		afterImage: '/portfolio/bedrooms/kid-bedroom-primary-after.webp',
		description: 'Fun, functional kids space that appeals to young buyers.',
	},
	{
		id: 8,
		title: 'Guest Room Styling',
		location: 'Calgary, AB',
		beforeImage: '/portfolio/bedrooms/guest-room-before.webp',
		afterImage: '/portfolio/bedrooms/guest-room-after.webp',
		description: 'Welcoming guest room with hotel-inspired comfort and style.',
	},
	{
		id: 9,
		title: 'Baby Room Design',
		location: 'Calgary, AB',
		beforeImage: '/portfolio/bedrooms/baby-room-before.webp',
		afterImage: '/portfolio/bedrooms/baby-room-after.webp',
		description: 'Gentle, nurturing space perfect for a growing family.',
	},
	{
		id: 10,
		title: 'Sitting Area Enhancement',
		location: 'Calgary, AB',
		beforeImage: '/portfolio/bedrooms/sitting-area-before.webp',
		afterImage: '/portfolio/bedrooms/sitting-area-after.webp',
		description: 'Cozy reading corner with perfect lighting and comfort.',
	},
	{
		id: 11,
		title: 'Balcony Bedroom Staging',
		location: 'Calgary, AB',
		beforeImage: '/portfolio/living-areas/balcony-bedroom-before.webp',
		afterImage: '/portfolio/living-areas/balcony-bedroom-after.webp',
		description: 'Bright bedroom space with beautiful natural light.',
	},
	{
		id: 12,
		title: 'Dining Room Styling',
		location: 'Calgary, AB',
		beforeImage: '/portfolio/dining-rooms/dining-before.webp',
		afterImage: '/portfolio/dining-rooms/dining-after.webp',
		description:
			'Created an elegant dining space perfect for family gatherings.',
	},
	{
		id: 13,
		title: 'Closet Organization',
		location: 'Calgary, AB',
		beforeImage: '/portfolio/utility-storage/closet-before.webp',
		afterImage: '/portfolio/utility-storage/closet-after.webp',
		description: 'Expertly organized closet maximizing storage potential.',
	},
	{
		id: 14,
		title: 'Bedroom 6 Transformation',
		location: 'Calgary, AB',
		beforeImage: '/portfolio/utility-storage/bedroom6-before.webp',
		afterImage: '/portfolio/utility-storage/bedroom6-after.webp',
		description:
			'Complete bedroom makeover with modern styling and functionality.',
	},
];

// Standalone showcase projects (completed spaces)
const showcaseProjects = [
	{
		id: 15,
		title: 'Modern Office Space',
		location: 'Calgary, AB',
		image: '/portfolio/offices/office-after.webp',
		description: 'Clean, productive workspace with contemporary styling.',
	},
	{
		id: 16,
		title: 'Elegant Entrance',
		location: 'Calgary, AB',
		image: '/portfolio/entryways/entrance-before.webp',
		description: 'Welcoming entrance that makes a stunning first impression.',
	},
	{
		id: 17,
		title: 'Reading Nook',
		location: 'Calgary, AB',
		image: '/portfolio/living-areas/reading-nook.webp',
		description: 'Cozy reading corner with perfect lighting and comfort.',
	},
	{
		id: 18,
		title: 'Alternative Living Space',
		location: 'Calgary, AB',
		image: '/portfolio/living-areas/living-room-after-2.webp',
		description: 'Additional living space showcase with modern styling.',
	},
	{
		id: 19,
		title: 'Kitchen Design by Eva',
		location: 'Calgary, AB',
		image: '/portfolio/kitchens/kitchen-designed-by-eva.webp',
		description: 'Custom kitchen design showcasing Eva&apos;s signature style.',
	},
	{
		id: 20,
		title: 'Kitchen Front View',
		location: 'Calgary, AB',
		image: '/portfolio/kitchens/kitchen-front.webp',
		description:
			'Beautiful kitchen layout with excellent flow and functionality.',
	},
	{
		id: 21,
		title: 'Kitchen Side Profile',
		location: 'Calgary, AB',
		image: '/portfolio/kitchens/kitchen-side.webp',
		description: 'Detailed view of kitchen workspace and storage solutions.',
	},
	{
		id: 22,
		title: 'Modern Kitchen Design',
		location: 'Calgary, AB',
		image: '/portfolio/kitchens/kitchen3-after.webp',
		description: 'Contemporary kitchen with sleek finishes and smart layout.',
	},
	{
		id: 23,
		title: 'Bedroom Alternative Design',
		location: 'Calgary, AB',
		image: '/portfolio/bedrooms/bedroom-after-alt.webp',
		description: 'Alternative bedroom styling approach with unique character.',
	},
	{
		id: 24,
		title: 'Child Bedroom Design',
		location: 'Calgary, AB',
		image: '/portfolio/bedrooms/child-bedroom-after.webp',
		description:
			'Bright, cheerful child&apos;s room perfect for growing families.',
	},
	{
		id: 25,
		title: 'Utility Room Organization',
		location: 'Calgary, AB',
		image: '/portfolio/utility-storage/utility-room-before.webp',
		description: 'Functional utility space with clean, organized design.',
	},
];

export default function Home() {
	return (
		<div className="min-h-screen bg-background">
			{/* Theme Toggle */}
			<ThemeToggle />

			{/* Navigation */}
			<nav className="px-6 py-8 max-w-6xl mx-auto">
				<div className="flex justify-between items-center">
					<h1 className="font-serif text-2xl font-light text-foreground">
						Eva Fournier
						<span
							className="block text-sm font-normal tracking-wide"
							style={{ color: '#8B9A7A' }}
						>
							Interior Design & Staging
						</span>
					</h1>
					<div className="hidden md:flex space-x-8">
						<a
							href="#about"
							className="text-secondary hover:text-foreground transition-colors"
						>
							About
						</a>
						<a
							href="#portfolio"
							className="text-secondary hover:text-foreground transition-colors"
						>
							Portfolio
						</a>
						<a
							href="#contact"
							className="text-secondary hover:text-foreground transition-colors"
						>
							Contact
						</a>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="px-6 py-20 max-w-6xl mx-auto">
				<div className="text-center max-w-4xl mx-auto">
					<div className="mb-8">
						<span className="inline-block bg-primary-light text-primary-dark px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
							Interior Design & Staging
						</span>
					</div>
					<h2 className="font-serif text-5xl md:text-7xl font-light text-foreground mb-8 leading-tight">
						Timeless Design
						<span className="block text-primary font-normal">That Sells</span>
					</h2>
					<p className="text-xl md:text-2xl text-secondary mb-12 leading-relaxed max-w-2xl mx-auto">
						Creating beautiful, functional spaces that enhance everyday living
						through thoughtful design and strategic staging.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<button
							onClick={() =>
								document
									.getElementById('portfolio')
									?.scrollIntoView({ behavior: 'smooth' })
							}
							className="px-8 py-4 rounded-lg transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
							style={{ backgroundColor: '#8B9A7A', color: 'white' }}
						>
							View My Work
						</button>
						<button
							onClick={() =>
								document
									.getElementById('contact')
									?.scrollIntoView({ behavior: 'smooth' })
							}
							className="px-8 py-4 rounded-lg transition-all duration-300 font-semibold text-lg"
							style={{
								border: '2px solid #8B9A7A',
								color: '#8B9A7A',
								backgroundColor: 'transparent',
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.backgroundColor = '#8B9A7A';
								e.currentTarget.style.color = 'white';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.backgroundColor = 'transparent';
								e.currentTarget.style.color = '#8B9A7A';
							}}
						>
							Get In Touch
						</button>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="px-6 py-16 bg-muted">
				<div className="max-w-4xl mx-auto">
					<h3 className="font-serif text-3xl text-foreground mb-8 text-center">
						About
					</h3>
					<div className="text-secondary leading-relaxed text-center max-w-2xl mx-auto">
						<p className="mb-4">
							I&apos;m a home stager with a passion for transforming spaces into
							warm, beautiful homes that buyers fall in love with.
						</p>
						<p>
							With a background in marketing and a keen eye for design, I help
							homes shine on the market through strategic styling and thoughtful
							arrangement.
						</p>
					</div>
				</div>
			</section>

			{/* Portfolio Section */}
			<section id="portfolio" className="px-6 py-16">
				<div className="max-w-7xl mx-auto">
					<h3 className="font-serif text-3xl text-foreground mb-4 text-center">
						Before & After
					</h3>
					<p className="text-secondary text-center mb-16 max-w-2xl mx-auto">
						See how strategic staging transforms spaces and helps homes sell
						faster
					</p>

					{/* Before/After Projects */}
					<div className="space-y-16 mb-24">
						{portfolioProjects.map((project, index) => (
							<div
								key={project.id}
								className={`grid lg:grid-cols-2 gap-12 items-center ${
									index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
								}`}
							>
								<div
									className={`space-y-6 ${
										index % 2 === 1 ? 'lg:col-start-2' : ''
									}`}
								>
									<div className="mb-6">
										<span className="inline-block bg-primary-light text-primary-dark px-3 py-1 rounded-full text-sm font-medium mb-3">
											Project {String(index + 1).padStart(2, '0')}
										</span>
										<h4 className="font-serif text-3xl text-foreground mb-3">
											{project.title}
										</h4>
										<p className="text-primary font-semibold mb-4 flex items-center">
											<svg
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="currentColor"
												className="mr-2"
											>
												<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
											</svg>
											{project.location}
										</p>
										<p className="text-secondary leading-relaxed text-lg">
											{project.description}
										</p>
									</div>
								</div>

								<div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
									<BeforeAfterSlider
										beforeImage={project.beforeImage}
										afterImage={project.afterImage}
										title={project.title}
									/>
								</div>
							</div>
						))}
					</div>

					{/* Showcase Projects */}
					<div>
						<h3 className="font-serif text-4xl text-foreground mb-4 text-center">
							Featured Work
						</h3>
						<p className="text-secondary text-center mb-16 max-w-2xl mx-auto text-lg">
							Additional projects showcasing elegant design solutions
						</p>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{showcaseProjects.map((project) => (
								<div
									key={project.id}
									className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-border"
								>
									<div className="relative overflow-hidden">
										<Image
											src={project.image}
											alt={project.title}
											width={400}
											height={300}
											className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
									</div>
									<div className="p-6">
										<h4 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
											{project.title}
										</h4>
										<p className="text-primary text-sm font-semibold mb-3 flex items-center">
											<svg
												width="14"
												height="14"
												viewBox="0 0 24 24"
												fill="currentColor"
												className="mr-1"
											>
												<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
											</svg>
											{project.location}
										</p>
										<p className="text-secondary text-sm leading-relaxed">
											{project.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section
				id="contact"
				className="px-6 py-16 bg-foreground text-background"
			>
				<div className="max-w-4xl mx-auto text-center">
					<h3 className="font-serif text-3xl mb-8">Get In Touch</h3>
					<p className="opacity-80 mb-8">
						Ready to transform your space? Let&apos;s discuss your project.
					</p>
					<div className="space-y-2">
						<p>eva@example.com</p>
						<p>(403) 555-0123</p>
						<p className="opacity-60">Calgary, AB</p>
					</div>
				</div>
			</section>
		</div>
	);
}
