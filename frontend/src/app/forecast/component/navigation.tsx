import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Flag, Globe, MoreHorizontal } from 'lucide-react'

const navItems = [
  { name: 'Zegoland', icon: Flag, href: '/zegoland' },
  { name: 'Elbonie', icon: Flag, href: '/elbonie' },
  { name: 'Floresland', icon: Flag, href: '/floresland' },
  { name: 'More Countries', icon: MoreHorizontal, href: '/more-countries' },
  { name: 'Global View', icon: Globe, href: '/global' },
]

export default function Navigation() {
  return (
    <nav className="bg-gray-100 py-4 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardContent className="p-2">
            <ul className="flex flex-wrap justify-center sm:justify-between gap-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Button variant="ghost" asChild className="w-full sm:w-auto h-14">
                    <Link href={item.href} className="flex items-center gap-2">
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </nav>
  )
}

