"use server"

import { put } from "@vercel/blob"
import { revalidatePath } from "next/cache"

export async function uploadImage(formData: FormData) {
  try {
    const file = formData.get("file") as File

    if (!file) {
      return { success: false, error: "Tidak ada file yang diberikan" }
    }

    // Generate a unique filename with original extension
    const fileExtension = file.name.split(".").pop() || "jpg"
    const uniqueFilename = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}.${fileExtension}`

    // Upload to Vercel Blob
    const blob = await put(uniqueFilename, file, {
      access: "public",
      addRandomSuffix: true, // Adds additional randomness to avoid collisions
    })

    // Revalidate the path to update the UI
    revalidatePath("/")

    return {
      success: true,
      url: blob.url,
      size: blob.size,
      uploadedAt: blob.uploadedAt,
    }
  } catch (error) {
    console.error("Upload error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Gagal mengunggah gambar",
    }
  }
}
