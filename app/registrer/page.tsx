"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react'

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess(false)
    
    // Validate form
    if (formData.password !== formData.confirmPassword) {
      setError("Passordene samsvarer ikke.")
      return
    }
    
    if (formData.password.length < 6) {
      setError("Passordet må være minst 6 tegn.")
      return
    }
    
    setIsLoading(true)

    try {
      // Simuler en nettverksforsinkelse
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // For demo-formål, simuler en vellykket registrering
      // I en reell implementasjon ville du kalle en API-endepunkt
      
      // Simuler at e-posten allerede er i bruk hvis den er demo@impactit.no
      if (formData.email === "demo@impactit.no") {
        setError("Denne e-postadressen er allerede i bruk.")
        setIsLoading(false)
        return
      }
      
      // Simuler vellykket registrering
      setSuccess(true)
      
      // Omdiriger til innloggingssiden etter 2 sekunder
      setTimeout(() => {
        router.push("/loggInn")
      }, 2000)
      
    } catch (err) {
      setError("Det oppstod en feil ved registrering. Vennligst prøv igjen senere.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Registrer deg</CardTitle>
            <CardDescription>
              Opprett en konto for å få tilgang til dine leieavtaler
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            {success && (
              <Alert className="mb-4 bg-green-50 text-green-800 border-green-200">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription>
                  Registrering vellykket! Du blir nå omdirigert til innloggingssiden.
                </AlertDescription>
              </Alert>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Navn</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Ditt fulle navn"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">E-post</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="din@epost.no"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Passord</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                      <span className="sr-only">
                        {showPassword ? "Skjul passord" : "Vis passord"}
                      </span>
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Bekreft passord</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                      <span className="sr-only">
                        {showConfirmPassword ? "Skjul passord" : "Vis passord"}
                      </span>
                    </button>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-black text-white hover:bg-gray-800"
                  disabled={isLoading}
                >
                  {isLoading ? "Registrerer..." : "Registrer deg"}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <p className="text-sm text-gray-500 mt-4">
              Har du allerede en konto?{" "}
              <Link href="/loggInn" className="text-black font-medium hover:underline">
                Logg inn
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}