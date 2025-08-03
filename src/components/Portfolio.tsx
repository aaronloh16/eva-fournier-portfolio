import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Portfolio = () => {
	const projectCategories = {
		'living-room': {
			title: 'Living Room',
			projects: [
				{
					id: 1,
					title: 'Living Room Transformation',
					location: 'Calgary, AB',
					beforeImage:
						'/before-and-after/4820a59f-d24f-4dc1-b915-ac9acb99c00e.png',
					afterImage:
						'/before-and-after/550b1271-9b8c-4eaf-b0df-d2274652f509.png',
					description:
						'Transformed a sparse living area into a cozy, sophisticated space with strategic furniture placement and warm lighting.',
				},
				{
					id: 2,
					title: 'Modern Living Space',
					location: 'Calgary, AB',
					beforeImage:
						'/before-and-after/4820a59f-d24f-4dc1-b915-ac9acb99c00e.png',
					afterImage:
						'/before-and-after/e591b326-239e-4795-b073-f883a4483bee.png',
					description:
						'Created an inviting living room with contemporary styling and balanced color palette.',
				},
			],
		},
		'primary-bedroom': {
			title: 'Primary Bedroom',
			projects: [
				{
					id: 3,
					title: 'Master Bedroom Staging',
					location: 'Calgary, AB',
					beforeImage:
						'/before-and-after/1edcbe38-4c66-482b-bded-5e91b71e018f.png',
					afterImage:
						'/before-and-after/468bcead-0fa7-4238-a9d7-f1b13d409049.png',
					description:
						'Transformed a traditional bedroom into a serene, hotel-like retreat with calming colors and refined styling.',
				},
				{
					id: 4,
					title: 'Modern Primary Suite',
					location: 'Calgary, AB',
					beforeImage:
						'/before-and-after/2378c245-8d98-419c-92a9-0583f35568bc.png',
					afterImage:
						'/before-and-after/6baf7e20-7664-4f65-992b-fbaf6ff895e0.png',
					description:
						'Created a sophisticated primary bedroom with clean lines and luxury hotel aesthetics.',
				},
			],
		},
		'kids-bedroom': {
			title: 'Kids Bedroom',
			projects: [
				{
					id: 5,
					title: 'Kids Bedroom Makeover',
					location: 'Calgary, AB',
					beforeImage:
						'/before-and-after/80cacc64-be42-4cd6-a3c2-71c22c923c08.png',
					afterImage:
						'/before-and-after/620db506-7fc4-4f62-bee3-114e353f7f54.png',
					description:
						'Transformed a cluttered kids room into an organized, stylish space that appeals to young buyers.',
				},
			],
		},
	};

	return (
		<section id="portfolio" className="py-32 bg-warm-white">
			<div className="max-w-7xl mx-auto px-8">
				<div className="text-center mb-20">
					<span className="inline-block text-sm font-medium tracking-wider uppercase text-sage-green mb-4">
						My Work
					</span>
					<h2 className="font-serif text-5xl md:text-6xl text-charcoal mb-8 font-light leading-tight">
						Before & After
						<span className="block text-4xl md:text-5xl mt-2 opacity-80 font-extralight">
							Transformations
						</span>
					</h2>
					<p className="text-soft-gray text-xl max-w-3xl mx-auto leading-relaxed">
						See how strategic staging transforms spaces and helps homes sell
						faster and for higher prices.
					</p>
				</div>

				<Tabs defaultValue="living-room" className="w-full">
					<TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-16 bg-white border border-gray-200 p-1 rounded-lg">
						<TabsTrigger
							value="living-room"
							className="text-sm font-medium tracking-wide uppercase data-[state=active]:bg-charcoal data-[state=active]:text-white"
						>
							Living Room
						</TabsTrigger>
						<TabsTrigger
							value="primary-bedroom"
							className="text-sm font-medium tracking-wide uppercase data-[state=active]:bg-charcoal data-[state=active]:text-white"
						>
							Primary Bedroom
						</TabsTrigger>
						<TabsTrigger
							value="kids-bedroom"
							className="text-sm font-medium tracking-wide uppercase data-[state=active]:bg-charcoal data-[state=active]:text-white"
						>
							Kids Bedroom
						</TabsTrigger>
					</TabsList>

					{Object.entries(projectCategories).map(([key, category]) => (
						<TabsContent key={key} value={key} className="space-y-24">
							{category.projects.map((project) => (
								<div
									key={project.id}
									className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
								>
									<div className="space-y-8">
										<div>
											<h3 className="font-serif text-3xl text-charcoal mb-4 font-light">
												{project.title}
											</h3>
											<p className="text-sage-green font-medium mb-6 text-lg">
												{project.location}
											</p>
											<p className="text-soft-gray leading-relaxed text-lg">
												{project.description}
											</p>
										</div>
									</div>

									<div className="space-y-6">
										<div className="relative group">
											<img
												src={project.beforeImage}
												alt={`${project.title} - Before`}
												className="w-full h-80 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
											/>
											<div className="absolute top-6 left-6 bg-charcoal/90 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
												Before
											</div>
										</div>

										<div className="relative group">
											<img
												src={project.afterImage}
												alt={`${project.title} - After`}
												className="w-full h-80 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
											/>
											<div className="absolute top-6 left-6 bg-sage-green text-white px-4 py-2 rounded-full text-sm font-medium">
												After
											</div>
										</div>
									</div>
								</div>
							))}
						</TabsContent>
					))}
				</Tabs>
			</div>
		</section>
	);
};

export default Portfolio;
