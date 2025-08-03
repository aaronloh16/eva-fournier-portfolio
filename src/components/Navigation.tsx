import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setIsScrolled(scrollTop > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navItems = [
		{ name: 'About', href: '#about' },
		{ name: 'Portfolio', href: '#portfolio' },
		{ name: 'Services', href: '#services' },
		{ name: 'Contact', href: '#contact' },
	];

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? 'bg-white shadow-lg border-b border-gray-200'
					: 'bg-transparent'
			}`}
		>
			<div className="max-w-7xl mx-auto px-8">
				<div className="flex items-center justify-between h-20">
					<div
						className={`font-serif text-3xl font-light tracking-wide transition-colors duration-300 ${
							isScrolled ? 'text-charcoal' : 'text-white'
						}`}
					>
						Eva Fournier
					</div>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center space-x-12">
						{navItems.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className={`transition-colors duration-300 text-sm font-medium tracking-wide uppercase ${
									isScrolled
										? 'text-soft-gray hover:text-charcoal'
										: 'text-white/90 hover:text-white'
								}`}
							>
								{item.name}
							</a>
						))}
						<Button
							variant="outline"
							size="sm"
							className={`ml-8 transition-all duration-300 px-6 py-2 ${
								isScrolled
									? 'border-charcoal text-charcoal hover:bg-charcoal hover:text-white'
									: 'border-white text-white bg-white/10 hover:bg-white hover:text-charcoal'
							}`}
						>
							Get Quote
						</Button>
					</div>

					{/* Mobile menu button */}
					<div className="lg:hidden">
						<Button
							variant="ghost"
							size="sm"
							onClick={() => setIsOpen(!isOpen)}
							className={`transition-colors duration-300 ${
								isScrolled ? 'text-charcoal' : 'text-white'
							}`}
						>
							{isOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</Button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div className="lg:hidden bg-white border-t border-gray-100">
						<div className="px-4 pt-4 pb-6 space-y-3">
							{navItems.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="block px-3 py-3 text-soft-gray hover:text-charcoal transition-colors duration-200 text-sm font-medium tracking-wide uppercase"
									onClick={() => setIsOpen(false)}
								>
									{item.name}
								</a>
							))}
							<div className="px-3 py-3 pt-6">
								<Button
									variant="outline"
									size="sm"
									className="w-full border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300"
								>
									Get Quote
								</Button>
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navigation;
