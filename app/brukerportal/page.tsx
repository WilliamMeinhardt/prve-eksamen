"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Package, History, LogOut } from 'lucide-react'

// Simulert data for leieavtaler
const rentalHistory = [
  {
    id: "RA-2025-001",
    startDate: "2025-10-15",
    endDate: "2025-11-15",
    equipment: "Dell XPS 13",
    status: "Avsluttet",
    totalPrice: 4500
  },
  {
    id: "RA-2025-002",
    startDate: "2025-12-01",
    endDate: "2025-01-01",
    equipment: "iPad Pro 12.9",
    status: "Avsluttet",
    totalPrice: 3000
  },
  {
    id: "RA-2025-001",
    startDate: "2025-02-01",
    endDate: "2025-05-01",
    equipment: "Samsung Odyssey G7",
    status: "Aktiv",
    totalPrice: 7500
  }
]

// Simulert brukerdata
const userData = {
  name: "william meinhardt",
  email: "willmein10@gmail.com",
  phone: "+47",
  company: "",
  address: ""
}

export default function brukerportal() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const [activeTab, setActiveTab] = useState("oversikt")
  
  useEffect(() => {
    setIsClient(true)
    // Sjekk om brukeren er logget inn
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
    if (!isLoggedIn) {
      router.push("/logg-inn")
    }
  }, [router])
  
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userEmail")
    router.push("/")
  }
  
  if (!isClient) {
    return null // Unngå hydration mismatch
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Min side</h1>
        <Button 
          variant="outline" 
          className="flex items-center gap-2"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4" />
          Logg ut
        </Button>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="oversikt" className="flex items-center gap-2">
            <Package className="h-4 w-4" />
            <span className="hidden sm:inline">Oversikt</span>
          </TabsTrigger>
          <TabsTrigger value="historikk" className="flex items-center gap-2">
            <History className="h-4 w-4" />
            <span className="hidden sm:inline">Leieavtaler</span>
          </TabsTrigger>
          <TabsTrigger value="profil" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Min profil</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="oversikt">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Aktive leieavtaler</CardTitle>
                <CardDescription>
                  Dine pågående leieavtaler
                </CardDescription>
              </CardHeader>
              <CardContent>
                {rentalHistory.filter(rental => rental.status === "Aktiv").length > 0 ? (
                  <div className="space-y-4">
                    {rentalHistory
                      .filter(rental => rental.status === "Aktiv")
                      .map(rental => (
                        <div key={rental.id} className="border rounded-lg p-4">
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">{rental.equipment}</span>
                            <span className="text-sm bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                              {rental.status}
                            </span>
                          </div>
                          <div className="text-sm text-gray-500">
                            <p>Avtalenr: {rental.id}</p>
                            <p>Periode: {rental.startDate} - {rental.endDate}</p>
                            <p>Totalpris: {rental.totalPrice} kr</p>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                ) : (
                  <p className="text-gray-500">Du har ingen aktive leieavtaler.</p>
                )}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Kontoinformasjon</CardTitle>
                <CardDescription>
                  Din brukerinformasjon
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm text-gray-500">Navn</span>
                    <p>{userData.name}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">E-post</span>
                    <p>{userData.email}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Telefon</span>
                    <p>{userData.phone}</p>
                  </div>
                  <div className="pt-2">
                   
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="historikk">
          <Card>
            <CardHeader>
              <CardTitle>Leieavtaler</CardTitle>
              <CardDescription>
                Oversikt over alle dine leieavtaler
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Avtalenr</th>
                      <th className="text-left py-3 px-4">Utstyr</th>
                      <th className="text-left py-3 px-4">Periode</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-right py-3 px-4">Pris</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rentalHistory.map(rental => (
                      <tr key={rental.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{rental.id}</td>
                        <td className="py-3 px-4">{rental.equipment}</td>
                        <td className="py-3 px-4">
                          {rental.startDate} - {rental.endDate}
                        </td>
                        <td className="py-3 px-4">
                          <span className={`text-sm px-2 py-0.5 rounded-full ${
                            rental.status === "Aktiv" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-gray-100 text-gray-800"
                          }`}>
                            {rental.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">{rental.totalPrice} kr</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="profil">
          <Card>
            <CardHeader>
              <CardTitle>Min profil</CardTitle>
              <CardDescription>
                Din personlige informasjon
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Personlig informasjon</h3>
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm text-gray-500">Navn</span>
                      <p className="font-medium">{userData.name}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">E-post</span>
                      <p className="font-medium">{userData.email}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Telefon</span>
                      <p className="font-medium">{userData.phone}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Firmaopplysninger</h3>
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm text-gray-500">Firma</span>
                      <p className="font-medium">{userData.company}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Adresse</span>
                      <p className="font-medium">{userData.address}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}