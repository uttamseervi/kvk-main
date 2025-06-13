"use client"

import Link from "next/link"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Phone, Mail, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Dummy donor data
const dummyDonors: Donor[] = [
  {
    id: 1,
    name: "Arun Kumar",
    email: "arun@example.com",
    phone: "9876543210",
    bloodGroup: "O+",
    city: "Bengaluru",
    message: "Available for emergency donations",
    donationDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya@example.com",
    phone: "9876543211",
    bloodGroup: "A+",
    city: "Mysuru",
    message: "Regular donor",
    donationDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: "Karthik Rao",
    email: "karthik@example.com",
    phone: "9876543212",
    bloodGroup: "B-",
    city: "Mangaluru",
    message: "Available on weekends",
    donationDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    name: "Divya Hegde",
    email: "divya@example.com",
    phone: "9876543213",
    bloodGroup: "AB+",
    city: "Hubballi",
    message: "Emergency contact available",
    donationDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    name: "Suresh Gowda",
    email: "suresh@example.com",
    phone: "9876543214",
    bloodGroup: "O-",
    city: "Bengaluru",
    message: "Universal donor",
    donationDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }
]

// Define the donor type
type Donor = {
  id: number
  name: string
  email: string
  phone?: string
  bloodGroup: string
  city: string
  message?: string
  donationDate: Date
  createdAt: Date
  updatedAt: Date
}

export default function BloodDonationPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [locationFilter, setLocationFilter] = useState("all")
  const [bloodGroupFilter, setBloodGroupFilter] = useState("all")

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bloodGroup: "",
    city: "",
    message: "",
  })

  // Form validation state
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Message suggestions
  const messageSuggestions = [
    "Available for emergency donations",
    "Regular donor - Available on weekends",
    "Available during office hours",
    "Can donate on short notice",
    "Available in emergency situations",
    "Regular donor - Last donation: [Date]",
    "Available for specific blood type requests",
    "Can travel within city limits for donation",
    "Available for scheduled donations",
    "Emergency contact available 24/7"
  ]

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name: string; value: string } }) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    const newErrors: Record<string, string> = {}
    if (!formData.name) newErrors.name = "Name is required"
    if (!formData.email) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email address"
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) newErrors.phone = "Enter a valid 10-digit phone number"
    if (!formData.bloodGroup) newErrors.bloodGroup = "Blood group is required"
    if (!formData.city) newErrors.city = "City is required"
    if (!formData.message) newErrors.message = "Message is required"
    else if (formData.message.length < 10) newErrors.message = "Message should be at least 10 characters long"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Form is valid - would normally submit to server
    alert("Registration successful! Thank you for registering as a blood donor.")

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      bloodGroup: "",
      city: "",
      message: "",
    })
  }

  // Filter donors based on search and filters
  const filteredDonors = dummyDonors.filter((donor: Donor) => {
    // Search term filter
    const matchesSearch =
      donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donor.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donor.bloodGroup.toLowerCase().includes(searchTerm.toLowerCase())

    // Location filter
    const matchesLocation = locationFilter === "all" || donor.city === locationFilter

    // Blood group filter
    const matchesBloodGroup = bloodGroupFilter === "all" || donor.bloodGroup === bloodGroupFilter

    return matchesSearch && matchesLocation && matchesBloodGroup
  })

  // Get unique locations for filter
  const locations = ["all", ...new Set(dummyDonors.map((donor: Donor) => donor.city))]

  // Get unique blood groups for filter
  const bloodGroups = ["all", ...new Set(dummyDonors.map((donor: Donor) => donor.bloodGroup))]

  return (
    <div className="container py-12 md:py-16">
      <div className="mb-10 text-center">
        <h1 className="mb-3 text-3xl font-bold md:text-4xl">Blood Donation</h1>
        <p className="mx-auto max-w-2xl text-gray-600">
          Join our blood donation initiative to help save lives. Register as a donor or find donors in your area.
        </p>
      </div>

      <Tabs defaultValue="donors" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="donors">Find Donors</TabsTrigger>
          <TabsTrigger value="register">Register as Donor</TabsTrigger>
        </TabsList>

        {/* Find Donors Tab */}
        <TabsContent value="donors" className="mt-6">
          <div className="mb-6 grid gap-4 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input
                  placeholder="Search by name, city or blood group"
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by city" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location === "all" ? "All Cities" : location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Select value={bloodGroupFilter} onValueChange={setBloodGroupFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by blood group" />
                </SelectTrigger>
                <SelectContent>
                  {bloodGroups.map((group) => (
                    <SelectItem key={group} value={group}>
                      {group === "all" ? "All Blood Groups" : group}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDonors.map((donor) => (
              <Card key={donor.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{donor.name}</CardTitle>
                    <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50">
                      {donor.bloodGroup}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <MapPin className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{donor.city}</span>
                    </div>
                    {donor.phone && (
                      <div className="flex items-center text-sm">
                        <Phone className="mr-2 h-4 w-4 text-gray-500" />
                        <span>{donor.phone}</span>
                      </div>
                    )}
                    <div className="flex items-center text-sm">
                      <Mail className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{donor.email}</span>
                    </div>
                    {donor.message && (
                      <div className="text-sm text-gray-600 mt-2">
                        <p className="font-medium">Note:</p>
                        <p>{donor.message}</p>
                      </div>
                    )}
                  </div>
                  <Button className="mt-4 w-full" variant="outline">
                    Contact Donor
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredDonors.length === 0 && (
            <div className="mt-8 text-center">
              <p className="text-gray-600">No donors found matching your criteria.</p>
              <p className="mt-2 text-sm text-gray-500">Try adjusting your filters or search term.</p>
            </div>
          )}
        </TabsContent>

        {/* Register as Donor Tab */}
        <TabsContent value="register" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Donor Registration Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bloodGroup">
                      Blood Group <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onValueChange={(value) => handleInputChange({ target: { name: "bloodGroup", value } })}
                    >
                      <SelectTrigger id="bloodGroup" className={errors.bloodGroup ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select blood group" />
                      </SelectTrigger>
                      <SelectContent>
                        {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) => (
                          <SelectItem key={group} value={group}>
                            {group}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.bloodGroup && <p className="text-xs text-red-500">{errors.bloodGroup}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">
                      City <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={errors.city ? "border-red-500" : ""}
                    />
                    {errors.city && <p className="text-xs text-red-500">{errors.city}</p>}
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="message">
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.message ? "border-red-500" : ""
                        }`}
                      placeholder="Add information about your availability, preferences, or any specific conditions. For example: 'Available for emergency donations' or 'Can donate on weekends'"
                    />
                    {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 mb-2">Suggested messages:</p>
                      <div className="flex flex-wrap gap-2">
                        {messageSuggestions.map((suggestion, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            className="text-xs"
                            onClick={() => handleInputChange({ target: { name: "message", value: suggestion } })}
                          >
                            {suggestion}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="consent" className="h-4 w-4 rounded border-gray-300" required />
                    <Label htmlFor="consent" className="text-sm">
                      I consent to share my contact information with potential recipients and confirm that the
                      information provided is accurate.
                    </Label>
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  Register as Donor
                </Button>

                <p className="text-center text-xs text-gray-500">
                  By registering, you agree to our{" "}
                  <Link href="#" className="text-orange-600 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-orange-600 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
