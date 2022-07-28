import React, { useEffect, useState } from "react";
import axios from "axios";

const FolderContent = ({ name }) => {
  const [dirContent, setDirContent] = useState([]);
  useEffect(() => {
    const URL = `http://localhost:3000/mkdir/read/${name}`;
    axios
      .get(URL)
      .then((res) => setDirContent(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {name}
      {dirContent.length > 0 && (
        <div>
          {dirContent.map((file) => (
            <div>{file}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FolderContent;
