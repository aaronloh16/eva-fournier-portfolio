import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-interior.jpg';

const Hero = () => {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0">
				<img
					src={heroImage}
					alt="Elegant interior design"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-black/30" />
			</div>

			<div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
				<div className="mb-8">
					<span className="inline-block text-sm font-medium tracking-wider uppercase text-white/80 mb-4">
						Eva Fournier
					</span>
				</div>
				<h1 className="font-serif text-6xl md:text-8xl font-light mb-8 leading-tight">
					Timeless Design
					<span className="block text-5xl md:text-7xl mt-4 opacity-90 font-extralight">
						Modern Living
					</span>
				</h1>
				<p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed font-light">
					Creating beautiful, functional spaces that reflect your unique style
					and enhance everyday living through thoughtful design.
				</p>
				<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
					<Button
						variant="secondary"
						size="lg"
						className="bg-white/95 text-charcoal hover:bg-white backdrop-blur-sm px-8 py-4 text-lg font-medium tracking-wide"
					>
						View My Work
					</Button>
					<Button
						variant="outline"
						size="lg"
						className="border-white/70 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-medium tracking-wide"
					>
						Start Your Project
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
