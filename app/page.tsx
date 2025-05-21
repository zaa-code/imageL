import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/toaster"
import Link from "next/link"
import { ArrowRight, Upload, LinkIcon, Globe, Shield } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <LinkIcon className="h-6 w-6 text-rose-500" />
            <span className="font-bold text-xl">ImageL</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/upload">
              <Button>
                Mulai Unggah
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-rose-100 to-teal-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-teal-500 fade-in-up">
              Konverter Gambar ke Tautan
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 fade-in-up stagger-1">
              Unggah gambar Anda dan dapatkan tautan yang dapat dibagikan secara instan
            </p>
            <Link href="/upload" className="fade-in-up stagger-2">
              <Button size="lg" className="text-lg px-8 py-6">
                <Upload className="mr-2 h-5 w-5" />
                Mulai Unggah Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-12">Cara Kerjanya</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-rose-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Upload className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">1. Unggah Gambar Anda</h3>
                <p className="text-gray-600">Tarik dan letakkan atau pilih file gambar hingga 20MB</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-rose-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <LinkIcon className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">2. Dapatkan Tautan Anda</h3>
                <p className="text-gray-600">Kami langsung menghasilkan tautan permanen untuk gambar Anda</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-rose-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">3. Bagikan Di Mana Saja</h3>
                <p className="text-gray-600">Gunakan tautan Anda di media sosial, email, pesan, atau situs web</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-12">Mengapa Memilih ImageL</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal delay={100}>
              <div className="flex gap-4 bg-white p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 text-teal-500">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Aman & Andal</h3>
                  <p className="text-gray-600">
                    Gambar Anda disimpan dengan aman dan akan tetap dapat diakses selama Anda membutuhkannya
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex gap-4 bg-white p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 text-teal-500">
                  <Upload className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Dukungan File Besar</h3>
                  <p className="text-gray-600">Unggah gambar hingga 20MB - sempurna untuk foto resolusi tinggi</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex gap-4 bg-white p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 text-teal-500">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">CDN Global</h3>
                  <p className="text-gray-600">Pemuatan gambar super cepat dari mana saja di dunia</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="flex gap-4 bg-white p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 text-teal-500">
                  <LinkIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tautan Permanen</h3>
                  <p className="text-gray-600">Tautan gambar Anda tidak akan kedaluwarsa atau rusak seiring waktu</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-rose-500 to-teal-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">Siap Berbagi Gambar Anda?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Mulai unggah sekarang dan dapatkan tautan dalam hitungan detik. Tanpa perlu registrasi!
            </p>
            <Link href="/upload">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Mulai Unggah
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-gray-200 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <LinkIcon className="h-5 w-5 text-rose-500" />
            <span className="font-bold text-lg">ImageL</span>
          </div>
          <p className="text-gray-600">&copy; {new Date().getFullYear()} ImageL. Seluruh hak cipta dilindungi.</p>
        </div>
      </footer>

      <Toaster />
    </div>
  )
}
