import { PageTransition } from "@/components/animations"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <PageTransition>{children}</PageTransition>
            </main>
        </div>

    )
}
