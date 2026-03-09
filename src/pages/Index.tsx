import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Package, Users, Handshake } from "lucide-react";
import heroImg from "@/assets/room-full-of-computers.jpg";
import officeImg from "@/assets/product-office.jpg";
import itImg from "@/assets/product-it.jpg";
import foodImg from "@/assets/product-food.jpg";
import cleaningImg from "@/assets/product-cleaning.jpg";
import ProductCard from "@/components/ProductCard";

const features = [
  {
    icon: Shield,
    title: "Reliable Supply",
    text: "We deliver quality products you can depend on.",
  },
  {
    icon: Package,
    title: "Wide Product Range",
    text: "Multiple products available from one trusted supplier.",
  },
  {
    icon: Users,
    title: "Professional Service",
    text: "Our team is committed to excellent customer support.",
  },
  {
    icon: Handshake,
    title: "Trusted Partner",
    text: "We focus on long-term relationships with our clients.",
  },
];

const previewProducts = [
  {
    title: "Office Furniture & Stationery",
    description:
      "Modern office desks, chairs, cabinets, and everyday office supplies.",
    image: officeImg,
  },
  {
    title: "IT Equipment",
    description:
      "Computers, printers, networking equipment, and office technology solutions.",
    image: itImg,
  },
  {
    title: "Food Supplies",
    description:
      "Beans, rice, kapenta, soya beans, and other essential food products.",
    image: foodImg,
  },
  {
    title: "Cleaning Supplies",
    description:
      "Mops, brooms, detergents, disinfectants, and cleaning equipment.",
    image: cleaningImg,
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Room full of computers"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 gradient-light opacity-35" />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in-up">
              Reliable Supplies for Businesses in Zambia
            </h1>
            <p
              className="text-lg text-primary-foreground/85 mb-8 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.15s" }}
            >
              Grainmond General Dealers supplies quality products to businesses,
              institutions, and organizations. From office furniture and IT
              equipment to food supplies and cleaning materials, we provide
              dependable solutions you can trust.
            </p>
            <div
              className="flex flex-wrap gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
              >
                <Link to="/products">View Products</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
            Why Choose Grainmond
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div key={f.title} className="text-center">
                <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center mx-auto mb-4">
                  <f.icon size={26} className="text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-4">
            Our Products
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            A selection of our product categories — we supply everything your
            business needs.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewProducts.map((p) => (
              <ProductCard key={p.title} {...p} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Contact us today to learn more about our products and services.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
