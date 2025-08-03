import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🖼️  Optimizing images for web deployment...');

// Check if ImageMagick is installed
try {
	execSync('convert --version', { stdio: 'ignore' });
} catch (error) {
	console.log('⚠️  ImageMagick not found. Please install it for image optimization:');
	console.log('   macOS: brew install imagemagick');
	console.log('   Ubuntu: sudo apt-get install imagemagick');
	console.log('   Windows: Download from https://imagemagick.org/');
	console.log('   Skipping image optimization...');
	process.exit(0);
}

// Create optimized images directory
const optimizedDir = 'public/optimized';
if (!fs.existsSync(optimizedDir)) {
	fs.mkdirSync(optimizedDir, { recursive: true });
}

// Optimize hero image
const heroImage = 'src/assets/hero-interior.jpg';
if (fs.existsSync(heroImage)) {
	console.log('📸 Optimizing hero image...');
	
	// Create WebP version
	execSync(`convert "${heroImage}" -quality 85 -resize 1920x "public/optimized/hero-interior.webp"`);
	
	// Create responsive sizes
	execSync(`convert "${heroImage}" -quality 85 -resize 1200x "public/optimized/hero-interior-1200.webp"`);
	execSync(`convert "${heroImage}" -quality 85 -resize 800x "public/optimized/hero-interior-800.webp"`);
	
	console.log('✅ Hero image optimized');
}

// Optimize portfolio images
const portfolioDir = 'public/before-and-after';
if (fs.existsSync(portfolioDir)) {
	console.log('📸 Optimizing portfolio images...');
	
	const files = fs.readdirSync(portfolioDir).filter(file => 
		file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')
	);
	
	files.forEach(file => {
		const inputPath = path.join(portfolioDir, file);
		const nameWithoutExt = path.parse(file).name;
		
		// Create WebP version
		execSync(`convert "${inputPath}" -quality 85 -resize 800x "public/optimized/${nameWithoutExt}.webp"`);
		
		console.log(`✅ Optimized ${file}`);
	});
}

console.log('🎉 Image optimization complete!');
console.log('💡 Consider updating your components to use WebP images for better performance.'); 