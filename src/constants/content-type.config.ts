export const AllowedContentType: Record<string, "ImageJpeg" | "ImagePng"> = {
  "image/jpeg": "ImageJpeg",
  "image/jpg": "ImageJpeg",
  "image/jpe": "ImageJpeg",
  "image/jfif": "ImageJpeg",
  "image/pjpeg": "ImageJpeg",
  "image/pjp": "ImageJpeg",
  "image/png": "ImagePng",
  "image/x-png": "ImagePng", // Older non-standard MIME type for PNG
}
