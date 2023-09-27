"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={270} alt="A truck" />
      )}
      <CldUploadWidget
        onUpload={(result, widget) => {
          console.log(result, widget);
          if (result.event != "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
        options={{
          sources: ["local"],
          maxFiles: 5,
          multiple: false,
        }}
        uploadPreset="qxxrsyei"
      >
        {({ open }) => <button onClick={() => open()}>Upload</button>}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
