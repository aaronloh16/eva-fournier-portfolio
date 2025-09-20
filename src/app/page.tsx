'use client';

import Image from 'next/image';
import { useState } from 'react';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

// Portfolio data with organized before/after projects
const portfolioProjects = [
	// Living Spaces
	{
		id: 1,
		title: 'Living Area Transformation',
		category: 'living-spaces',
		beforeImage: '/portfolio/living-areas/living-area-before-1.webp',
		afterImage: '/portfolio/living-areas/living-area-after-1.webp',
	},
	{
		id: 2,
		title: 'Living Area Styling',
		category: 'living-spaces',
		beforeImage: '/portfolio/living-areas/living-area-before-2.webp',
		afterImage: '/portfolio/living-areas/living-area-after-2.webp',
	},
	{
		id: 3,
		title: 'Living Area Enhancement',
		category: 'living-spaces',
		beforeImage: '/portfolio/living-areas/living-area-before-3.webp',
		afterImage: '/portfolio/living-areas/living-area-after-3.webp',
	},
	{
		id: 4,
		title: 'Basement Sitting Area',
		category: 'living-spaces',
		beforeImage: '/portfolio/living-areas/basement-sitting-area-before-4.webp',
		afterImage: '/portfolio/living-areas/basement-sitting-area-after-4.webp',
	},
	{
		id: 5,
		title: 'Sitting Area Redesign',
		category: 'living-spaces',
		beforeImage: '/portfolio/living-areas/sitting-area-before-5.webp',
		afterImage: '/portfolio/living-areas/sitting-area-after-5.webp',
	},
	{
		id: 6,
		title: 'Living Room Design',
		category: 'living-spaces',
		beforeImage: '/portfolio/living-areas/living-room-before-6.webp',
		afterImage: '/portfolio/living-areas/living-area-after-6.webp',
	},
	{
		id: 7,
		title: 'Living Room Transformation',
		category: 'living-spaces',
		beforeImage: '/portfolio/living-areas/living-room-before-7.webp',
		afterImage: '/portfolio/living-areas/living-room-after-7.webp',
	},
	{
		id: 8,
		title: 'Living Room Styling',
		category: 'living-spaces',
		beforeImage: '/portfolio/living-areas/living-room-before-8.webp',
		afterImage: '/portfolio/living-areas/living-room-after-8.webp',
	},

	// Dining
	{
		id: 9,
		title: 'Dining Room Transformation',
		category: 'dining',
		beforeImage: '/portfolio/dining/dining-before-1.png',
		afterImage: '/portfolio/dining/dining-after-1.png',
	},
	{
		id: 10,
		title: 'Dining Room Styling',
		category: 'dining',
		beforeImage: '/portfolio/dining/dining2-before-2.webp',
		afterImage: '/portfolio/dining/dining2-after-2.webp',
	},
	{
		id: 11,
		title: 'Dining Room Enhancement',
		category: 'dining',
		beforeImage: '/portfolio/dining/dining-before-3.webp',
		afterImage: '/portfolio/dining/dining-after-3.webp',
	},
	{
		id: 12,
		title: 'Dining Room Design',
		category: 'dining',
		beforeImage: '/portfolio/dining/dining-before-4.png',
		afterImage: '/portfolio/dining/dining-after-4.png',
	},
	{
		id: 13,
		title: 'Dining Room Redesign',
		category: 'dining',
		beforeImage: '/portfolio/dining/dining-before-5.png',
		afterImage: '/portfolio/dining/dining-after-5.png',
	},
	{
		id: 14,
		title: 'Dining Room Makeover',
		category: 'dining',
		beforeImage: '/portfolio/dining/dining-before-6.png',
		afterImage: '/portfolio/dining/dining-after-6.png',
	},
	{
		id: 15,
		title: 'Silver Dining Room',
		category: 'dining',
		beforeImage: '/portfolio/dining/silver-dining-before-7.webp',
		afterImage: '/portfolio/dining/silver-dining-after-7.png',
	},

	// Primary Bedrooms
	{
		id: 16,
		title: 'Primary Suite Design',
		category: 'primary-bedrooms',
		beforeImage: '/portfolio/primary-suite/bedroom-before-1.png',
		afterImage: '/portfolio/primary-suite/bedroom-after-1.png',
	},
	{
		id: 17,
		title: 'Balcony Bedroom',
		category: 'primary-bedrooms',
		beforeImage: '/portfolio/primary-suite/balcony-bedroom-before-2.webp',
		afterImage: '/portfolio/primary-suite/balcony-bedroom-after-2.webp',
	},
	{
		id: 18,
		title: 'Primary Bedroom Styling',
		category: 'primary-bedrooms',
		beforeImage: '/portfolio/primary-suite/bedroom-before-3.png',
		afterImage: '/portfolio/primary-suite/bedroom-after-3.png',
	},
	{
		id: 19,
		title: 'Primary Bedroom Enhancement',
		category: 'primary-bedrooms',
		beforeImage: '/portfolio/primary-suite/bedroom-before-4.png',
		afterImage: '/portfolio/primary-suite/bedroom-after-4.png',
	},
	{
		id: 20,
		title: 'Primary Bedroom Transformation',
		category: 'primary-bedrooms',
		beforeImage: '/portfolio/primary-suite/bedroom-before-5.png',
		afterImage: '/portfolio/primary-suite/bedroom-after-5.png',
	},
	{
		id: 21,
		title: 'Main Bedroom Design',
		category: 'primary-bedrooms',
		beforeImage: '/portfolio/primary-suite/main-bedroom-before-5.webp',
		afterImage: '/portfolio/primary-suite/main-bedroom-after-5.webp',
	},

	// Bedrooms
	{
		id: 22,
		title: 'Guest Room',
		category: 'bedrooms',
		beforeImage: '/portfolio/bedrooms/guest-room-before-1.webp',
		afterImage: '/portfolio/bedrooms/guest-room-after-1.webp',
	},
	{
		id: 23,
		title: 'Propeller Bedroom',
		category: 'bedrooms',
		beforeImage: '/portfolio/bedrooms/propeller-bedroom-before-2.webp',
		afterImage: '/portfolio/bedrooms/propeller-bedroom-after-2.webp',
	},
	{
		id: 24,
		title: 'Bedroom Transformation',
		category: 'bedrooms',
		beforeImage: '/portfolio/bedrooms/bedroom-before-3webp.webp',
		afterImage: '/portfolio/bedrooms/bedroom-after-3.webp',
	},
	{
		id: 25,
		title: 'Bedroom Design',
		category: 'bedrooms',
		beforeImage: '/portfolio/bedrooms/bedroom-before-4.png',
		afterImage: '/portfolio/bedrooms/bedroom-after-4.png',
	},
	{
		id: 26,
		title: 'Broom Bedroom',
		category: 'bedrooms',
		beforeImage: '/portfolio/bedrooms/broom-bedroom-before-5.webp',
		afterImage: '/portfolio/bedrooms/broom-bedroom-after-5.webp',
	},
	{
		id: 27,
		title: 'Empty Bedroom Staging',
		category: 'bedrooms',
		beforeImage: '/portfolio/bedrooms/bedroom-before-empty-6.webp',
		afterImage: '/portfolio/bedrooms/bedroom-after-empty-6.webp',
	},

	// Kids Bedrooms
	{
		id: 28,
		title: 'Kids Room Design',
		category: 'kids-bedrooms',
		beforeImage: '/portfolio/kids-room/kidsroom-before-1.png',
		afterImage: '/portfolio/kids-room/kidsroom-after-1.png',
	},
	{
		id: 29,
		title: 'Kids Room Transformation',
		category: 'kids-bedrooms',
		beforeImage: '/portfolio/kids-room/kidsroom-before-2.png',
		afterImage: '/portfolio/kids-room/kids-room-after-2.png',
	},
	{
		id: 30,
		title: 'Pink Kids Bedroom',
		category: 'kids-bedrooms',
		beforeImage: '/portfolio/kids-room/pink-bedroom-before-3.webp',
		afterImage: '/portfolio/kids-room/pink-bedroom-after-3.webp',
	},
	{
		id: 31,
		title: 'Kids Room Styling',
		category: 'kids-bedrooms',
		beforeImage: '/portfolio/kids-room/kidsroom-before-4.png',
		afterImage: '/portfolio/kids-room/kidsroom-after-4.png',
	},
	{
		id: 32,
		title: 'Kids Room Enhancement',
		category: 'kids-bedrooms',
		beforeImage: '/portfolio/kids-room/kidsroom-before-5.png',
		afterImage: '/portfolio/kids-room/kidsroom-after-5.png',
	},
	{
		id: 33,
		title: 'Kids Room Redesign',
		category: 'kids-bedrooms',
		beforeImage: '/portfolio/kids-room/kidsroom-before-6.png',
		afterImage: '/portfolio/kids-room/kidsroom-after-6.png',
	},
	{
		id: 34,
		title: 'Bedroom 4 Kids',
		category: 'kids-bedrooms',
		beforeImage: '/portfolio/kids-room/bedroom4-before-7.webp',
		afterImage: '/portfolio/kids-room/bedroom4-after-7.webp',
	},
	{
		id: 35,
		title: 'Kids Primary Bedroom',
		category: 'kids-bedrooms',
		beforeImage: '/portfolio/kids-room/kid-bedroom-primary-before-8.webp',
		afterImage: '/portfolio/kids-room/kid-bedroom-primary-after-8.webp',
	},
	{
		id: 36,
		title: 'Kids Room Design 9',
		category: 'kids-bedrooms',
		beforeImage: '/portfolio/kids-room/kidsroom-before-9.png',
		afterImage: '/portfolio/kids-room/kidsroom-after-9.png',
	},
	{
		id: 37,
		title: 'Bull Kids Room',
		category: 'kids-bedrooms',
		beforeImage: '/portfolio/kids-room/bull-kids-before-10.webp',
		afterImage: '/portfolio/kids-room/bull-kids-after-10.webp',
	},
];

