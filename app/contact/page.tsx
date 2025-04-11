"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleSubmit = (e) => {
    e.preventDefault()

    // Basic validation
    const newErrors = {}
    if (!formData.name) newErrors.name = "Name is required"
    if (!formData.email) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email address"
    if (!formData.subject) newErrors.subject = "Subject is required"
    if (!formData.message) newErrors.message = "Message is required"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Form is valid - simulate submission
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="container py-12 md:py-16">
      <div className="mb-10 text-center">
        <h1 className="mb-3 text-3xl font-bold md:text-4xl">Contact Us</h1>
        <p className="mx-auto max-w-2xl text-gray-600">
          Have questions or want to get involved? Reach out to us through any of the channels below.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>Our team is here to help you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-orange-600" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <address className="not-italic text-sm text-gray-600">
                    123 Cultural Street
                    <br />
                    Bengaluru, Karnataka 560001
                    <br />
                    India
                  </address>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-orange-600" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-sm text-gray-600">+91 9876543210</p>
                  <p className="text-sm text-gray-600">+91 9876543211</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-orange-600" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-gray-600">info@kvk.org</p>
                  <p className="text-sm text-gray-600">support@kvk.org</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="mr-3 h-5 w-5 text-orange-600" />
                <div>
                  <h3 className="font-medium">Office Hours</h3>
                  <p className="text-sm text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-sm text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                  <p className="text-sm text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6">
            <h3 className="mb-3 text-lg font-semibold">Find Us On Map</h3>
            <div className="aspect-video overflow-hidden rounded-lg border bg-gray-100">
              {/* This would be a Google Maps iframe in a real implementation */}
              <div className="flex h-full items-center justify-center bg-gray-200 p-4 text-center text-gray-500">
                <p>
                  Google Maps Embed
                  <br />
                  <span className="text-sm">(Map showing KVK location in Bengaluru)</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="rounded-lg bg-green-50 p-4 text-center text-green-800">
                  <h3 className="mb-2 font-semibold">Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Name <span className="text-red-500">*</span>
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
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">
                      Subject <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={errors.subject ? "border-red-500" : ""}
                    />
                    {errors.subject && <p className="text-xs text-red-500">{errors.subject}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="mt-8">
            <h3 className="mb-4 text-lg font-semibold">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {[
                {
                  question: "How can I become a member of Karnataka Vidyarthi Koota?",
                  answer:
                    "You can become a member by filling out the membership form available on our website or by visiting our office during working hours. Membership is open to all who share an interest in Karnataka's culture and social service.",
                },
                {
                  question: "Does KVK accept donations?",
                  answer:
                    "Yes, KVK accepts donations to support our social and cultural initiatives. All donations are tax-deductible, and you will receive an official receipt for your contribution.",
                },
                {
                  question: "How can I volunteer for KVK's activities?",
                  answer:
                    "We welcome volunteers for all our events and initiatives. You can register as a volunteer through our website or contact our office to learn about upcoming volunteer opportunities.",
                },
                {
                  question: "Does KVK organize cultural classes for children?",
                  answer:
                    "Yes, we offer various cultural classes including Kannada language, classical dance, music, and folk arts for children of all ages. Contact us for the current schedule and registration details.",
                },
              ].map((faq, index) => (
                <div key={index} className="rounded-lg border p-4">
                  <h4 className="font-semibold">{faq.question}</h4>
                  <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
