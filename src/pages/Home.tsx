import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, ShoppingBag, Users, Star } from "lucide-react";

const Home = () => {
  const products = [
    {
      image: "/placeholder.svg",
      name: "Digital Artwork Collection",
      price: "2.5",
      rating: 5,
    },
    {
      image: "/placeholder.svg",
      name: "Premium NFT Bundle",
      price: "1.8",
      rating: 4,
    },
    {
      image: "/placeholder.svg",
      name: "Exclusive Music Album",
      price: "0.9",
      rating: 5,
    },
    {
      image: "/placeholder.svg",
      name: "Virtual Real Estate",
      price: "5.2",
      rating: 4,
    },
    {
      image: "/placeholder.svg",
      name: "Limited Edition Collectible",
      price: "3.1",
      rating: 5,
    },
    {
      image: "/placeholder.svg",
      name: "Gaming Assets Pack",
      price: "1.5",
      rating: 4,
    },
     {
      image: "/placeholder.svg",
      name: "Digital Artwork Collection",
      price: "2.5",
      rating: 5,
    },
    {
      image: "/placeholder.svg",
      name: "Premium NFT Bundle",
      price: "1.8",
      rating: 4,
    },
    {
      image: "/placeholder.svg",
      name: "Exclusive Music Album",
      price: "0.9",
      rating: 5,
    },
    {
      image: "/placeholder.svg",
      name: "Virtual Real Estate",
      price: "5.2",
      rating: 4,
    },
    {
      image: "/placeholder.svg",
      name: "Limited Edition Collectible",
      price: "3.1",
      rating: 5,
    },
    {
      image: "/placeholder.svg",
      name: "Gaming Assets Pack",
      price: "1.5",
      rating: 4,
    },
  ];

  const categories = [
    { name: "Face masks", image: "/placeholder.svg" },
    { name: "Wall decor", image: "/placeholder.svg" },
    { name: "Gift Ideas", image: "/placeholder.svg" },
    { name: "Outdoor & garden", image: "/placeholder.svg" },
    { name: "Self-care", image: "/placeholder.svg" },
    { name: "On Sale", image: "/placeholder.svg" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-8 sm:px-12 lg:px-24 py-12">
        <section className="text-center py-12 px-4 sm:px-6 lg:px-8 bg-card rounded-lg shadow-sm">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find things you'll love. Support independent sellers. Only on DecentGrid.
          </h1>
          <div className="flex justify-center items-center space-x-6 mt-6 text-muted-foreground">
            <Heart className="h-8 w-8" />
            <ShoppingBag className="h-8 w-8" />
            <Users className="h-8 w-8" />
            <Star className="h-8 w-8" />
          </div>
        </section>

        <section className="py-12">
          <div className="flex flex-wrap justify-center gap-8">
            {categories.map((category) => (
              <div key={category.name} className="flex flex-col items-center space-y-2">
                <Avatar className="h-24 w-24 border-2 border-muted">
                  <AvatarImage src={category.image} alt={category.name} />
                  <AvatarFallback>{category.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="font-semibold text-foreground">{category.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Popular gifts right now
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
