import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('🚀 App starting...');

try {
	const rootElement = document.getElementById("root");
	if (!rootElement) {
		throw new Error("Root element not found");
	}
	
	const root = createRoot(rootElement);
	root.render(<App />);
	
	console.log('✅ App rendered successfully');
} catch (error) {
	console.error('❌ App failed to render:', error);
	document.body.innerHTML = `
		<div style="padding: 20px; font-family: Arial, sans-serif;">
			<h1>Something went wrong</h1>
			<p>Error: ${error.message}</p>
			<pre>${error.stack}</pre>
		</div>
	`;
}
