import React, { useState } from "react";
import axios from "axios";

const Profile = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState();
  const userId = "65f7a436ff3e7437ae00ed4d";

  const uploadPdf = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("file", file);
      console.log(title, file);

      const result = await axios.post(`/api/user/${userId}`, formData, {
        headers: { "Content-type": "multipart/form-data" },
      });
      console.log(5);
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="font-semibold">
      <h1 className="text-2xl font-bold">Upload pdf here</h1>
      <input
        type="text"
        placeholder="Title"
        className="m-2 p-2"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="file"
        accept="application/pdf"
        className="m-2"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button
        onClick={uploadPdf}
        className="bg-transparent hover:bg-emerald-100 text-emrald-400 font-semibold  py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Submit
      </button>
    </div>
  );
};

export default Profile;
