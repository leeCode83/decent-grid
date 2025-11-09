import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Upload } from "lucide-react";

const AddProduct = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              List New Product
            </h1>
            <p className="text-muted-foreground text-lg">
              Add your digital asset to the marketplace
            </p>
          </div>

          <Card className="p-8">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Product Name</Label>
                <Input
                  id="name"
                  placeholder="Enter product name"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your product"
                  className="min-h-[120px] resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Price (ETH)</Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label>Product Image</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-2">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-sm text-muted-foreground">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>

              <Button type="submit" className="w-full h-12 text-base">
                List Product
              </Button>
            </form>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AddProduct;
