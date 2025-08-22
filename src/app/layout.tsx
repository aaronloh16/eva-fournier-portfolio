import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
	variable: '--font-playfair',
	subsets: ['latin'],
	display: 'swap',
});

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Eva Nowodworski - Interior Design & Home Staging',
	description:
		'Creating beautiful, functional spaces that enhance everyday living through thoughtful design and staging.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							(function() {
								try {
									var savedTheme = localStorage.getItem('theme');
									if (savedTheme === 'dark') {
										document.documentElement.setAttribute('data-theme', 'dark');
									} else {
										document.documentElement.removeAttribute('data-theme');
									}
								} catch (e) {
									// Fallback to light mode if localStorage fails
									document.documentElement.removeAttribute('data-theme');
								}
							})();
						`,
					}}
				/>
			</head>
			<body
				className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
