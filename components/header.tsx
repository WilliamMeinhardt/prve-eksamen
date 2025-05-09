"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-transparent py-6 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">Impact IT</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <Link href="/utstyr" className="text-gray-700 hover:text-black font-medium">
                Utstyr
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </div>
            <div className="relative group">
              <Link href="/ansatte" className="text-gray-700 hover:text-black font-medium">
                Ansatte
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </div>
           
          </nav>

          
<div className="hidden md:flex items-center space-x-4">
  <Link href="/loggInn" className="text-gray-700 hover:text-black font-medium">
    Logg inn
  </Link>
</div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
          <Link
            href="/tjenester"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Tjenester
          </Link>
          <Link
            href="/utstyr"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Produkter
          </Link>
          <Link
            href="/priser"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Priser & Vilkår
          </Link>
          <Link
            href="/logg-inn"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Logg inn
          </Link>
          <div className="pt-2">
            <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full">
              Registrer deg
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
