import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-2 text-sm font-medium">12 års erfaring</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Profesjonelt IT-utstyr når du trenger det
              </h1>
              <p className="text-lg mb-8 text-gray-700 max-w-lg">
                Impact IT tilbyr utleie av kvalitetsutstyr for bedrifter og privatpersoner. Fleksible løsninger tilpasset
                dine behov.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6">
                  Kom i gang
                </Button>
                <Button variant="outline" className="rounded-full flex items-center gap-2 border-gray-300">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <Play className="h-3.5 w-3.5 ml-0.5" />
                  </div>
                  <span>Se hvordan det fungerer</span>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#7EB6D7] rounded-3xl overflow-hidden relative aspect-square max-w-md mx-auto">
                <img
                  src="/placeholder.svg?height=500&width=500&text=IT-utstyr"
                  alt="IT-utstyr"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4L4 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 4L20 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              
              {/* Floating element */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md max-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=32&width=32&text=A"
                      alt="Avatar"
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Anders Pedersen</div>
                    <div className="text-xs text-gray-500">Teknisk Sjef</div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="text-xs">Tilgjengelig nå</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Section */}
      <section className="py-12 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-gray-500 mb-8">
            Over <span className="font-medium">250+</span> fornøyde kunder samarbeider med Impact IT
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <img src="/placeholder.svg?height=30&width=100&text=Google" alt="Google" className="h-6 opacity-70" />
            <img src="/placeholder.svg?height=30&width=100&text=Telenor" alt="Telenor" className="h-6 opacity-70" />
            <img src="/placeholder.svg?height=30&width=100&text=DNB" alt="DNB" className="h-6 opacity-70" />
            <img src="/placeholder.svg?height=30&width=100&text=Equinor" alt="Equinor" className="h-6 opacity-70" />
            <img src="/placeholder.svg?height=30&width=100&text=Vy" alt="Vy" className="h-6 opacity-70" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">Våre tjenester</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="service-card">
              <h3 className="text-lg font-semibold mb-2">Utleie av IT-utstyr</h3>
              <p className="text-gray-600 text-sm mb-4">
                Fleksibel utleie av laptoper, skjermer og annet IT-utstyr til bedrifter.
              </p>
              <div className="service-card-arrow">
                <Link href="/utstyr">Utforsk</Link>
                <ArrowRight />
              </div>
            </div>
            
            <div className="service-card yellow">
              <h3 className="text-lg font-semibold mb-2">Teknisk support</h3>
              <p className="text-gray-600 text-sm mb-4">
                24/7 support for alt utstyr du leier hos oss, uansett når du trenger det.
              </p>
              <div className="service-card-arrow">
                <Link href="/support">Utforsk</Link>
                <ArrowRight />
              </div>
            </div>
            
            <div className="service-card">
              <h3 className="text-lg font-semibold mb-2">Skreddersydde løsninger</h3>
              <p className="text-gray-600 text-sm mb-4">
                Vi tilpasser utstyrspakker etter dine spesifikke behov og prosjekter.
              </p>
              <div className="service-card-arrow">
                <Link href="/losninger">Utforsk</Link>
                <ArrowRight />
              </div>
            </div>
            
            <div className="service-card">
              <h3 className="text-lg font-semibold mb-2">Rådgivning</h3>
              <p className="text-gray-600 text-sm mb-4">
                Ekspertråd om hvilke løsninger som passer best for din virksomhet.
              </p>
              <div className="service-card-arrow">
                <Link href="/radgivning">Utforsk</Link>
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-[#E57C65] rounded-3xl overflow-hidden relative aspect-square max-w-md">
                <img
                  src="/placeholder.svg?height=500&width=500&text=Support"
                  alt="Support"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating chart element */}
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Vår unike tilnærming</h2>
              
              <div className="space-y-8">
                <div className="approach-item">
                  <div className="approach-item-number">1</div>
                  <div className="approach-item-content">
                    <h3>Fleksible leieavtaler</h3>
                    <p>Vi tilbyr korte og lange leieavtaler uten bindingstid, slik at du kun betaler for det du faktisk trenger.</p>
                  </div>
                </div>
                
                <div className="approach-item">
                  <div className="approach-item-number">2</div>
                  <div className="approach-item-content">
                    <h3>Kvalitetsutstyr</h3>
                    <p>Alt vårt utstyr er av høy kvalitet fra ledende produsenter, og vedlikeholdes jevnlig for optimal ytelse.</p>
                  </div>
                </div>
                
                <div className="approach-item">
                  <div className="approach-item-number">3</div>
                  <div className="approach-item-content">
                    <h3>Personlig service</h3>
                    <p>Vi setter kundens behov i sentrum og sørger for at du får den beste oppfølgingen fra start til slutt.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Populære produkter</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Utforsk vårt utvalg av kvalitetsprodukter som er tilgjengelige for utleie. Vi har alt fra laptoper og skjermer til projektorer og kameraer.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video bg-gray-100 relative">
                <img
                  src="/placeholder.svg?height=200&width=300&text=Dell+XPS+13"
                  alt="Dell XPS 13"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-1">Laptop / Ultrabook</div>
                <h3 className="text-lg font-semibold mb-4">Dell XPS 13</h3>
                <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full">
                  Se detaljer
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video bg-gray-100 relative">
                <img
                  src="/placeholder.svg?height=200&width=300&text=iPad+Pro+12.9"
                  alt="iPad Pro 12.9"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-1">Nettbrett / iOS</div>
                <h3 className="text-lg font-semibold mb-4">iPad Pro 12.9</h3>
                <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full">
                  Se detaljer
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video bg-gray-100 relative">
                <img
                  src="/placeholder.svg?height=200&width=300&text=Samsung+Odyssey+G7"
                  alt="Samsung Odyssey G7"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-1">Skjerm / Curved</div>
                <h3 className="text-lg font-semibold mb-4">Samsung Odyssey G7</h3>
                <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full">
                  Se detaljer
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="rounded-full border-gray-300">
              <Link href="/utstyr">
                Se alle produkter <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Klar til å leie IT-utstyr?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-80">
            Kontakt oss i dag for å diskutere dine behov og få et uforpliktende tilbud.
          </p>
          <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
            Kom i gang nå
          </Button>
        </div>
      </section>
    </div>
  )
}
