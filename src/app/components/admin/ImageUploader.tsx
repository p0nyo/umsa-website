import { useState } from 'react'

export default function ImageUploader() {
  const [image, setImage] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(file)
      setPreview(URL.createObjectURL(file))
    }
  }

  return (
    <div className="flex flex-col justify-center">
        <input 
            id="file-upload"
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
            className="hidden"
        />
        <label
            htmlFor="file-upload"
            className="cursor-pointer px-4 py-2 border-2 border-umsaBlue bg-umsaBlue text-white rounded-md scale-hover hover:bg-white hover:text-umsaBlue transition duration-300"
        >
            Upload Image
        </label>
        {preview && (
            <img src={preview} alt="Preview" className="w-48 h-48 object-contain" />
        )}
    </div>
  )
}
