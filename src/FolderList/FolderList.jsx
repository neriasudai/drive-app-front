import { useEffect, useState } from "react";
import Folder from "../Folder/Folder";
import axios from "axios";
import "./FolderList.css";
import FolderContent from "../FolderContent/FolderContent";

const FolderList = () => {
  const [dirList, setDirList] = useState([]);
  const [folderContent, setFolderContent] = useState(false);
  const [folderName, setFolderName] = useState("");
  useEffect(() => {
    getDir();
  }, []);

  const getDir = () => {
    const URL = "http://localhost:3000/mkdir";
    const { data } = axios.get(URL).then((res) => setDirList(res.data));
  };

  return (
    <div className="fol">
      <div className="folder__list__content">
        {dirList.length > 0 &&
          dirList.map((dir) => {
            return (
              <Folder
                name={dir}
                onClick={() => {
                  setFolderContent(!folderContent);
                  setFolderName(dir);
                }}
              />
            );
          })}
      </div>
      {folderContent && <FolderContent name={folderName} />}
    </div>
  );
};

export default FolderList;
