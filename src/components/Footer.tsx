const Footer = () => {
	return (
		<footer className="bg-charcoal text-white py-24">
			<div className="max-w-7xl mx-auto px-8">
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
					<div className="lg:col-span-2">
						<h3 className="font-serif text-3xl font-light mb-6 tracking-wide">
							Eva Fournier
						</h3>
						<p className="text-white/70 mb-8 max-w-lg leading-relaxed text-lg">
							Creating beautiful, functional spaces that enhance everyday living
							through thoughtful design and timeless style.
						</p>
						<div className="flex space-x-8">
							<a
								href="#"
								className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide uppercase"
							>
								Instagram
							</a>
							<a
								href="#"
								className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide uppercase"
							>
								Pinterest
							</a>
							<a
								href="#"
								className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide uppercase"
							>
								LinkedIn
							</a>
						</div>
					</div>

					<div>
						<h4 className="font-medium mb-6 text-lg">Services</h4>
						<ul className="space-y-3 text-white/70">
							<li>
								<a
									href="#"
									className="hover:text-white transition-colors duration-300 text-sm tracking-wide"
								>
									Full-Service Design
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-white transition-colors duration-300 text-sm tracking-wide"
								>
									Home Staging
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-white transition-colors duration-300 text-sm tracking-wide"
								>
									Consultation
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-white transition-colors duration-300 text-sm tracking-wide"
								>
									Space Planning
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-medium mb-6 text-lg">Company</h4>
						<ul className="space-y-3 text-white/70">
							<li>
								<a
									href="#"
									className="hover:text-white transition-colors duration-300 text-sm tracking-wide"
								>
									About
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-white transition-colors duration-300 text-sm tracking-wide"
								>
									Portfolio
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-white transition-colors duration-300 text-sm tracking-wide"
								>
									Services
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-white transition-colors duration-300 text-sm tracking-wide"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-white/20 mt-16 pt-8 flex flex-col lg:flex-row justify-between items-center">
					<p className="text-white/50 text-sm">
						© 2024 Eva Fournier. All rights reserved.
					</p>
					<div className="flex space-x-8 mt-4 lg:mt-0">
						<a
							href="#"
							className="text-white/50 hover:text-white/70 text-sm transition-colors duration-300"
						>
							Privacy Policy
						</a>
						<a
							href="#"
							className="text-white/50 hover:text-white/70 text-sm transition-colors duration-300"
						>
							Terms of Service
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
