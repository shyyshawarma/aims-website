import { Mail, MapPin } from "lucide-react";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandDiscord,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 pb-8 lg:pt-24">
        {/* Top Border */}
        <div className="border-t border-border w-full mx-auto mb-12"></div>

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 text-center lg:text-left">
          {/* Left side: Logo + Contact */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-8">
            {/* Logo */}
            <div className="flex flex-col items-center lg:items-start">
              <img
                src="/image.png"
                alt="AIMS"
                className="w-[200px] aspect-[4/3] object-contain"
              />
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-base font-medium text-white">Contact Us</h3>
              <ul className="mt-4 text-sm text-muted-foreground space-y-3">
                <li className="flex items-center justify-center lg:justify-start gap-2">
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:aims@dtu.ac.in"
                    className="hover:text-foreground transition-all"
                  >
                    aims@dtu.ac.in
                  </a>
                </li>

                <li className="flex items-start justify-center lg:justify-start gap-2">
                  <MapPin className="w-4 h-4 mt-1" />
                  <a
                    href="https://maps.app.goo.gl/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-all leading-snug max-w-xs"
                  >
                    Delhi Technological University, Shahbad Daulatpur, Rohini,
                    Delhi 110042
                  </a>
                </li>
              </ul>

              {/* Divider */}
              <div className="my-6 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

              {/* Social Buttons */}
              <div className="flex justify-center  items-center gap-6">
                <a
                  href="https://www.instagram.com/aimsdtu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-10 w-10 rounded-md bg-gray-50 dark:bg-zinc-900 shadow-input dark:shadow-[0px_0px_1px_1px_#262626]"
                >
                  <IconBrandInstagram className="h-5 w-5 text-neutral-800 dark:text-neutral-300" />
                </a>
                <a
                  href="https://www.linkedin.com/company/aims-dtu/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-10 w-10 rounded-md bg-gray-50 dark:bg-zinc-900 shadow-input dark:shadow-[0px_0px_1px_1px_#262626]"
                >
                  <IconBrandLinkedin className="h-5 w-5 text-neutral-800 dark:text-neutral-300" />
                </a>
                <a
                  href="https://discord.com/invite/cuNDB8TeeJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-10 w-10 rounded-md bg-gray-50 dark:bg-zinc-900 shadow-input dark:shadow-[0px_0px_1px_1px_#262626]"
                >
                  <IconBrandDiscord className="h-5 w-5 text-neutral-800 dark:text-neutral-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full lg:w-[350px] h-[200px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.234942317017!2d77.11871327549691!3d28.750217075623098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d013f013b8b0b%3A0x1ec6a6d6e3b2a8a0!2sDelhi%20Technological%20University!5e0!3m2!1sen!2sin!4v1693999999999!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-border/40 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} AIMS DTU. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
