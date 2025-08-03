import { Button } from '@/components/ui/button';

const About = () => {
	return (
		<section id="about" className="py-32 bg-gradient-warm">
			<div className="max-w-7xl mx-auto px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
					<div className="space-y-8">
						<div>
							<span className="inline-block text-sm font-medium tracking-wider uppercase text-sage-green mb-4">
								About Me
							</span>
							<h2 className="font-serif text-5xl md:text-6xl text-charcoal mb-8 font-light leading-tight">
								Creating Beautiful
								<span className="block text-4xl md:text-5xl mt-2 opacity-80 font-extralight">
									Spaces That Inspire
								</span>
							</h2>
						</div>
						<div className="space-y-6 text-soft-gray leading-relaxed text-lg">
							<p>
								I'm a home stager with a love for transforming spaces into warm,
								beautiful homes that buyers fall in love with. I started my
								career in marketing, where I spent years leading creative
								campaigns and working with amazing teams across North America.
							</p>
							<p>
								Now, I get to blend that experience with my passion for
								design—styling spaces to help them shine on the market. Whether
								it's rearranging furniture or adding just the right finishing
								touches, I love creating rooms that feel both welcoming and
								intentional.
							</p>
						</div>
						<div className="pt-4">
							<Button
								variant="outline"
								size="lg"
								className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 px-8 py-4 text-lg font-medium tracking-wide"
							>
								Get In Touch
							</Button>
						</div>
					</div>

					<div className="relative">
						<div className="bg-white p-12 rounded-lg shadow-elegant border border-gray-100">
							<blockquote className="text-2xl text-charcoal font-light italic mb-8 leading-relaxed">
								"Eva's staging made all the difference. Our home sold in just 3
								days above asking price! Her eye for detail is incredible."
							</blockquote>
							<div className="flex items-center gap-6">
								<div className="w-16 h-16 bg-sage-green/20 rounded-full flex items-center justify-center">
									<span className="text-sage-green font-medium text-lg">
										MR
									</span>
								</div>
								<div>
									<div className="font-medium text-charcoal text-lg">
										Mike & Rachel
									</div>
									<div className="text-soft-gray">Sellers, Calgary</div>
								</div>
							</div>
						</div>

						<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sage-green/10 rounded-lg -z-10"></div>
						<div className="absolute -top-6 -left-6 w-20 h-20 bg-sage-green/10 rounded-lg -z-10"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
