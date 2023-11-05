import { useState } from "react";

export default function FileUploadButton() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedName, setSelectedName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setSelectedName(file.name);
  };

  return (
    <div className="parent">
      <div className="file-upload rounded-md flex justify-center items-center text-slate-500">
        <img src="/images/upload.png" alt="upload" className="w-20 h-20" />
        {/* <h3> {selectedName || "Click box to upload"}</h3> */}
        <input type="file" onChange={handleFileChange} />
      </div>
    </div>
  );
}
