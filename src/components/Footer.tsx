import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background mt-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 Decentralized Marketplace. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link 
              to="/about" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About Us
            </Link>
            <Link 
              to="/terms" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link 
              to="/contact" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
