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
const dummyDonors = [
  {
    id: 1,
    name: "Arun Kumar",
    age: 28,
    gender: "Male",
    bloodGroup: "O+",
    location: "Bengaluru",
    phone: "9876543210",
    email: "arun@example.com",
    status: "active",
  },
  {
    id: 2,
    name: "Priya Sharma",
    age: 32,
    gender: "Female",
    bloodGroup: "A+",
    location: "Mysuru",
    phone: "9876543211",
    email: "priya@example.com",
    status: "active",
  },
  {
    id: 3,
    name: "Karthik Rao",
    age: 25,
    gender: "Male",
    bloodGroup: "B-",
    location: "Mangaluru",
    phone: "9876543212",
    email: "karthik@example.com",
    status: "inactive",
  },
  {
    id: 4,
    name: "Divya Hegde",
    age: 30,
    gender: "Female",
    bloodGroup: "AB+",
    location: "Hubballi",
    phone: "9876543213",
    email: "divya@example.com",
    status: "active",
  },
  {
    id: 5,
    name: "Suresh Gowda",
    age: 35,
    gender: "Male",
    bloodGroup: "O-",
    location: "Bengaluru",
    phone: "9876543214",
    email: "suresh@example.com",
    status: "active",
  },
  {
    id: 6,
    name: "Lakshmi Devi",
    age: 27,
    gender: "Female",
    bloodGroup: "A-",
    location: "Belagavi",
    phone: "9876543215",
    email: "lakshmi@example.com",
    status: "inactive",
  },
  {
    id: 7,
    name: "Venkatesh Murthy",
    age: 40,
    gender: "Male",
    bloodGroup: "B+",
    location: "Shivamogga",
    phone: "9876543216",
    email: "venkatesh@example.com",
    status: "active",
  },
  {
    id: 8,
    name: "Ananya Sharma",
    age: 29,
    gender: "Female",
    bloodGroup: "AB-",
    location: "Bengaluru",
    phone: "9876543217",
    email: "ananya@example.com",
    status: "active",
  },
  {
    id: 9,
    name: "Rajesh Kumar",
    age: 33,
    gender: "Male",
    bloodGroup: "O+",
    location: "Mysuru",
    phone: "9876543218",
    email: "rajesh@example.com",
    status: "inactive",
  },
  {
    id: 10,
    name: "Meena Patil",
    age: 31,
    gender: "Female",
    bloodGroup: "A+",
    location: "Dharwad",
    phone: "9876543219",
    email: "meena@example.com",
    status: "active",
  },
]

export default function BloodDonationPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [locationFilter, setLocationFilter] = useState("all")
  const [bloodGroupFilter, setBloodGroupFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    bloodGroup: "",
    location: "",
    phone: "",
    email: "",
    donorStatus: "active",
  })

  // Form validation state
  const [errors, setErrors] = useState({})

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      })
    }
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    // Basic validation
    const newErrors = {}
    if (!formData.fullName) newErrors.fullName = "Name is required"
    if (!formData.age) newErrors.age = "Age is required"
    else if (Number.parseInt(formData.age) < 18 || Number.parseInt(formData.age) > 65)
      newErrors.age = "Age must be between 18 and 65"
    if (!formData.gender) newErrors.gender = "Gender is required"
    if (!formData.bloodGroup) newErrors.bloodGroup = "Blood group is required"
    if (!formData.location) newErrors.location = "Location is required"
    if (!formData.phone) newErrors.phone = "Phone number is required"
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Enter a valid 10-digit phone number"
    if (!formData.email) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email address"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Form is valid - would normally submit to server
    alert("Registration successful! Thank you for registering as a blood donor.")

    // Reset form
    setFormData({
      fullName: "",
      age: "",
      gender: "",
      bloodGroup: "",
      location: "",
      phone: "",
      email: "",
      donorStatus: "active",
    })
  }

  // Filter donors based on search and filters
  const filteredDonors = dummyDonors.filter((donor) => {
    // Search term filter
    const matchesSearch =
      donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donor.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donor.bloodGroup.toLowerCase().includes(searchTerm.toLowerCase())

    // Location filter
    const matchesLocation = locationFilter === "all" || donor.location === locationFilter

    // Blood group filter
    const matchesBloodGroup = bloodGroupFilter === "all" || donor.bloodGroup === bloodGroupFilter

    // Status filter
    const matchesStatus = statusFilter === "all" || donor.status === statusFilter

    return matchesSearch && matchesLocation && matchesBloodGroup && matchesStatus
  })

  // Get unique locations for filter
  const locations = ["all", ...new Set(dummyDonors.map((donor) => donor.location))]

  // Get unique blood groups for filter
  const bloodGroups = ["all", ...new Set(dummyDonors.map((donor) => donor.bloodGroup))]

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
          <div className="mb-6 grid gap-4 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input
                  placeholder="Search by name, location or blood group"
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location === "all" ? "All Locations" : location}
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

          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium">Status:</span>
              <div className="flex space-x-2">
                <Button
                  variant={statusFilter === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setStatusFilter("all")}
                >
                  All
                </Button>
                <Button
                  variant={statusFilter === "active" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setStatusFilter("active")}
                >
                  Available
                </Button>
                <Button
                  variant={statusFilter === "inactive" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setStatusFilter("inactive")}
                >
                  Unavailable
                </Button>
              </div>
            </div>

            <p className="text-sm text-gray-600">
              {filteredDonors.length} donor{filteredDonors.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDonors.map((donor) => (
              <Card key={donor.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{donor.name}</CardTitle>
                    <Badge variant={donor.status === "active" ? "success" : "secondary"}>
                      {donor.status === "active" ? "Available" : "Unavailable"}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50">
                      {donor.bloodGroup}
                    </Badge>
                    <span className="text-sm text-gray-500">
                      {donor.age} years, {donor.gender}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <MapPin className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{donor.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Phone className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{donor.phone}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Mail className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{donor.email}</span>
                    </div>
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
                    <Label htmlFor="fullName">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={errors.fullName ? "border-red-500" : ""}
                    />
                    {errors.fullName && <p className="text-xs text-red-500">{errors.fullName}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age">
                      Age <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="age"
                      name="age"
                      type="number"
                      min="18"
                      max="65"
                      value={formData.age}
                      onChange={handleInputChange}
                      className={errors.age ? "border-red-500" : ""}
                    />
                    {errors.age && <p className="text-xs text-red-500">{errors.age}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label>
                      Gender <span className="text-red-500">*</span>
                    </Label>
                    <RadioGroup
                      name="gender"
                      value={formData.gender}
                      onValueChange={(value) => handleInputChange({ target: { name: "gender", value } })}
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Male" id="male" />
                        <Label htmlFor="male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Female" id="female" />
                        <Label htmlFor="female">Female</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Other" id="other" />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </RadioGroup>
                    {errors.gender && <p className="text-xs text-red-500">{errors.gender}</p>}
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
                    <Label htmlFor="location">
                      Location (City/District) <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className={errors.location ? "border-red-500" : ""}
                    />
                    {errors.location && <p className="text-xs text-red-500">{errors.location}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
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
                    <Label>
                      Donor Status <span className="text-red-500">*</span>
                    </Label>
                    <RadioGroup
                      name="donorStatus"
                      value={formData.donorStatus}
                      onValueChange={(value) => handleInputChange({ target: { name: "donorStatus", value } })}
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="active" id="active" />
                        <Label htmlFor="active">Active (Available to donate)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="inactive" id="inactive" />
                        <Label htmlFor="inactive">Inactive (Unavailable)</Label>
                      </div>
                    </RadioGroup>
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
