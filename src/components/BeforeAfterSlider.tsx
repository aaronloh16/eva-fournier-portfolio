'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
	beforeImage: string;
	afterImage: string;
	title: string;
}

export default function BeforeAfterSlider({
	beforeImage,
	afterImage,
	title,
}: BeforeAfterSliderProps) {
	const [sliderPosition, setSliderPosition] = useState(50);
	const [isDragging, setIsDragging] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	const handleMouseDown = () => {
		setIsDragging(true);
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isDragging || !containerRef.current) return;

		const rect = containerRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const percentage = (x / rect.width) * 100;
		setSliderPosition(Math.max(0, Math.min(100, percentage)));
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		if (!isDragging || !containerRef.current) return;

		const rect = containerRef.current.getBoundingClientRect();
		const x = e.touches[0].clientX - rect.left;
		const percentage = (x / rect.width) * 100;
		setSliderPosition(Math.max(0, Math.min(100, percentage)));
	};

	useEffect(() => {
		const handleGlobalMouseUp = () => setIsDragging(false);
		const handleGlobalMouseMove = (e: MouseEvent) => {
			if (!isDragging || !containerRef.current) return;

			const rect = containerRef.current.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const percentage = (x / rect.width) * 100;
			setSliderPosition(Math.max(0, Math.min(100, percentage)));
		};

		if (isDragging) {
			document.addEventListener('mouseup', handleGlobalMouseUp);
			document.addEventListener('mousemove', handleGlobalMouseMove);
		}

		return () => {
			document.removeEventListener('mouseup', handleGlobalMouseUp);
			document.removeEventListener('mousemove', handleGlobalMouseMove);
		};
	}, [isDragging]);

	return (
		<div
			ref={containerRef}
			className="relative w-full h-[500px] overflow-hidden cursor-ew-resize select-none"
			onMouseMove={handleMouseMove}
			onTouchMove={handleTouchMove}
		>
			{/* After Image (Background) */}
			<Image
				src={afterImage}
				alt={`${title} - After`}
				fill
				className="portfolio-image"
				priority
			/>

			{/* Before Image (Overlay) */}
			<div
				className="absolute top-0 left-0 h-full overflow-hidden transition-all duration-100 ease-out"
				style={{ width: `${sliderPosition}%` }}
			>
				<Image
					src={beforeImage}
					alt={`${title} - Before`}
					fill
					className="portfolio-image"
					priority
				/>
			</div>

			{/* Slider Handle */}
			<div
				className="absolute top-0 h-full w-1 bg-white shadow-lg cursor-ew-resize z-10 transition-all duration-100 ease-out"
				style={{ left: `${sliderPosition}%` }}
				onMouseDown={handleMouseDown}
				onTouchStart={handleMouseDown}
			>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
					<div className="flex space-x-1">
						<div className="w-1 h-4 bg-gray-400 rounded"></div>
						<div className="w-1 h-4 bg-gray-400 rounded"></div>
					</div>
				</div>
			</div>

			{/* Labels */}
			<div className="absolute top-4 left-4 bg-foreground/90 text-background px-3 py-1 rounded-full text-sm font-medium z-20">
				Before
			</div>
			<div className="absolute top-4 right-4 bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium z-20">
				After
			</div>

			{/* Instructions */}
			<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-xs z-20">
				Drag to compare
			</div>
		</div>
	);
}
