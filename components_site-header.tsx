import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function SiteHeader() {
  return (
    <header className="w-full border-b bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-3xl font-extrabold text-primary tracking-wider">BMS</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary font-medium">Dashboard</Link>
            <Link href="/systems" className="text-gray-700 hover:text-primary font-medium">Systems</Link>
            <Link href="/analytics" className="text-gray-700 hover:text-primary font-medium">Analytics</Link>
            <Link href="/support" className="text-gray-700 hover:text-primary font-medium">Support</Link>
          </nav>
          <div className="hidden md:flex">
            <Button className="bg-primary hover:bg-primary/90 text-white">Login</Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

