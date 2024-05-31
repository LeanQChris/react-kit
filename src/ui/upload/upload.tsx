import React, { useState, ChangeEvent } from "react";
import ImagePreview from "./image-preview";
import FileInput from "./file-input";

interface ImageUploadProps {
    previewImage?: string;
    onChange: (file: File) => void;
    onError: (error: string) => void;
    isLoading?: boolean;
    note?: string;
    accept?: string;
    maxFileSizeInMb?: number;
    placeholderImage?: string;
    label?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    previewImage,
    onChange,
    onError,
    isLoading,
    note,
    accept = "image/*",
    maxFileSizeInMb = 5,
    label = "",
    placeholderImage = "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
}) => {
    const [image, setImage] = useState<string | null>(previewImage || null);

    const validateFile = (file: File) => {
        if (file.size > maxFileSizeInMb * 1024 * 1024) {
            onError("File size exceeds 5MB. Please choose a smaller file.");
            return false;
        }
        if (!file.type.startsWith("image/") && file.type !== "image/gif") {
            onError("Unsupported file type. Please choose an image or GIF file.");
            return false;
        }
        return true;
    };

    const handleImageChange = (file: File) => {
        if (validateFile(file)) {
            const reader = new FileReader();
            reader.onloadend = () => setImage(reader.result as string);
            reader.readAsDataURL(file);
            onChange(file);
        }
    };

    const clearImage = () => {
        setImage(null);
        onChange(new File([], ""));
    };

    return (
        <div className="flex flex-col gap-2">
            {note && <p className="text-sm text-gray-600">{note}</p>}
            <div className="flex items-center gap-4">
                <ImagePreview
                    image={image}
                    placeholderImage={placeholderImage}
                    isLoading={isLoading || false}
                    clearImage={clearImage}
                />
                <FileInput
                    label={label}
                    accept={accept}
                    onChange={handleImageChange}
                    isLoading={isLoading || false}
                    imageSelected={!!image}
                />
            </div>
        </div>
    );
};

export default ImageUpload;
