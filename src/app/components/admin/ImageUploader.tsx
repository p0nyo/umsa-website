import { useRef } from 'react'

type ImageUploaderProps = {
    onFileSelect: (file: File) => void;
}


export default function ImageUploader({ onFileSelect }: ImageUploaderProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        console.log(file);
        if (file) {
            onFileSelect(file);
            if (inputRef.current) {
                inputRef.current.value = "";
            }
        }
    }

  return (
    <div className="flex flex-col justify-center">
        <input 
            id="file-upload"
            type="file" 
            accept="image/*" 
            ref={inputRef}
            onChange={handleImageChange} 
            className="hidden"
        />
        <label
            htmlFor="file-upload"
            className="cursor-pointer px-4 py-2 border-2 border-umsaBlue bg-umsaBlue text-white rounded-md scale-hover hover:bg-white hover:text-umsaBlue transition duration-300"
        >
            Upload Image
        </label>
    </div>
  )
}
