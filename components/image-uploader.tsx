"use client"

import { useState, useCallback } from "react"
import { Upload, Link, Copy, ImageIcon, Loader2 } from "lucide-react"
import { useDropzone } from "react-dropzone"
import { uploadImage } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image"
import Loading from "@/components/loading"

export default function ImageUploader() {
  const [isUploading, setIsUploading] = useState(false)
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const { toast } = useToast()

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) return

      const file = acceptedFiles[0]

      // Check if file is an image
      if (!file.type.startsWith("image/")) {
        toast({
          title: "Tipe file tidak valid",
          description: "Mohon unggah file gambar",
          variant: "destructive",
        })
        return
      }

      // Check file size (max 20MB)
      if (file.size > 20 * 1024 * 1024) {
        toast({
          title: "File terlalu besar",
          description: "Mohon unggah gambar dengan ukuran kurang dari 20MB",
          variant: "destructive",
        })
        return
      }

      setIsUploading(true)
      setImageUrl(null)
      setUploadProgress(0)

      try {
        // Create a preview of the image
        const reader = new FileReader()
        reader.onload = (e) => {
          setUploadedImage(e.target?.result as string)
        }
        reader.readAsDataURL(file)

        // Simulate upload progress
        const progressInterval = setInterval(() => {
          setUploadProgress((prev) => {
            if (prev >= 95) {
              clearInterval(progressInterval)
              return prev
            }
            return prev + 5
          })
        }, 200)

        // Upload the image
        const formData = new FormData()
        formData.append("file", file)

        const result = await uploadImage(formData)

        clearInterval(progressInterval)
        setUploadProgress(100)

        if (result.success) {
          setImageUrl(result.url)
          toast({
            title: "Unggahan berhasil!",
            description: "Tautan gambar Anda siap dibagikan",
          })
        } else {
          throw new Error(result.error || "Unggahan gagal")
        }
      } catch (error) {
        console.error("Upload error:", error)
        toast({
          title: "Unggahan gagal",
          description: error instanceof Error ? error.message : "Terjadi kesalahan",
          variant: "destructive",
        })
        setUploadedImage(null)
      } finally {
        setIsUploading(false)
      }
    },
    [toast],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    disabled: isUploading,
    maxFiles: 1,
  })

  const copyToClipboard = () => {
    if (imageUrl) {
      navigator.clipboard.writeText(imageUrl)
      toast({
        title: "Disalin ke clipboard!",
        description: "Tautan telah disalin ke clipboard Anda",
      })
    }
  }

  return (
    <div className="space-y-8 fade-in">
      <Card className="border-2 border-dashed border-gray-300 hover:border-rose-400 transition-colors">
        <CardContent className="p-0">
          <div
            {...getRootProps()}
            className={`flex flex-col items-center justify-center p-8 text-center cursor-pointer min-h-[250px] ${
              isDragActive ? "bg-rose-50" : ""
            }`}
          >
            <input {...getInputProps()} />

            {isUploading ? (
              <div className="flex flex-col items-center space-y-4">
                <Loader2 className="h-12 w-12 text-rose-500 animate-spin" />
                <p className="text-gray-600">Mengunggah gambar Anda...</p>
                <div className="w-full max-w-xs bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-rose-500 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500">{uploadProgress}%</p>
              </div>
            ) : uploadedImage ? (
              <div className="flex flex-col items-center space-y-4 w-full">
                <div className="relative w-full max-w-xs h-48 mx-auto">
                  <Image
                    src={uploadedImage || "/placeholder.svg"}
                    alt="Pratinjau unggahan"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <p className="text-gray-600">{imageUrl ? "Gambar berhasil diunggah!" : "Memproses gambar Anda..."}</p>
                {!imageUrl && <Loading />}
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-4">
                <div className="p-4 rounded-full bg-rose-100">
                  <Upload className="h-10 w-10 text-rose-500" />
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-medium text-gray-700">
                    {isDragActive ? "Letakkan gambar di sini" : "Tarik & letakkan gambar di sini"}
                  </p>
                  <p className="text-gray-500 text-sm">atau klik untuk memilih file</p>
                  <p className="text-gray-400 text-xs">Mendukung: JPG, PNG, GIF, WebP (Maks: 20MB)</p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {imageUrl && (
        <Card className="overflow-hidden border-2 border-teal-200 fade-in">
          <CardContent className="p-6">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <Link className="h-5 w-5 text-teal-500" />
                <h3 className="text-lg font-medium">Tautan Gambar Anda</h3>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 p-3 bg-gray-100 rounded-md text-sm break-all">{imageUrl}</div>
                <Button onClick={copyToClipboard} className="bg-teal-500 hover:bg-teal-600 text-white">
                  <Copy className="h-4 w-4 mr-2" />
                  Salin
                </Button>
              </div>

              <div className="flex justify-center pt-2">
                <Button
                  variant="outline"
                  onClick={() => window.open(imageUrl, "_blank")}
                  className="text-teal-500 border-teal-200"
                >
                  <ImageIcon className="h-4 w-4 mr-2" />
                  Lihat Gambar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
