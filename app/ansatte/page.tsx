"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { employees } from "@/lib/data"

export default function EmployeesPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextEmployee = () => {
    setCurrentIndex((prevIndex) => (prevIndex === employees.length - 1 ? 0 : prevIndex + 1))
  }

  const prevEmployee = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? employees.length - 1 : prevIndex - 1))
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Våre ansatte</h1>

        <p className="text-lg text-gray-600 mb-12 text-center">
          Møt teamet bak Impact IT. Vi er stolte av våre dyktige medarbeidere som jobber hver dag for å gi deg den beste
          opplevelsen.
        </p>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {employees.map((employee) => (
                <div key={employee.id} className="w-full flex-shrink-0">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2">
                        <div className="bg-[#7EB6D7] aspect-square relative">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img
                              src={`/=${employee.name}`}
                              alt={employee.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="p-8 flex flex-col justify-center">
                          <div className="mb-2 text-sm font-medium text-gray-500">{employee.department}</div>
                          <h2 className="text-2xl font-bold mb-4">{employee.name}</h2>
                          <div className="mb-4 text-gray-500">{employee.title}</div>
                          <p className="text-gray-600 mb-6">{employee.bio}</p>
                          <div className="text-sm text-gray-500">
                            <div className="mb-1">
                              <span className="font-medium">E-post:</span> {employee.email}
                            </div>
                            <div>
                              <span className="font-medium">Telefon:</span> {employee.phone}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 z-10 rounded-full"
            onClick={prevEmployee}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Forrige</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-gray-100 z-10 rounded-full"
            onClick={nextEmployee}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Neste</span>
          </Button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {employees.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-black" : "bg-gray-300"}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Gå til ansatt ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
