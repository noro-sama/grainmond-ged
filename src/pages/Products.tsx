import ProductCard from "@/components/ProductCard";
import officeImg from "@/assets/product-office.jpg";
import itImg from "@/assets/product-it.jpg";
import waterImg from "@/assets/product-water.jpg";
import foodImg from "@/assets/product-food.jpg";
import cleaningImg from "@/assets/product-cleaning.jpg";
import agriImg from "@/assets/product-agri.jpg";
import medicalImg from "@/assets/product-medical.jpg";

const products = [
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
    title: "Water Systems",
    description:
      "Water pumps, storage tanks, and related water system equipment.",
    image: waterImg,
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
  {
    title: "Agricultural & Safety Equipment",
    description:
      "Pesticides, protective overalls, gloves, boots, and safety gear.",
    image: agriImg,
  },
  {
    title: "Medical Equipment",
    description:
      "Selected medical equipment supplied to healthcare institutions.",
    image: medicalImg,
  },
];

const Products = () => (
  <div>
    <section className="gradient-hero py-24">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4 animate-fade-in-up">
          Products & Services
        </h1>
        <p className="text-primary-foreground/80 max-w-xl mx-auto text-lg animate-fade-in-up">
          Quality products across multiple categories — everything your business
          needs from one supplier.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <ProductCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Products;
