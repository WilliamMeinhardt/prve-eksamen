"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Filter, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'
// Remove ArrowRight import if unused

type EquipmentItem = {
  kategori: string
  type: string
  modell: string
  bilde: string
}

export default function EquipmentPage() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("kategori") || "all"

  const [category, setCategory] = useState(initialCategory)
  const [searchQuery, setSearchQuery] = useState("")
  const [equipment, setEquipment] = useState<EquipmentItem[]>([])
  const [filteredEquipment, setFilteredEquipment] = useState<EquipmentItem[]>([])
  const [categories, setCategories] = useState<string[]>([])

  // Fetch equipment data
  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        const response = await fetch("/data/equipment.json")
        const data = await response.json()
        setEquipment(data)
        
        // Extract unique categories
        const uniqueCategories = Array.from(new Set(data.map((item: EquipmentItem) => item.kategori)))
        setCategories(uniqueCategories as string[])
      } catch (error) {
        console.error("Failed to fetch equipment data:", error)
      }
    }

    fetchEquipment()
  }, [])

  // Filter equipment based on category and search query
  useEffect(() => {
    let filtered = equipment

    // Filter by category
    if (category !== "all") {
      filtered = filtered.filter((item) => item.kategori.toLowerCase() === category.toLowerCase())
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (item) => 
          item.modell.toLowerCase().includes(query) || 
          item.type.toLowerCase().includes(query) ||
          item.kategori.toLowerCase().includes(query)
      )
    }

    setFilteredEquipment(filtered)
  }, [category, searchQuery, equipment])

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Vårt utstyr</h1>

      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="font-medium text-lg mb-6 flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filtrer utstyr
            </h2>

            <div className="mb-6">
              <div className="text-sm font-medium mb-3">Kategorier</div>
              <Tabs defaultValue={category} onValueChange={setCategory} className="w-full">
                <TabsList className="grid grid-cols-1 h-auto mb-2 bg-gray-100">
                  <TabsTrigger value="all" className="data-[state=active]:bg-black data-[state=active]:text-white">
                    Alle produkter
                  </TabsTrigger>
                </TabsList>
                
                {categories.map((cat) => (
                  <TabsList key={cat} className="grid grid-cols-1 h-auto mb-2 bg-gray-100">
                    <TabsTrigger 
                      value={cat.toLowerCase()} 
                      className="data-[state=active]:bg-black data-[state=active]:text-white"
                    >
                      {cat}
                    </TabsTrigger>
                  </TabsList>
                ))}
              </Tabs>
            </div>

            <div>
              <div className="text-sm font-medium mb-3">Søk</div>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Søk etter utstyr..."
                  className="pl-10 rounded-full border-gray-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              {category === "all" ? "Alle produkter" : category}
            </h2>
            <div className="text-sm text-gray-500">Viser {filteredEquipment.length} produkter</div>
          </div>

          {filteredEquipment.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500">Ingen produkter funnet. Prøv et annet søk.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEquipment.map((item, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-video bg-gray-100 relative">
                    {/* Replace img tags with Image component */}
                    <Image
                      src={item.bilde}
                      alt={item.modell}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-1">{item.kategori} / {item.type}</div>
                    <h3 className="text-lg font-semibold mb-4">{item.modell}</h3>
                    <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full">
                      Se detaljer
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
