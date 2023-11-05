import { ChangeEvent, useState } from "react";

export default function FileUploadButton() {
  const [selectedName, setSelectedName] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedName(file.name);
    } else {
      setSelectedName(null);
    }
  };

  return (
    <div className="parent">
      <div className="file-upload rounded-md flex justify-center items-center flex-col text-slate-500">
        <img src="/images/upload.png" alt="upload" className="w-20 h-20" />
        <h3> {selectedName || "Add Image"}</h3>
        <input type="file" onChange={handleFileChange} />
      </div>
    </div>
  );
}
