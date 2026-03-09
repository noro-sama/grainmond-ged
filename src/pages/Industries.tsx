import {
  Building2,
  GraduationCap,
  Heart,
  Landmark,
  Factory,
  Home,
} from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "Corporate Offices",
    text: "Furniture, IT equipment, and stationery for modern workplaces.",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    text: "School supplies, furniture, and cleaning materials for learning environments.",
  },
  {
    icon: Heart,
    title: "Healthcare Facilities",
    text: "Medical equipment, cleaning supplies, and essential products for hospitals and clinics.",
  },
  {
    icon: Landmark,
    title: "Government & NGOs",
    text: "Reliable bulk supplies for government offices and non-profit organizations.",
  },
  {
    icon: Factory,
    title: "Agriculture & Farming",
    text: "Safety gear, pesticides, and agricultural equipment for farms.",
  },
  {
    icon: Home,
    title: "Hospitality & Retail",
    text: "Food supplies, cleaning products, and operational essentials for hotels and shops.",
  },
];

const Industries = () => (
  <div>
    <section className="gradient-light py-24">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4  animate-fade-in-up">
          Industries We Serve
        </h1>
        <p className="text-primary-foreground/80 max-w-xl mx-auto text-lg  animate-fade-in-up">
          Grainmond supplies products to a wide range of industries across
          Zambia.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="bg-card rounded-lg p-8 shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center mb-5">
                <ind.icon size={28} className="text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                {ind.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {ind.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Industries;
