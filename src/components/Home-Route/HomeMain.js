/* eslint-disable import/no-anonymous-default-export */

import { Fragment } from "react";
import Information from "./Information/Information";
import AboutUs from "./AboutUs/AboutUs";
import links from "../Navbar/Navbar.initial";
import Navbar from "../Navbar/Navbar";
import logo from "../../resources/images/logo.png";
import Footer from "../Footer/Footer";
import Welcome from "./WelcomeContent/WelcomeContent";

import { useState } from "react";
import axios from "axios";

export default () => {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [uploadedFile, setUploadedFile] = useState({});

  const imageExtensons = [
    "jpg",
    "jpeg",
    "png",
    "gif",
    "svg",
    "bmp",
    "webp",
    "ico",
    "tiff",
    "tif",
    "tga",
    "pcx",
    "xcf",
    "xpm",
    "xwd",
    "ai",
    "eps",
    "psd",
    "cdr",
    "pct",
    "pic",
    "pnm",
    "pbm",
    "pgm",
    "ppm",
    "rgb",
    "xbm",
    "xpm",
  ];

  const checkIfAFileISImage = (fileName) => {
    console.log(fileName.split(".").pop());
    if (imageExtensons.includes(fileName.split(".").pop())) {
      console.log("true");
      return true;
    }
    else
    return false;
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    if (fileName === "" || file === "") {
      alert("Please select a file to upload");
      return;
    }

    if (!checkIfAFileISImage(file.name)) {
      alert("Please upload a valid image file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios
        .post("http://localhost:5000/events/createorupdate", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          const { fileName, filePath, repeated } = response.data;
          setUploadedFile({ fileName, filePath });
          setIsUploaded(true);
          if (repeated) alert(`File "${fileName}" already exists`);
        })
        .catch((error) => {
          console.log("Error occured : " + error);
        });
    } catch (err) {
      if (err.response.status === 500) {
        console.log(err);
      } else {
        console.log(err.response.data);
      }
    }
  };
  const onChange = (e) => {
    console.log(e);
    e.target.files[0] && setFile(e.target.files[0]);
    e.target.files[0] && setFileName(e.target.files[0].name);
  };
  return (
    <Fragment>
      <form onSubmit={onFormSubmit}>
        <h1>File Upload</h1>
        <input
          type="file"
          accept="image/*"
          name="myImage"
          onChange={onChange}
        />
        <button type="submit">Upload</button>
      </form>
      {isUploaded && (
        <img
          style={{ width: "10%" }}
          src={uploadedFile.filePath || "Default_Image.png"}
          alt={uploadedFile.fileName || "just an image"}
        />
      )}
      <Navbar links={links} imgSrc={logo} />
      <Welcome />
      <AboutUs />
      <Information />
      <br />
      <br />
      <Footer />
    </Fragment>
  );
};
