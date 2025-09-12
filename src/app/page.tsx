'use client';

import Image from 'next/image';
import { useState } from 'react';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

// Portfolio data with organized before/after projects
const portfolioProjects = [
	{
		id: 1,
		title: 'Living Room Transformation',
		category: 'living-room',
		location: 'Oakville, ON',
		beforeImage: '/portfolio/living-areas/living-room-before3.webp',
		afterImage: '/portfolio/living-areas/living-room-after3.webp',
		description:
			'Transformed this living space into a warm, inviting area perfect for entertaining.',
	},
	{
		id: 2,
		title: 'Fireplace Area Styling',
		category: 'living-room',
		location: 'Burlington, ON',
		beforeImage: '/portfolio/living-areas/fireplace-before.webp',
		afterImage: '/portfolio/living-areas/fireplace-after.webp',
		description:
			'Created a cozy focal point that transforms the entire living space.',
	},
	{
		id: 3,
		title: 'Secondary Living Room',
		category: 'living-room',
		location: 'Oakville, ON',
		beforeImage: '/portfolio/living-areas/living-room-5-before.webp',
		afterImage: '/portfolio/living-areas/living-room-5-after.webp',
		description:
			'Bright, modern living space with strategic furniture placement and décor.',
	},
	{
		id: 4,
		title: 'Main Bedroom Staging',
		category: 'primary-bedroom',
		location: 'Mississauga, ON',
		beforeImage: '/portfolio/bedrooms/main-bedroom-before.webp',
		afterImage: '/portfolio/bedrooms/main-bedroom-after.webp',
		description:
			'Created a serene, hotel-like retreat with sophisticated styling.',
	},
	{
		id: 5,
		title: 'Pink Bedroom Makeover',
		category: 'kids-bedroom',
		location: 'Oakville, ON',
		beforeImage: '/portfolio/bedrooms/pink-bedroom-before.webp',
		afterImage: '/portfolio/bedrooms/pink-bedroom-after.webp',
		description: 'Transformed this bedroom into a soft, elegant sanctuary.',
	},
	{
		id: 6,
		title: 'Bedroom 4 Transformation',
		category: 'primary-bedroom',
		location: 'Oakville, ON',
		beforeImage: '/portfolio/bedrooms/bedroom4-before.webp',
		afterImage: '/portfolio/bedrooms/bedroom4-after.webp',
		description:
			'Modern bedroom design with clean lines and thoughtful styling.',
	},
	{
		id: 7,
		title: 'Kids Primary Bedroom',
		category: 'kids-bedroom',
		location: 'Burlington, ON',
		beforeImage: '/portfolio/bedrooms/kid-bedroom-primary-before.webp',
		afterImage: '/portfolio/bedrooms/kid-bedroom-primary-after.webp',
		description: 'Fun, functional kids space that appeals to young buyers.',
	},
	{
		id: 8,
		title: 'Guest Room Styling',
		category: 'primary-bedroom',
		location: 'Oakville, ON',
		beforeImage: '/portfolio/bedrooms/guest-room-before.webp',
		afterImage: '/portfolio/bedrooms/guest-room-after.webp',
		description: 'Welcoming guest room with hotel-inspired comfort and style.',
	},
	{
		id: 9,
		title: 'Baby Room Design',
		category: 'kids-bedroom',
		location: 'Oakville, ON',
		beforeImage: '/portfolio/bedrooms/baby-room-before.webp',
		afterImage: '/portfolio/bedrooms/baby-room-after.webp',
		description: 'Gentle, nurturing space perfect for a growing family.',
	},
	{
		id: 10,
		title: 'Sitting Area Enhancement',
		category: 'living-room',
		location: 'Oakville, ON',
		beforeImage: '/portfolio/bedrooms/sitting-area-before.webp',
		afterImage: '/portfolio/bedrooms/sitting-area-after.webp',
		description: 'Cozy reading corner with perfect lighting and comfort.',
	},
	{
		id: 11,
		title: 'Balcony Bedroom Staging',
		category: 'primary-bedroom',
		location: 'Oakville, ON',
		beforeImage: '/portfolio/living-areas/balcony-bedroom-before.webp',
		afterImage: '/portfolio/living-areas/balcony-bedroom-after.webp',
		description: 'Bright bedroom space with beautiful natural light.',
	},
	{
		id: 12,
		title: 'Dining Room Styling',
		category: 'dining',
		location: 'Mississauga, ON',
		beforeImage: '/portfolio/dining-rooms/dining-before.webp',
		afterImage: '/portfolio/dining-rooms/dining-after.webp',
		description:
			'Created an elegant dining space perfect for family gatherings.',
	},
	{
		id: 13,
		title: 'Closet Organization',
		category: 'storage',
		location: 'Oakville, ON',
		beforeImage: '/portfolio/dining-rooms/dining2-before.webp',
		afterImage: '/portfolio/dining-rooms/dining2-after.webp',
		description: 'Expertly organized closet maximizing storage potential.',
	},
	{
		id: 14,
		title: 'Bedroom 6 Transformation',
		category: 'primary-bedroom',
		location: 'Oakville, ON',
		beforeImage: '/portfolio/utility-storage/bedroom6-before.webp',
		afterImage: '/portfolio/utility-storage/bedroom6-after.webp',
		description:
			'Complete bedroom makeover with modern styling and functionality.',
	},
	{
		id: 15,
		title: 'Bedroom 7 Transformation',
		category: 'primary-bedroom',
		location: 'Oakville, ON',
		beforeImage: '/portfolio/bedrooms/bedroom-after-alt.webp',
		afterImage: '/portfolio/living-areas/reading-nook.webp',
		description:
			'Complete bedroom makeover with modern styling and functionality.',
	},
	{
		id: 16,
		title: 'basement sitting room Transformation',
		category: 'primary-bedroom',
		location: 'Oakville, ON',
		beforeImage: '/portfolio/living-areas/basement-sitting-area-before.webp',
		afterImage: '/portfolio/living-areas/living-room-after-2.webp',
		description:
			'Complete bedroom makeover with modern styling and functionality.',
	},
];

