import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="gradient-light text-primary-foreground">
    <div className="container py-16">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-heading font-bold mb-4">Grainmond</h3>
          <p className="text-primary-foreground/80 text-sm leading-relaxed">
            Grainmond General Dealers — your trusted supply partner in Zambia.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">
            Quick Links
          </h4>
          <nav className="space-y-2">
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about" },
              { label: "Products & Services", to: "/products" },
              { label: "Industries", to: "/industries" },
              { label: "Contact Us", to: "/contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="block text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">
            Contact Info
          </h4>
          <div className="space-y-3 text-sm text-primary-foreground/80">
            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>Meanwood, Lusaka, Zambia</span>
            </div>
            <div className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 shrink-0" />
              <div>
                <p>+260 770 411 590</p>
                <p>+260 964 943 500</p>
                <p>+260 772 342 143</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0" />
              <a
                href="mailto:grainmondsupliers@gmail.com"
                className="hover:text-secondary transition-colors"
              >
                grainmondsupliers@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-12 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Grainmond General Dealers. All rights
        reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
