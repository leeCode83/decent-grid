import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b border-border bg-background">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-foreground">
              Decentralized Marketplace
            </h1>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              to="/add-product" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Sell
            </Link>
            <Link 
              to="/profile" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              My Profile
            </Link>
            <Button>
              <Wallet className="mr-2 h-4 w-4" />
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
