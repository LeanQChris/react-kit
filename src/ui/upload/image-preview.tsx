import { CircularLoader } from "../loader/circular-loader";
import React from "react";

interface ImagePreviewProps {
    image: string | null;
    placeholderImage: string;
    isLoading: boolean;
    clearImage: () => void;
}

const clearIcon = <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-4 h-4"
>
    <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM6 9a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z"
        clipRule="evenodd"
    />
</svg>

const ImagePreview: React.FC<ImagePreviewProps> = ({
    image,
    placeholderImage,
    isLoading,
    clearImage,
}) => (
    <div className="relative w-24 h-24">
        {isLoading ? (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <CircularLoader />
            </div>
        ) : (
            <>
                {image ? (
                    <div className="w-full h-full overflow-hidden rounded-lg">
                        <img
                            src={image}
                            alt="Uploaded"
                            className="object-cover w-full h-full"
                        />
                        <button
                            className="absolute top-0 right-0 p-1 text-white bg-red-500 rounded-full"
                            onClick={clearImage}
                        >
                            {clearIcon}
                        </button>
                    </div>
                ) : (
                    <div className="w-full h-full overflow-hidden rounded-lg bg-gray-200 flex items-center justify-center">
                        <img
                            src={placeholderImage}
                            alt="Placeholder"
                            className="object-contain w-full h-full"
                        />
                    </div>
                )}
            </>
        )}
    </div>
);
export default ImagePreview;