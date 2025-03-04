import axios from "axios";
import { AiOutlineFileDone } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = ()=>{

    const [file, setFile] = useState<File | null>(null);
    const [fileIs, setFileIs] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
          setFile(event.target.files[0]);
          setFileIs(true)
        }
        
    };

    const handleFile = async () => {
        if (!file) {
            alert("Please select a file first.");
            return;
        }
        try {
            const formData = new FormData();
            formData.append("file", file);

            const response = await axios.post("http://localhost:4000/api/v1/admin/uploadranking", formData, {
                headers: {
                "Content-Type": "multipart/form-data",
                },
            });

            console.log("File uploaded successfully:", response.data);
            alert("File uploaded successfully!");
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("Failed to upload the file. Please try again.");
        }
    };

    const navigate = useNavigate();


    return <div className="w-full h-screen bg-black flex items-center flex-col">
        <span className="text-white text-3xl mt-2 font-montserrat font-bold">Admin Panel</span>
        <div className="w-full flex mt-5 text-lg gap-2 items-center">
            <h3 className="text-white">Upload your Team Ranking File</h3>
            <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} className=" w-28 cursor-pointer" />
            {fileIs ? <AiOutlineFileDone size={20} color="skyblue"/>: ""}
            <button onClick={handleFile} className="text-slate-700 font-semibold bg-slate-300 rounded-xl w-44 h-9">Upload to Backend</button>
        </div>
        <div className="w-full flex mt-5 text-lg gap-2 items-center">
            <span className="text-white">Create New Team</span>
            <button onClick={()=>navigate('/admin/createteam')} className="text-slate-700 font-semibold bg-slate-300 rounded-xl w-32 h-9">Add</button>
        </div>
        <div className="w-full flex mt-5 text-lg gap-2 items-center">
            <span className="text-white">Create New Event</span>
            <button onClick={()=>navigate('/admin/createevent')} className="text-slate-700 font-semibold bg-slate-300 rounded-xl w-32 h-9">Add</button>
        </div>
    </div>
}

export default Admin