interface ProductCardProps {
  title: string;
  description: string;
  image: string;
}

const ProductCard = ({ title, description, image }: ProductCardProps) => (
  <div className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300">
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div className="p-6">
      <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

export default ProductCard;
