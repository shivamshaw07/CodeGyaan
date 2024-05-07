import React, { useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";
import { useSelector } from "react-redux";

import "video-react/dist/video-react.css";
import { Player } from "video-react";

export default function Upload({
  name,
  label,
  register,
  setValue,
  errors,
  video = false,
  viewData = null,
  editData = null,
}) {
  const { course } = useSelector((state) => state.course);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewSource, setPreviewSource] = useState(
    viewData ? viewData : editData ? editData : ""
  );
  const inputRef = useRef(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      if (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg") {
        previewFile(file);
        setSelectedFile(file);
      } else {
        // Show error message or handle invalid file type
        console.log("Invalid file type. Please select a JPEG, PNG, or JPG image.");
      }
    }
  };
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/jpeg, image/png, image/jpg",
    onDrop,
  });

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  useEffect(() => {
    register(name, { required: true });
  }, [register]);

  useEffect(() => {
    setValue(name, selectedFile);
  }, [selectedFile, setValue]);

  const handleBrowseClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="flex flex-col space-y-2 text-white">
      <label className="text-sm text-white/80 font-semibold transition-all duration-400" htmlFor={name}>
        {label} {!viewData && <sup className="text-red-700 text-lg">*</sup>}
      </label>
      <div
        className={`${
          isDragActive ? "bg-blue-bg" : "bg-blue-bg"
        } flex min-h-[250px] cursor-pointer items-center justify-center rounded-md border-2 border-dotted border-richblack-500`}
        onClick={(event) => {
          if (!event.target.tagName.toLowerCase() === "input") {
            event.stopPropagation();
          }
        }}
      >
        {previewSource ? (
          <div className="flex w-full flex-col p-6">
            {!video ? (
              <img
                src={previewSource}
                alt="Preview"
                className="h-full w-full rounded-md object-cover"
              />
            ) : (
              <Player aspectRatio="16:9" playsInline src={previewSource} />
            )}
            {!viewData && (
              <button
                type="button"
                onClick={() => {
                  setPreviewSource("");
                  setSelectedFile(null);
                  setValue(name, null);
                }}
                className="mt-3 text-richblack-400 underline"
              >
                Cancel
              </button>
            )}
          </div>
        ) : (
          <div
            className="flex w-full flex-col items-center p-6"
            {...getRootProps()}
          >
                <input {...getInputProps({ accept: ".jpeg, .png, .jpg" })} ref={inputRef} />

            <div
              className="grid aspect-square w-14 place-items-center rounded-full bg-pure-greys-800"
              onClick={handleBrowseClick}
            >
              <FiUploadCloud className="text-2xl text-yellow-50" />
            </div>
            <p className="mt-2 max-w-[200px] text-center text-sm text-richblack-200">
              Drag and drop an {!video ? "image" : "video"}, or click to{" "}
              <span className="font-semibold text-yellow-50">Browse</span> a
              file
            </p>
            <ul className="mt-10 flex list-disc justify-between space-x-12 text-center  text-xs text-richblack-200">
              <li>Aspect ratio 16:9</li>
              <li>Recommended size 1024x576</li>
            </ul>
          </div>
        )}
      </div>
      {errors[name] && (
        <span className="text-red-400 text-xs mt-1">
          {label} is required
        </span>
      )}
    </div>
  );
}