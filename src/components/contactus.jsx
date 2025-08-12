import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:gap-8 w-full">
        
        {/* Logo & Tagline */}
        <div className="flex flex-col items-start justify-start">
          <div className="flex items-start">
            <img
              src="/icons/viewr_logo.svg"
              alt="ViewR"
              width={28}
              height={28}
              className="w-7 h-7"
            />
          </div>
          <p className="text-muted-foreground mt-4 text-sm text-start">
            Leading provider of advanced security solutions for businesses and homes.
          </p>
          <span className="mt-4 text-neutral-200 text-sm flex items-center">
            Made in India with
            <Heart className="w-3.5 h-3.5 ml-1 fill-primary text-primary" />
          </span>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h3 className="text-base font-medium text-white">Quick Links</h3>
          <ul className="mt-4 text-sm text-muted-foreground">
            <li className="mt-2"><a href="#products" className="hover:text-foreground transition-all duration-300">Products</a></li>
            <li className="mt-2"><a href="#solutions" className="hover:text-foreground transition-all duration-300">Solutions</a></li>
            <li className="mt-2"><a href="#about" className="hover:text-foreground transition-all duration-300">About Us</a></li>
            <li className="mt-2"><a href="#testimonials" className="hover:text-foreground transition-all duration-300">Testimonials</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col">
          <h3 className="text-base font-medium text-white">Contact Us</h3>
          <ul className="mt-4 text-sm text-muted-foreground space-y-3">
            <li>
              <a href="mailto:help@viewr.in" className="hover:text-foreground transition-all duration-300 flex items-center gap-2 group">
                <div className="w-6 h-6 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <span>help@viewr.in</span>
              </a>
            </li>
            <li>
              <a href="tel:+919891367183" className="hover:text-foreground transition-all duration-300 flex items-center gap-2 group">
                <div className="w-6 h-6 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 98913 67183</span>
              </a>
            </li>
            <li>
              <a href="https://maps.app.goo.gl/bdrULHZTvYASArDQ6" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-all duration-300 flex items-start gap-2 group">
                <div className="w-6 h-6 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>
                  Tower 4, DLF CORPORATE GREENS, 2114-17, Sector 74A, Gurugram,
                  Haryana 122004
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="flex flex-col">
          <h3 className="text-base font-medium text-white">Company</h3>
          <ul className="mt-4 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-foreground transition-all duration-300">About Us</a></li>
            <li className="mt-2"><a href="/privacy-policy" className="hover:text-foreground transition-all duration-300">Privacy Policy</a></li>
            <li className="mt-2"><a href="/terms-conditions" className="hover:text-foreground transition-all duration-300">Terms & Conditions</a></li>
            <li className="mt-2"><a href="#contact" className="hover:text-foreground transition-all duration-300">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
        <p className="text-sm text-muted-foreground mt-8 md:mt-0">
          &copy; {new Date().getFullYear()} Novalance Private Limited. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="/terms-conditions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;