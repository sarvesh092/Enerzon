import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  companyName: string;
  companyHeadquarters: string;
  city: string;
  message: string;
}

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    companyName: "",
    companyHeadquarters: "",
    city: "",
    message: ""
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email";
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!formData.companyHeadquarters.trim()) newErrors.companyHeadquarters = "Company headquarters is required";
    if (!formData.city.trim()) newErrors.city = "City is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast({
        title: "Demo Booked Successfully!",
        description: "We'll reach out to you soon to schedule your demo.",
      });
      
      // Reset form
      setFormData({
        email: "",
        firstName: "",
        lastName: "",
        companyName: "",
        companyHeadquarters: "",
        city: "",
        message: ""
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information Section */}
          <div>
            <h1 className="text-3xl font-bold mb-6 ">Get in Touch</h1>
            <p className="text-lg text-gray-600 mb-8">
              Ready to transform your energy management? Let's discuss how Enerzon can help your business.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Fill out the form</h3>
                  <p className="text-gray-600">Tell us about your company and energy needs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Schedule a call</h3>
                  <p className="text-gray-600">Our energy experts will reach out within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Custom demo</h3>
                  <p className="text-gray-600">See how our platform can optimize your energy usage</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Implementation</h3>
                  <p className="text-gray-600">Start saving energy and costs with our solution</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-sm font-bold mb-2 text-gray-900">GET IN TOUCH</h2>
            <p className="text-gray-600 mb-6">
              Let us know a bit about yourself, and we will reach out soon.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email" className="mb-2 block text-gray-700">
                  Work Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jari.east@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`bg-white border-gray-300 text-gray-900 ${errors.email ? "border-red-500" : ""}`}
                />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="mb-2 block text-gray-700">
                    First name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Jhon"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className={`bg-white border-gray-300 text-gray-900 ${errors.firstName ? "border-red-500" : ""}`}
                  />
                </div>

                <div>
                  <Label htmlFor="lastName" className="mb-2 block text-gray-700">
                    Last name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className={`bg-white border-gray-300 text-gray-900 ${errors.lastName ? "border-red-500" : ""}`}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="companyName" className="mb-2 block text-gray-700">
                  Company name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="companyName"
                  placeholder="Acme Schtrom"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange("companyName", e.target.value)}
                  className={`bg-white border-gray-300 text-gray-900 ${errors.companyName ? "border-red-500" : ""}`}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="companyHeadquarters" className="mb-2 block text-gray-700">
                    Company headquarters <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="companyHeadquarters"
                    placeholder="Country"
                    value={formData.companyHeadquarters}
                    onChange={(e) => handleInputChange("companyHeadquarters", e.target.value)}
                    className={`bg-white border-gray-300 text-gray-900 ${errors.companyHeadquarters ? "border-red-500" : ""}`}
                  />
                </div>

                <div>
                  <Label htmlFor="city" className="mb-2 block text-gray-700">
                    City <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className={`bg-white border-gray-300 text-gray-900 ${errors.city ? "border-red-500" : ""}`}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="mb-2 block text-gray-700">
                  Tell us more about how We can help you
                </Label>
                <Textarea
                  id="message"
                  placeholder="Describe your energy management challenges and goals..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={4}
                  className="bg-white border-gray-300 text-gray-900"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 border-0 hover:opacity-90"
                size="lg"
              >
                Book Demo
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
