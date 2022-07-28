import { useEffect, useState } from "react";
import "./App.css";
import Input from "./Input/Input";
import axios from "axios";
import PopUp from "./PopUp/PopUp";
import Button from "./Button/Button";
import Layout from "./Layout/Layout";
import FolderList from "./FolderList/FolderList";

function App() {
  const [show, setShow] = useState(false);
  const [dirName, setDirName] = useState("");
  const [isExsist, setIsExsist] = useState();
  const [uploadShow, setUploadShow] = useState(false);

  function onSendHandler() {
    const URL = "http://localhost:3000/mkdir";
    axios
      .post(URL, { name: dirName })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  function refreshPage() {
    window.location.reload(false);
  }

  function c() {
    axios
      .get(`http://localhost:3000/mkdir/${dirName}`)
      .then((res) => setIsExsist(res.data));
  }

  return (
    <div className="App">
      <Layout>
        <FolderList />
        <Button
          type="button"
          text="Add Folder"
          onClick={() => setShow(!show)}
        />
        <Button
          type="button"
          text="Upload New File"
          onClick={() => setUploadShow(true)}
        />

        {uploadShow && <Input />}

        {show && (
          <PopUp
            show={show}
            onClose={() => setShow(false)}
            onSend={() => {
              const check = c();

              if (check) {
                setShow(false);
              } else {
                onSendHandler();
                refreshPage();
                setShow(false);
                setIsExsist(false);
              }
            }}
            onChange={(e) => setDirName(e.target.value)}
          />
        )}
        {isExsist && <h5>Dir Exsist</h5>}
      </Layout>
    </div>
  );
}

export default App;

{
  /* <Input /> */
}
// {

// }
