import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50">
      <div className="text-center">
        <Loader2 className="h-12 w-12 text-rose-500 animate-spin mx-auto mb-4" />
        <h3 className="text-xl font-medium text-gray-800">Memuat...</h3>
        <p className="text-gray-600">Mohon tunggu sebentar</p>
      </div>
    </div>
  )
}
