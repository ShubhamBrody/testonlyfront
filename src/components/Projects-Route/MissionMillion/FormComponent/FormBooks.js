/* eslint-disable import/no-anonymous-default-export */

import Form from "../../../UI/Form";
import { useState } from "react";
import axios from "axios";
import formBg from "../../../../resources/images/form-bg-books.png";

export default () => {
  const [dbdata, setDbData] = useState({
    name: "",
    email: "",
    contact: 0,
    data: {
      genre: "",
      number_of_books: 0,
      condition: "",
    },
  });

  const [isFormFilled, setIsFormFilled] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(dbdata);
    await axios
      .post("http://localhost:5000/books/createorupdate", dbdata)
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
          case "Genre of book/books":
            return {
              ...prevData,
              data: {
                ...prevData.data,
                genre: data.value,
              },
            };
          case "Number of books":
            return {
              ...prevData,
              data: {
                ...prevData.data,
                number_of_books: data.value,
              },
            };
          case "Condition of the books":
            return {
              ...prevData,
              data: {
                ...prevData.data,
                condition: data.value,
              },
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
      fieldType: "input",
      id: "genre",
      label: "Genre of book/books",
      type: "text",
      required: true,
      inputChanged: inputRecieved,
    },
    {
      fieldType: "input",
      id: "number_of_books",
      label: "Number of books",
      type: "number",
      required: true,
      isNumber: true,
      step: 1,
      min: 0,
      inputChanged: inputRecieved,
    },
    {
      fieldType: "input",
      id: "condition",
      label: "Condition of the books",
      type: "text",
      required: true,
      inputChanged: inputRecieved,
    }
  ];

  const changeBackToNormal = () => {
    setIsFormFilled(false);
  };

  return (
    <Form
      hasBG={true}
      title="MISSION MILLION BOOKS"
      imgSrc={formBg}
      fillAgain={changeBackToNormal}
      isFormFilled={isFormFilled}
      fields={fields}
      onSubmitHandler={onSubmitHandler}
      contactDetailsTag={true}
      bottomTabText="Below are the details to contact us"
      customStyle={{width: '30%'}}
    />
  );
};
