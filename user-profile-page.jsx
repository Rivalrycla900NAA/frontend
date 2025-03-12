
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UploadCloud } from "lucide-react";

export default function UserProfile() {
  const [donations, setDonations] = useState([
    { id: 1, name: "Winter Jackets", image: "/donation1.jpg" },
    { id: 2, name: "School Supplies", image: "/donation2.jpg" },
  ]);

  const handleUpload = () => {
    const newDonation = { id: donations.length + 1, name: "New Donation", image: "/placeholder.jpg" };
    setDonations([...donations, newDonation]);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Profile Section */}
      <div className="flex items-center gap-4 mb-6">
        <img src="/profile.jpg" alt="User" className="w-16 h-16 rounded-full border" />
        <h1 className="text-2xl font-bold">John Doe</h1>
      </div>

      {/* Upload Button */}
      <Button onClick={handleUpload} className="mb-6 flex items-center gap-2">
        <UploadCloud size={16} /> Upload a Donation
      </Button>

      {/* Donation Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {donations.map((donation) => (
          <Card key={donation.id} className="overflow-hidden">
            <img src={donation.image} alt={donation.name} className="w-full h-40 object-cover" />
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold">{donation.name}</h2>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
