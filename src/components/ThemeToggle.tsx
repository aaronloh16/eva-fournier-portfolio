'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		// Check for saved theme preference or default to light mode
		const savedTheme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches;

		if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
			setIsDark(true);
			document.documentElement.setAttribute('data-theme', 'dark');
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = isDark ? 'light' : 'dark';
		setIsDark(!isDark);

		if (newTheme === 'dark') {
			document.documentElement.setAttribute('data-theme', 'dark');
		} else {
			document.documentElement.removeAttribute('data-theme');
		}

		localStorage.setItem('theme', newTheme);
	};

	return (
		<button
			onClick={toggleTheme}
			className="fixed top-6 right-6 bg-card border border-border rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-50"
			title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
		>
			{isDark ? (
				// Sun icon for light mode
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="text-foreground"
				>
					<circle cx="12" cy="12" r="5" fill="currentColor" />
					<path
						d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
					/>
				</svg>
			) : (
				// Moon icon for dark mode
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="text-foreground"
				>
					<path
						d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
						fill="currentColor"
					/>
				</svg>
			)}
		</button>
	);
}
