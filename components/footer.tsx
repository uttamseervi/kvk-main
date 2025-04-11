import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { FadeUpSection } from "@/components/animations"

export default function Footer() {
  return (
    <FadeUpSection>
      <footer className="border-t bg-gray-50">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-orange-600">Karnataka Vidyarthi Koota</h3>
              <p className="text-sm text-gray-600">
                A social service and cultural organization dedicated to preserving Karnataka's heritage and serving the
                community.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-gray-600 hover:text-orange-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-sm text-gray-600 hover:text-orange-600">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-gray-600 hover:text-orange-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/our-work" className="text-sm text-gray-600 hover:text-orange-600">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="/blood-donation" className="text-sm text-gray-600 hover:text-orange-600">
                    Blood Donation
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-600 hover:text-orange-600">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold">Contact</h3>
              <address className="not-italic text-sm text-gray-600 space-y-2">
                <p>123 Cultural Street</p>
                <p>Bengaluru, Karnataka 560001</p>
                <p>India</p>
                <p>Phone: +91 9876543210</p>
                <p>Email: info@kvk.org</p>
              </address>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-600 hover:text-orange-600">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-orange-600">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-orange-600">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-orange-600">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
              <p className="text-sm text-gray-600">Subscribe to our newsletter for updates</p>
            </div>
          </div>

          <div className="mt-8 border-t pt-6 text-center">
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} Karnataka Vidyarthi Koota. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </FadeUpSection>
  )
}
