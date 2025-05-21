import ImageUploader from "@/components/image-uploader"
import { Toaster } from "@/components/ui/toaster"
import Link from "next/link"
import { LinkIcon, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function UploadPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <LinkIcon className="h-6 w-6 text-rose-500" />
            <Link href="/">
              <span className="font-bold text-xl">ImageL</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-gradient-to-b from-rose-100 to-teal-100">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-teal-500 mb-4">
                Unggah Gambar Anda
              </h1>
              <p className="text-gray-600 text-lg">Dapatkan tautan yang dapat dibagikan secara instan</p>
            </div>

            <ImageUploader />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} ImageL. Seluruh hak cipta dilindungi.</p>
        </div>
      </footer>

      <Toaster />
    </div>
  )
}