// Standalone showcase projects (completed spaces)
const showcaseProjects = [
	{
		id: 38,
		title: 'Custom Kitchen Design',
		image: '/portfolio/featured/kitchen-designed-by-eva.webp',
		description: 'Custom kitchen design renovation.',
	},
	{
		id: 39,
		title: 'Redesigned Staircase',
		image: '/portfolio/featured/redesigned-staircase.webp',
		description: 'Beautiful staircase transformation with modern design elements.',
	},
	{
		id: 40,
		title: 'Staged Hallway Design',
		image: '/portfolio/featured/staged-and-designed-hallway-by-eva.webp',
		description: 'Elegant hallway staging and design that creates a welcoming first impression.',
	},
	{
		id: 41,
		title: 'Staged Bookshelf',
		image: '/portfolio/featured/staged-bookshelf.webp',
		description: 'Thoughtfully styled bookshelf.',
	},
	{
		id: 42,
		title: 'Staged Kitchen',
		image: '/portfolio/featured/staged-kitchen.JPG',
		description: 'Professional kitchen staging that highlights the functionality and style of the space.',
	},
];

export default function Home() {
	const [selectedCategory, setSelectedCategory] = useState('living-spaces');

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
								{ id: 'living-spaces', label: 'Living Spaces' },
								{ id: 'dining', label: 'Dining' },
								{ id: 'primary-bedrooms', label: 'Primary Bedrooms' },
								{ id: 'bedrooms', label: 'Bedrooms' },
								{ id: 'kids-bedrooms', label: 'Kids Bedrooms' },
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
										<h4 className="font-serif text-xl text-foreground mb-4 group-hover:text-primary transition-colors">
											{project.title}
										</h4>
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
