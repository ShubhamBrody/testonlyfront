/* eslint-disable import/no-anonymous-default-export */

import classes from "./FormBooks.module.css";
import Input from "../../../UI/Input";
import { useState } from "react";
import axios from "axios";

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

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(dbdata);
    await axios
      .post("http://localhost:5000/books/createorupdate", dbdata)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

//Axios get ref
//   const getAllHandler = async (e) => {
//     await axios.get("http://localhost:5000/books/getall").then((res) => {
//         console.log(res.data);
//     }).catch((err) => {
//         console.error(err);
//     });
//   }

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

  return (
    <div className={classes.background}>
      <div className={classes.formConatiner}>
        <div className={classes.formTitle}>
          <h3>MISSION MILLION BOOKS</h3>
        </div>
        <form onSubmit={onSubmitHandler}>
          <Input
            label="Full Name"
            type="text"
            required={true}
            inputChanged={inputRecieved}
          />
          <Input
            label="Email Id"
            type="email"
            required={true}
            inputChanged={inputRecieved}
          />
          <Input
            label="Contact number"
            type="number"
            required={true}
            inputChanged={inputRecieved}
          />
          <Input
            label="Genre of book/books"
            type="text"
            required={true}
            isNumber={true}
            step={1}
            min={0}
            inputChanged={inputRecieved}
          />
          <Input
            label="Number of books"
            type="number"
            required={true}
            inputChanged={inputRecieved}
          />
          <Input
            label="Condition of the books"
            type="text"
            required={true}
            inputChanged={inputRecieved}
          />
          <button className={classes.submitbtn} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
