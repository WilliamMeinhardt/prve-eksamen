"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, AlertCircle } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Dette er en simulert innlogging. I en reell implementasjon ville du kalle en API-endepunkt
    try {
      // Simuler en nettverksforsinkelse
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // For demo-formål, la oss godta en spesifikk e-post/passord
      if (email === "demo@impactit.no" && password === "password") {
        // Lagre innloggingsstatus i localStorage (i en reell app ville du bruke en mer sikker metode)
        localStorage.setItem("isLoggedIn", "true")
        localStorage.setItem("userEmail", email)
        
        // Omdiriger til brukerportal
        router.push("/min-side")
      } else {
        setError("Ugyldig e-post eller passord. Prøv igjen.")
      }
    } catch (err) {
      setError("Det oppstod en feil ved innlogging. Vennligst prøv igjen senere.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Logg inn</CardTitle>
            <CardDescription>
              Logg inn for å se dine leieavtaler og brukerinformasjon
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-post</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="din@epost.no"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Passord</Label>
                    <Link 
                      href="/glemt-passord" 
                      className="text-sm text-gray-500 hover:text-black"
                    >
                      Glemt passord?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                
                <Button 
                  type="submit" 
                  className="w-full bg-black text-white hover:bg-gray-800"
                  disabled={isLoading}
                >
                  {isLoading ? "Logger inn..." : "Logg inn"}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <p className="text-sm text-gray-500 mt-4">
              Har du ikke en konto?{" "}
              <Link href="/registrer" className="text-black font-medium hover:underline">
                Registrer deg
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}