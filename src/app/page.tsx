'use client';

import Image from 'next/image';
import { useState } from 'react';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

// Portfolio data with organized before/after projects
const portfolioProjects = [
	// Living Spaces
	{
		id: 1,
		title: 'Living Room Transformation',
		category: 'living-spaces',
		beforeImage: '/portfolio/living-areas/living-room-before3.png',
		afterImage: '/portfolio/living-areas/living-room-after3.webp',
	},
	{
		id: 2,
		title: 'Fireplace Area Styling',
		category: 'living-spaces',
		beforeImage: '/portfolio/living-areas/fireplace-before.webp',
		afterImage: '/portfolio/living-areas/fireplace-after.webp',
	},
	{
		id: 3,
		title: 'Secondary Living Room',
		category: 'living-spaces',
		beforeImage: '/portfolio/living-areas/living-room-5-before.webp',
		afterImage: '/portfolio/living-areas/living-room-5-after.webp',
	},
	{
		id: 4,
		title: 'Sitting Area Enhancement',
		category: 'living-spaces',
		beforeImage: '/portfolio/living-areas/sitting-area-before.webp',
		afterImage: '/portfolio/living-areas/sitting-area-after.webp',
	},
	{
		id: 5,
		title: 'Basement Sitting Area',
		category: 'living-spaces',
		beforeImage: '/portfolio/living-areas/basement-sitting-area-before.webp',
		afterImage: '/portfolio/living-areas/basement-sitting-area-after.webp',
	},

	// Dining
	{
		id: 6,
		title: 'Dining Room Styling',
		category: 'dining',
		beforeImage: '/portfolio/dining/dining-before.webp',
		afterImage: '/portfolio/dining/dining-after.webp',
	},
	{
		id: 7,
		title: 'Dining Room 2',
		category: 'dining',
		beforeImage: '/portfolio/dining/dining2-before.webp',
		afterImage: '/portfolio/dining/dining2-after.webp',
	},
	{
		id: 8,
		title: 'Dining Room 10',
		category: 'dining',
		beforeImage: '/portfolio/dining/dining-before-10.png',
		afterImage: '/portfolio/dining/dining-after-10.png',
	},
	{
		id: 9,
		title: 'Dining Room 11',
		category: 'dining',
		beforeImage: '/portfolio/dining/dining-before-11.png',
		afterImage: '/portfolio/dining/dining-after-11.png',
	},
	{
		id: 10,
		title: 'Dining Room 12',
		category: 'dining',
		beforeImage: '/portfolio/dining/dining-before-12.png',
		afterImage: '/portfolio/dining/dining-after-12.png',
	},
	{
		id: 11,
		title: 'Dining Room 13',
		category: 'dining',
		beforeImage: '/portfolio/dining/dining-before-13.png',
		afterImage: '/portfolio/dining/dining-after-13.png',
	},
	{
		id: 12,
		title: 'Dining Room 14',
		category: 'dining',
		beforeImage: '/portfolio/dining/dining-before-14.png',
		afterImage: '/portfolio/dining/dining-after-14.png',
	},

	// Primary Bedrooms
	{
		id: 13,
		title: 'Primary Suite 10',
		category: 'primary-bedrooms',
		beforeImage: '/portfolio/primary-suite/bedroom-10-before.png',
		afterImage: '/portfolio/primary-suite/bedroom-10-after.png',
	},
	{
		id: 14,
		title: 'Primary Suite 11',
		category: 'primary-bedrooms',
		beforeImage: '/portfolio/primary-suite/bedroom-11-before.png',
		afterImage: '/portfolio/primary-suite/bedroom-11-after.png',
	},
	{
		id: 15,
		title: 'Primary Suite 13',
		category: 'primary-bedrooms',
		beforeImage: '/portfolio/primary-suite/bedroom-13-before.png',
		afterImage: '/portfolio/primary-suite/bedroom-13-after.png',
	},
	{
		id: 16,
		title: 'Primary Suite 14',
		category: 'primary-bedrooms',
		beforeImage: '/portfolio/primary-suite/bedroom-14-before.png',
		afterImage: '/portfolio/primary-suite/bedroom-14-after.png',
	},
	{
		id: 17,
		title: 'Primary Suite 15',
		category: 'primary-bedrooms',
		beforeImage: '/portfolio/primary-suite/bedroom-15-before.png',
		afterImage: '/portfolio/primary-suite/bedroom-15-after.png',
	},

	// Bedrooms
	{
		id: 18,
		title: 'Main Bedroom',
		category: 'bedrooms',
		beforeImage: '/portfolio/bedrooms/main-bedroom-before.webp',
		afterImage: '/portfolio/bedrooms/main-bedroom-after.webp',
	},
	{
		id: 19,
		title: 'Bedroom 4',
		category: 'bedrooms',
		beforeImage: '/portfolio/bedrooms/bedroom4-before.webp',
		afterImage: '/portfolio/bedrooms/bedroom4-after.webp',
	},
	{
		id: 20,
		title: 'Guest Room',
		category: 'bedrooms',
		beforeImage: '/portfolio/bedrooms/guest-room-before.webp',
		afterImage: '/portfolio/bedrooms/guest-room-after.webp',
	},
	{
		id: 21,
		title: 'Balcony Bedroom',
		category: 'bedrooms',
		beforeImage: '/portfolio/bedrooms/balcony-bedroom-before.webp',
		afterImage: '/portfolio/bedrooms/balcony-bedroom-after.webp',
	},
	{
		id: 22,
		title: 'Bedroom 5',
		category: 'bedrooms',
		beforeImage: '/portfolio/bedrooms/bedroom-5-before.webp',
		afterImage: '/portfolio/bedrooms/bedroom-5-after.webp',
	},
	{
		id: 23,
		title: 'Bedroom 12',
		category: 'bedrooms',
		beforeImage: '/portfolio/bedrooms/bedroom-12-before.png',
		afterImage: '/portfolio/bedrooms/bedroom-12-after.png',
	},

	// Kids Bedrooms
	{
		id: 24,
		title: 'Pink Bedroom',
		category: 'kids-bedrooms',
		beforeImage: '/portfolio/kids-room/pink-bedroom-before.webp',
		afterImage: '/portfolio/kids-room/pink-bedroom-after.webp',
	},
	{
		id: 25,
		title: 'Kids Primary Bedroom',
		category: 'kids-bedrooms',
		beforeImage: '/portfolio/kids-room/kid-bedroom-primary-before.webp',
		afterImage: '/portfolio/kids-room/kid-bedroom-primary-after.webp',
	},
	{
		id: 26,
		title: 'Kids Room 10',
		category: 'kids-bedrooms',
		beforeImage: '/portfolio/kids-room/kidsroom-before-10.png',
		afterImage: '/portfolio/kids-room/kidsroom-after-10.png',
	},
	{
		id: 27,
		title: 'Kids Room 11',
		category: 'kids-bedrooms',
		beforeImage: '/portfolio/kids-room/kidsroom-before-11.png',
		afterImage: '/portfolio/kids-room/kids-room-after-11.png',
	},
	{
		id: 28,
		title: 'Kids Room 12',
		category: 'kids-bedrooms',
		beforeImage: '/portfolio/kids-room/kidsroom-before-12.png',
		afterImage: '/portfolio/kids-room/kidsroom-after-12.png',
	},
	{
		id: 29,
		title: 'Kids Room 13',
		category: 'kids-bedrooms',
		beforeImage: '/portfolio/kids-room/kidsroom-before-13.png',
		afterImage: '/portfolio/kids-room/kidsroom-after-13.png',
	},
	{
		id: 30,
		title: 'Kids Room 14',
		category: 'kids-bedrooms',
		beforeImage: '/portfolio/kids-room/kidsroom-before-14.png',
		afterImage: '/portfolio/kids-room/kidsroom-after-14.png',
	},
	{
		id: 31,
		title: 'Kids Room 15',
		category: 'kids-bedrooms',
		beforeImage: '/portfolio/kids-room/kidsroom-before-15.png',
		afterImage: '/portfolio/kids-room/kidsroom-after-15.png',
	},
];

// Standalone showcase projects (completed spaces)
const showcaseProjects = [
	{
		id: 19,
		title: 'Custom Kitchen Design',
		location: 'Oakville, ON',
		image: '/portfolio/featured/kitchen-designed-by-eva.webp',
		description: 'Custom kitchen design renovation showcasing all my personal choices. (I have a before photo of the old kitchen as well).',
	},
	{
		id: 20,
		title: 'Bathroom Design',
		location: 'Oakville, ON',
		image: '/portfolio/featured/bathroom.webp',
		description: 'Beautiful bathroom transformation with modern fixtures and elegant styling.',
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
