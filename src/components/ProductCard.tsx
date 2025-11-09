import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  rating: number;
}

const ProductCard = ({ image, name, price, rating }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-semibold text-lg text-foreground mb-2">
            {name}
          </h3>
          <div className="flex items-center space-x-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating
                    ? "fill-primary text-primary"
                    : "fill-muted text-muted"
                }`}
              />
            ))}
          </div>
          <p className="text-2xl font-bold text-foreground">{price} ETH</p>
        </div>
        <Button className="w-full">Buy Now</Button>
      </div>
    </Card>
  );
};

export default ProductCard;
