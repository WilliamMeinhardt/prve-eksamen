"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Plus, Save, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { addEquipment, removeEquipment } from "@/lib/actions"

type EquipmentItem = {
  kategori: string
  type: string
  modell: string
  bilde: string
}

export default function AdminPage() {
  const router = useRouter()
  const [equipment, setEquipment] = useState<EquipmentItem[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [types, setTypes] = useState<Record<string, string[]>>({})
  const [newItem, setNewItem] = useState({
    kategori: "",
    type: "",
    modell: "",
    bilde: "Her må du legge inn passende bilde",
  })

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
        
        // Extract types for each category
        const typesByCategory: Record<string, string[]> = {}
        uniqueCategories.forEach((category) => {
          const categoryItems = data.filter((item: EquipmentItem) => item.kategori === category)
          const categoryTypes = Array.from(new Set(categoryItems.map((item: EquipmentItem) => item.type)))
          typesByCategory[category as string] = categoryTypes as string[]
        })
        setTypes(typesByCategory)
      } catch (error) {
        console.error("Failed to fetch equipment data:", error)
      }
    }

    fetchEquipment()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewItem((prev) => ({ ...prev, [name]: value }))
  }

  const handleCategoryChange = (value: string) => {
    setNewItem((prev) => ({ ...prev, kategori: value, type: "" }))
  }

  const handleTypeChange = (value: string) => {
    setNewItem((prev) => ({ ...prev, type: value }))
  }

  const handleAddEquipment = async () => {
    if (!newItem.kategori || !newItem.type || !newItem.modell) {
      alert("Vennligst fyll ut alle feltene")
      return
    }

    try {
      // Add the new equipment
      await addEquipment(newItem)

      // Update local state
      setEquipment((prev) => [...prev, newItem])

      // Reset form
      setNewItem({
        kategori: "",
        type: "",
        modell: "",
        bilde: "Her må du legge inn passende bilde",
      })

      // Refresh the page to show updated data
      router.refresh()
    } catch (error) {
      console.error("Failed to add equipment:", error)
      alert("Det oppstod en feil ved lagring av utstyret")
    }
  }

  const handleRemoveEquipment = async (index: number) => {
    if (confirm("Er du sikker på at du vil slette dette utstyret?")) {
      try {
        // Remove the equipment
        await removeEquipment(index)

        // Update local state
        setEquipment((prev) => prev.filter((_, i) => i !== index))

        // Refresh the page to show updated data
        router.refresh()
      } catch (error) {
        console.error("Failed to remove equipment:", error)
        alert("Det oppstod en feil ved sletting av utstyret")
      }
    }
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Administrer utstyr</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              Legg til nytt utstyr
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="kategori">Kategori</Label>
                <Select value={newItem.kategori} onValueChange={handleCategoryChange}>
                  <SelectTrigger id="kategori">
                    <SelectValue placeholder="Velg kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="type">Type</Label>
                <Select 
                  value={newItem.type} 
                  onValueChange={handleTypeChange}
                  disabled={!newItem.kategori}
                >
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Velg type" />
                  </SelectTrigger>
                  <SelectContent>
                    {newItem.kategori && types[newItem.kategori]?.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="modell">Modell</Label>
                <Input
                  id="modell"
                  name="modell"
                  value={newItem.modell}
                  onChange={handleInputChange}
                  placeholder="F.eks. Dell XPS 13"
                />
              </div>

              <Button className="w-full mt-4 bg-black text-white hover:bg-gray-800 rounded-full" onClick={handleAddEquipment}>
                <Save className="h-4 w-4 mr-2" />
                Lagre utstyr
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Eksisterende utstyr</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
              {equipment.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Ingen utstyr lagt til ennå</p>
              ) : (
                equipment.map((item, index) => (
                  <div key={index} className="flex items-start justify-between p-4 border rounded-md">
                    <div>
                      <h3 className="font-medium">{item.modell}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {item.kategori} - {item.type}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      onClick={() => handleRemoveEquipment(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Slett</span>
                    </Button>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