// Standalone showcase projects (completed spaces)
const showcaseProjects = [
	{
		id: 19,
		title: 'Custom Kitchen Design',
		location: 'Oakville, ON',
		image: '/portfolio/kitchens/kitchen-designed-by-eva.webp',
		description: 'Custom kitchen design renovation showcasing all my personal choices. (I have a before photo of the old kitchen as well).',
	},
];

export default function Home() {
	const [selectedCategory, setSelectedCategory] = useState('living-room');

	const smoothScrollTo = (elementId: string) => {
		console.log('Smooth scrolling to:', elementId); // Debug log
		const element = document.getElementById(elementId);
		if (element) {
			const offsetTop = element.offsetTop;
			console.log('Element found, offset:', offsetTop); // Debug log

			// Try different smooth scroll methods for better compatibility
			try {
				window.scrollTo({
					top: offsetTop - 80,
					behavior: 'smooth',
				});
			} catch {
				// Fallback for older browsers
				element.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
			}
		} else {
			console.log('Element not found:', elementId); // Debug log
		}
	};

	const filteredProjects = portfolioProjects.filter((project) => {
		return project.category === selectedCategory;
	});

	return (
		<div className="min-h-screen bg-background">
			{/* Navigation */}
			<nav className="px-6 py-8 max-w-6xl mx-auto">
				<div className="flex justify-between items-center">
					<h1 className="font-serif text-2xl font-light text-foreground">
						Eva Nowodworski
						<span
							className="block text-sm font-normal tracking-wide"
							style={{ color: '#8B9A7A' }}
						>
							Home Staging & Design
						</span>
					</h1>
					<div className="hidden md:flex space-x-6 items-center">
						<button
							onClick={(e) => {
								e.preventDefault();
								smoothScrollTo('about');
							}}
							className="text-secondary hover:text-foreground transition-colors cursor-pointer bg-transparent border-none"
						>
							About
						</button>
						<button
							onClick={(e) => {
								e.preventDefault();
								smoothScrollTo('portfolio');
							}}
							className="text-secondary hover:text-foreground transition-colors cursor-pointer bg-transparent border-none"
						>
							Portfolio
						</button>
						<button
							onClick={(e) => {
								e.preventDefault();
								smoothScrollTo('contact');
							}}
							className="text-secondary hover:text-foreground transition-colors cursor-pointer bg-transparent border-none"
						>
							Contact
						</button>
						<a
							href="/Eva Nowodworski Resume.pdf"
							download="Eva Nowodworski Resume.pdf"
							className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
							style={{
								backgroundColor: '#8B9A7A',
								color: 'white',
							}}
						>
							Download Resume
						</a>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="px-6 py-2 relative">
				<div className="text-center">
					{/* Background for text content and buttons */}
					<div
						className="relative px-20 py-16 rounded-3xl mx-2 md:mx-4 lg:mx-6"
						style={{
							background:
								'linear-gradient(135deg, #fefcfb 0%, #e8e2d8 50%, #fefcfb 100%)',
						}}
					>
						<div className="mb-8">
							<span className="inline-block bg-primary-light text-primary-dark px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
								Home Staging & Design
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

						{/* Buttons inside background */}
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<button
								onClick={() => smoothScrollTo('portfolio')}
								className="px-8 py-4 rounded-lg transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
								style={{ backgroundColor: '#8B9A7A', color: 'white' }}
							>
								View My Work
							</button>
							<button
								onClick={() => smoothScrollTo('contact')}
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
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="px-6 py-16 bg-muted">
				<div className="max-w-4xl mx-auto">
					<h3 className="font-serif text-5xl md:text-6xl text-foreground mb-12 text-center font-light">
						About Me
					</h3>
					<div className="text-secondary leading-relaxed text-center max-w-2xl mx-auto">
						<p className="mb-4">
							Hi, I&apos;m Eva. I&apos;m a home stager with a love for
							transforming spaces into warm, beautiful homes that buyers fall in
							love with. I started my career in marketing, where I spent years
							leading creative campaigns and working with amazing teams across
							North America in the beauty industry.
						</p>
						<p>
							Today, I get to blend my past fashion experience with my passion for
							design—styling spaces to help them shine on the market. Whether
							it&apos;s rearranging furniture or adding just the right finishing
							touches, I love creating rooms that feel both welcoming and
							intentional.
						</p>
					</div>
				</div>
			</section>

			{/* Portfolio Section */}
			<section id="portfolio" className="px-6 py-16">
				<div className="max-w-7xl mx-auto">
					<h3 className="font-serif text-5xl md:text-6xl text-foreground mb-8 text-center font-light">
						Before & After
					</h3>
					<p className="text-secondary text-center mb-8 max-w-2xl mx-auto">
						Strategic staging transforms spaces making buyers fall in love with the home the moment they walk through the door.
					</p>

					{/* Filter Buttons */}
					<div className="flex justify-center mb-16">
						<div className="flex flex-wrap gap-3 bg-muted px-6 py-4 rounded-full">
							{[
								{ id: 'living-room', label: 'Living Areas' },
								{ id: 'kids-bedroom', label: 'Kids Rooms' },
								{ id: 'primary-bedroom', label: 'Primary Suite' },
								{ id: 'dining', label: 'Dining' },
							].map((category) => (
								<button
									key={category.id}
									onClick={() => setSelectedCategory(category.id)}
									className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
									style={{
										backgroundColor:
											selectedCategory === category.id
												? '#8B9A7A'
												: 'transparent',
										color:
											selectedCategory === category.id ? 'white' : '#6b645c',
									}}
								>
									{category.label}
								</button>
							))}
						</div>
					</div>

					{/* Before/After Projects */}
					<div className="space-y-20 mb-24">
						{filteredProjects.map((project) => (
							<div key={project.id} className="max-w-6xl mx-auto group">
								<div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 bg-card">
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
											className="w-full h-64 featured-image transition-transform duration-500 group-hover:scale-110"
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
				className="px-6 py-20 relative overflow-hidden"
				style={{
					backgroundColor: '#f0ebe5',
					color: '#4a453f',
				}}
			>
				{/* Enhanced background with texture */}
				<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
				<div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>

				<div className="max-w-4xl mx-auto text-center relative z-10">
					<h3 className="font-serif text-5xl mb-8">Let&apos;s Get In Touch!</h3>
					<p className="opacity-90 mb-12 text-lg leading-relaxed">
						Whether you&apos;re a realtor looking to enhance listings or a
						homeowner preparing to sell, I&apos;m here to help create spaces
						that captivate and sell.
					</p>

					<div className="space-y-4 mb-8">
						<p className="text-lg tracking-wide text-center">
							📧 eva_fournier@yahoo.ca
						</p>
						<p className="text-lg tracking-wide text-center">📞 905-464-8006</p>
					</div>

					{/* Resume Download Button */}
					<a
						href="/Eva Nowodworski Resume.pdf"
						download="Eva Nowodworski Resume.pdf"
						className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium transition-all duration-300 hover:opacity-90 border rounded-lg"
						style={{
							color: '#4a453f',
							borderColor: '#4a453f20',
							backgroundColor: 'transparent',
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.backgroundColor = '#4a453f10';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.backgroundColor = 'transparent';
						}}
					>
						Download Resume
					</a>
				</div>
			</section>
		</div>
	);
}
