"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { setCookie, getCookie } from "@/lib/cookies"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = getCookie("cookie-consent")
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    setCookie("cookie-consent", "true", 365) // Set cookie for 1 year
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <Card className="mx-auto max-w-4xl shadow-lg">
        <CardContent className="pt-6">
          <h3 className="mb-2 text-lg font-semibold">Informasjonskapsler og personvern</h3>
          <p className="text-sm text-muted-foreground">
            Dette nettstedet bruker informasjonskapsler (cookies) for å forbedre brukeropplevelsen og for å analysere
            trafikk. Vi kan også dele informasjon om din bruk av nettstedet med våre partnere innen sosiale medier,
            annonsering og analyse.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end border-t bg-muted/50 px-6 py-4">
          <Button onClick={handleAccept}>OK</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
