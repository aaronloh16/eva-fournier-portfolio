const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-light mb-4">Studio Heritage</h3>
            <p className="text-white/70 mb-6 max-w-md leading-relaxed">
              Creating beautiful, functional spaces that enhance everyday living through thoughtful design and timeless style.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                Instagram
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                Pinterest
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                LinkedIn
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Full-Service Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Consultation</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Space Planning</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Product Sourcing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Journal</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © 2024 Studio Heritage. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/50 hover:text-white/70 text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-white/70 text-sm transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;