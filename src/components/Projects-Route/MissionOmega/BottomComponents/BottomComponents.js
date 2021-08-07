/* eslint-disable import/no-anonymous-default-export */
import Form from "../../../UI/Form";
import formBg from "../../../../resources/images/formBGforOmega.png";
import axios from "axios";
import { useState } from "react";

export default () => {
  const [dbdata, setDbData] = useState({
    name: "",
    email: "",
    contact: 0,
    address: "",
    devicescount: 0,
    smartphone: false,
    laptop: false,
    tablet: false,
    model: "",
    age: 0,
    condition: "",
  });

  const [isFormFilled, setIsFormFilled] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(dbdata);
    await axios
      .post("http://localhost:5000/devicedonation/createorupdate", dbdata)
      .then((res) => {
        console.log(res.data);
        setIsFormFilled(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const dataValidator = (data) => {
    if (data.label === "Contact number") {
      if (!data.value.match(/^\d{10}$/)) {
        return false;
      }
    }
    return true;
  };

  const inputRecieved = (data) => {
    console.log(data);
    if (dataValidator(data)) {
      setDbData((prevData) => {
        switch (data.label) {
          case "Full Name":
            return {
              ...prevData,
              name: data.value,
            };
          case "Email Id":
            return {
              ...prevData,
              email: data.value,
            };
          case "Contact number":
            return {
              ...prevData,
              contact: data.value,
            };
          case "Address":
            return {
              ...prevData,
              address: data.value,
            };
          case "Number of devices you wish to donate":
            return {
              ...prevData,
              devicescount: data.value,
            };
          case "Device Type":
            return {
              ...prevData,
              smartphone: data.value === "on",
              laptop: data.value === "on",
              tablet: data.value === "on",
            };
          case "Model of device":
            return {
              ...prevData,
              model: data.value,
            };
          case "Age":
            return {
              ...prevData,
              age: data.value,
            };
          case "Condition":
            return {
              ...prevData,
              condition: data.value,
            };
          default:
            return prevData;
        }
      });
    }

    console.log(dbdata);
  };

  const fields = [
    {
      fieldType: "input",
      id: "name",
      label: "Full Name",
      type: "text",
      required: true,
      inputChanged: inputRecieved,
    },
    {
      fieldType: "input",
      id: "email",
      label: "Email Id",
      type: "email",
      required: true,
      inputChanged: inputRecieved,
    },
    {
      fieldType: "input",
      id: "contact",
      label: "Contact number",
      type: "text",
      required: true,
      inputChanged: inputRecieved,
    },
    {
      fieldType: "textarea",
      id: "address",
      label: "Address",
      required: true,
      height: "100px",
      inputChanged: inputRecieved,
    },
    {
      fieldType: "input",
      id: "numberdevices",
      label: "Number of devices you wish to donate",
      type: "number",
      required: false,
      min: 0,
      inputChanged: inputRecieved,
    },
    {
      fieldType: "checkbox",
      id: "devicetype",
      label: "Device Type",
      items: ["Smart Phone", "Laptop", "Tablet"],
      required: true,
      inputChanged: inputRecieved,
    },
    {
      fieldType: "input",
      id: "model",
      label: "Model of device",
      type: "text",
      required: true,
      inputChanged: inputRecieved,
    },
    {
      fieldType: "input",
      id: "deviceage",
      label: "How old is the device?",
      type: "text",
      required: true,
      inputChanged: inputRecieved,
    },
    {
      fieldType: "textarea",
      id: "condition",
      label: "Please explain the condition of the device",
      required: false,
      height: "100px",
      inputChanged: inputRecieved,
    },
  ];

  const changeBackToNormal = () => {
    setIsFormFilled(false);
  };

  return (
    <Form
      hasBG={true}
      title="DEVICE DONATION FORM"
      imgSrc={formBg}
      fillAgain={changeBackToNormal}
      isFormFilled={isFormFilled}
      fields={fields}
      onSubmitHandler={onSubmitHandler}
      contactDetailsTag={false}
      customStyle={{width: 'auto'}}
    />
  );
};
