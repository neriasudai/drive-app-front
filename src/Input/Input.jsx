import { useState } from "react";
import axios from "axios";
const Input = () => {
  const [file, setFile] = useState();
  const [isSelect, setIsSelect] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("myFile", file);
    console.log(formData.get("myFile"));
    axios
      .post("http://localhost:3000/file/upload/bay", formData)
      .then((data) => console.log(data.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="input__style">
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name=""
          id=""
          onChange={(e) => {
            setFile(e.target.files[0]);
            setIsSelect(true);
          }}
        />
        <button type="submit">Upload</button>
      </form>
      {isSelect && (
        <div>
          <p>{file.name}</p>
          <p>{file.type}</p>
          <p>{file.size}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
