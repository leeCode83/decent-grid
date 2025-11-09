import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wallet, ArrowUpRight } from "lucide-react";

const Profile = () => {
  const walletAddress = "0x1a2b3c4d5e6f7g8h9i0j";
  const balance = "3.25";

  const listedProducts = [
    { name: "Digital Artwork Collection", price: "2.5", status: "Active" },
    { name: "Premium NFT Bundle", price: "1.8", status: "Active" },
  ];

  const purchaseHistory = [
    { name: "Exclusive Music Album", price: "0.9", date: "2024-01-15" },
    { name: "Gaming Assets Pack", price: "1.5", date: "2024-01-10" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              My Profile
            </h1>
            <p className="text-muted-foreground text-lg">
              Manage your marketplace activity and earnings
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Wallet className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Wallet Address</h3>
              </div>
              <p className="text-sm text-muted-foreground font-mono">
                {walletAddress}
              </p>
            </Card>

            <Card className="p-6 lg:col-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-muted-foreground mb-2">
                    Available Earnings
                  </h3>
                  <p className="text-4xl font-bold text-foreground">
                    {balance} ETH
                  </p>
                </div>
                <Button size="lg">
                  <ArrowUpRight className="mr-2 h-4 w-4" />
                  Withdraw Funds
                </Button>
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <Tabs defaultValue="listed" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="listed">My Listed Products</TabsTrigger>
                <TabsTrigger value="purchases">Purchase History</TabsTrigger>
              </TabsList>

              <TabsContent value="listed" className="space-y-4">
                {listedProducts.map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border border-border rounded-lg"
                  >
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {product.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {product.price} ETH
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-success/10 text-success rounded-full text-sm font-medium">
                      {product.status}
                    </span>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="purchases" className="space-y-4">
                {purchaseHistory.map((purchase, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border border-border rounded-lg"
                  >
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {purchase.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {purchase.date}
                      </p>
                    </div>
                    <p className="font-semibold text-foreground">
                      {purchase.price} ETH
                    </p>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
