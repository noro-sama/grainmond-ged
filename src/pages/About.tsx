import { Shield, Package, Users, Handshake, Eye, Target } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";

const values = [
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

const About = () => (
  <div>
    {/* Hero */}
    <section className="relative py-24">
      <div className="absolute inset-0">
        <img
          src={aboutImg}
          alt="Grainmond team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-85" />
      </div>
      <div className="container relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4  animate-fade-in-up">
          About Grainmond
        </h1>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg  animate-fade-in-up">
          Lusaka-based supply company providing essential products and services
          to businesses and institutions.
        </p>
      </div>
    </section>

    {/* About content */}
    <section className="py-20">
      <div className="container max-w-3xl">
        <p className="text-muted-foreground leading-relaxed text-lg mb-8">
          Grainmond General Dealers is a Lusaka-based supply company providing
          essential products and services to businesses and institutions. We are
          committed to quality, reliability, and professional service.
        </p>
        <p className="text-muted-foreground leading-relaxed text-lg mb-12">
          Our goal is simple — to supply dependable products that help our
          clients operate smoothly and efficiently.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-muted rounded-lg p-8">
            <div className="flex items-center gap-3 mb-3">
              <Eye size={24} className="text-secondary" />
              <h3 className="font-heading font-bold text-xl text-foreground">
                Vision
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To become a trusted supplier delivering reliable solutions across
              Zambia.
            </p>
          </div>
          <div className="bg-muted rounded-lg p-8">
            <div className="flex items-center gap-3 mb-3">
              <Target size={24} className="text-secondary" />
              <h3 className="font-heading font-bold text-xl text-foreground">
                Mission
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To provide quality products and professional service while
              building strong relationships with our clients.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 bg-muted">
      <div className="container">
        <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
          Why Choose Us
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v) => (
            <div key={v.title} className="text-center">
              <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center mx-auto mb-4">
                <v.icon size={26} className="text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {v.title}
              </h3>
              <p className="text-muted-foreground text-sm">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
