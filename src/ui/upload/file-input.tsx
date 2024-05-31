import React from "react";

interface FileInputProps {
    accept: string;
    onChange: (file: File) => void;
    isLoading: boolean;
    imageSelected: boolean;
    label: string
}

const FileInput: React.FC<FileInputProps> = ({
    accept,
    onChange,
    isLoading,
    imageSelected,
    label
}) => (
    <div className="flex flex-col gap-2">
        {!isLoading && !imageSelected && (
            <label className="cursor-pointer text-white hover:underline">
                {label}
                <input
                    type="file"
                    accept={accept}
                    className="hidden"
                    onChange={(e) => onChange(e.target.files?.[0] as File)}
                    disabled={isLoading}
                />
            </label>
        )}
    </div>
);

export default FileInput;