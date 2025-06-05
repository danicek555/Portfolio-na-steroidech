import { Mail, Phone, ExternalLink, Facebook, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-white text-black">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:danmitka@gmail.com"
                className="flex items-center text-black-300 hover:text-gray transition-colors duration-200"
              >
                <Mail className="w-4 h-4 mr-2" />
                danmitka@gmail.com
              </a>
              <a
                href="tel:+420735872528"
                className="flex items-center text-black-300 hover:text-gray transition-colors duration-200"
              >
                <Phone className="w-4 h-4 mr-2" />
                +420 735 872 528
              </a>
              <a
                href="https://vysledky.czechswimming.cz/lide/59887000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-black-300 hover:text-gray transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Swimming Statistics
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-black-300 hover:text-gray transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/dan_mitka"
                target="_blank"
                className="text-black-300 hover:text-gray transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Daniel Mitka</h3>
            <p className="text-black-300 text-sm leading-relaxed">
              Passionate developer and swimming enthusiast. Building digital
              experiences and tracking athletic performance.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-black-700 mt-8 pt-6 text-center">
          <p className="text-black-400 text-sm">
            &copy; {new Date().getFullYear()} Daniel Mitka. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
