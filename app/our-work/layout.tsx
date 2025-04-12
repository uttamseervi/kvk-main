import { PageTransition } from "@/components/animations"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
          <div className="flex min-h-screen flex-col">
            {/* <Navbar /> */}
            <main className="flex-1">
              <PageTransition>{children}</PageTransition>
            </main>
          </div>
      </body>
    </html>
  )
}
