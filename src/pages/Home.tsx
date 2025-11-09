import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

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
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Discover Digital Assets
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Browse and purchase unique items on the blockchain
          </p>
          
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              className="pl-12 h-12"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
