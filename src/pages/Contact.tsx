import { MapPin, Phone, Mail, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import FAQAccordion from "@/components/Faq";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    company: "",
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const mailto = `mailto:musongoletracy@gmail.com?subject=Inquiry from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.name} (${form.email})`;
  //   window.open(mailto);
  // };

  return (
    <div>
      <section className="gradient-light py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4 animate-fade-in-up">
            Contact Us
          </h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto text-lg animate-fade-in-up">
            Contact us today to learn more about our products and services.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
                Grainmond General Dealers
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Location
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Meanwood, Lusaka, Zambia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Phone
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      +260 770 411 590
                    </p>
                    <p className="text-muted-foreground text-sm">
                      +260 964 943 500
                    </p>
                    <p className="text-muted-foreground text-sm">
                      +260 772 342 143
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-secondary" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-semibold text-foreground mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:grainmondsupliers@gmail.com"
                      className="text-secondary text-sm hover:underline"
                    >
                      info@grainmond.com
                    </a>
                    <a
                      href="mailto:info@grainmond.com"
                      className="text-secondary text-sm hover:underline"
                    >
                      grainmondsupliers@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center shrink-0">
                    <Facebook size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Facebook
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Grainmond Suppliers
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-lg p-8 shadow-card">
              <h3 className="font-heading font-bold text-xl text-foreground mb-6">
                Send us a Message
              </h3>
              <form
                target="_blank"
                action="https://formsubmit.co/f46556edd6664747fac78ac35d48d3c3"
                method="POST"
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Phone number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Your Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={form.company}
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="pb-6 md:pt-16 pt-8 mx-auto">
          <h3 className="text-center md:text-4xl sm:text-2xl text-xl py-4">
            Our Frequently asked questions
          </h3>
          <FAQAccordion />
        </div>
      </section>
    </div>
  );
};

export default Contact;
