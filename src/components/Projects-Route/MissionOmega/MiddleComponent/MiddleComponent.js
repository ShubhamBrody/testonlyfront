/* eslint-disable import/no-anonymous-default-export */
import classes from "./MiddleComponent.module.css";
import Form from "../../../UI/Form";
import { useState } from "react";
import axios from "axios";
import FormBackground from "../../../UI/FormBackground";
import qrcode from "../../../../resources/images/qrcode.png";
import API from "../../../../api/ApiLink";

export default () => {
  const [dbdata, setDbData] = useState({
    name: "",
    email: "",
    contact: 0,
    amount: 0,
  });

  const [isFormFilled, setIsFormFilled] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(dbdata);
    await axios
      .post(API("fundraising", "createorupdate"), dbdata)
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
      if (!data.value.match(/^[-+]?[0-9]+$/)) {
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
          case "Please mention the amount here":
            return {
              ...prevData,
              amount: data.value,
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
      id: "amount",
      label: "Please mention the amount here",
      type: "number",
      min: 1,
      required: true,
      inputChanged: inputRecieved,
    },
  ];

  const changeBackToNormal = () => {
    setIsFormFilled(false);
  };
  return (
    <div className={classes.headerContainer}>
      <div className={classes.leftContainer}>
        <Form
          hasBG={false}
          title="FUND RAISING FORM"
          fillAgain={changeBackToNormal}
          isFormFilled={isFormFilled}
          fields={fields}
          onSubmitHandler={onSubmitHandler}
          contactDetailsTag={true}
          bottomTabText={
            <div>
              Use this link to pay via Razor Pay{" "}
              <a
                href="https://rzp.io/l/lr45TLs"
                style={{ textDecoration: "underline", color: "dodgerblue" }}
              >
                https://rzp.io/l/lr45TLs
              </a>
            </div>
          }
          customStyle={{ width: "100%" }}
        />
      </div>
      <div className={classes.rightContainer}>
        <FormBackground
          style={{
            backgroundColor: "rgba(50, 50, 50, 0.7)",
            width: "80%",
            height: "40%",
            textAlign: "center",
          }}
        >
          <p>Scan the QR code below to pay via</p>
          <h4 style={{ fontWeight: "bold", marginTop: "0" }}>
            GPAY, BHIM UPI, PAYPAL and PAYTM
          </h4>
          <img src={qrcode} alt="QR CODE" style={{ width: "70%" }} />
        </FormBackground>
        <br/>
        <FormBackground style={{ width: "80%", height: "40%" }}>
          <h3 style={{ color: "#e0aa3e", textAlign: "center" }}>
            Below are the details for Net Banking
          </h3>
          <p style={{ color: "#fff" }}>Name - Geolife Foundation</p>
          <p style={{ color: "#fff" }}>Account No. - 622011006511</p>
          <p style={{ color: "#fff" }}>IFSC - KKBK0000642</p>
          <p style={{ color: "#fff" }}>Kotak Mahindra Bank</p>
          <p style={{ color: "#fff" }}>Branch - Mumbai - Mulund West</p>
        </FormBackground>
      </div>
    </div>
  );
};
