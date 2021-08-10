import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import styled from "styled-components";
import axios from "axios";

const form_id = "form_id";
class MaintenanceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this?.props?.fields?.date,
      news: this?.props?.fields?.news,
    };
  }

  editOnClick = (event) => {
    event.preventDefault();
    const data = !this?.props?.status?.edit;
    this.props.setStatus({
      edit: data,
    });
  };

  cancelOnClick = (event) => {
    event.preventDefault();
    this.props.resetForm();
    this.props.setStatus({
      edit: false,
    });
  };

  databaseUpdate = async () => {
    await axios
      .post("http://localhost:5000/news/update", {
        header: "News",
        date: this.state.date,
        news: this.state.news,
      })
      .then((res) => {
        console.log(res);
        this?.props?.updateFields(this.state.date, this.state.news);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  _renderAction() {
    return (
      <React.Fragment>
        <div className="form-statusbar">
          {this?.props?.status?.edit ? (
            <React.Fragment>
              <button
                className="btn btn-light"
                type="submit"
                form={form_id}
                onClick={this.databaseUpdate}
                style={{
                  marginTop: "-90px",
                  marginLeft: "420px",
                  zIndex: "10",
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  color: '#e0aa3e',
                }}
              >
                Save
              </button>
              <button
              className="btn btn-light"
                onClick={this.cancelOnClick}
                style={{
                  marginTop: "-139px",
                  marginLeft: "530px",
                  zIndex: "10",
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  color: '#e0aa3e',
                }}
              >
                Cancel
              </button>
            </React.Fragment>
          ) : (
            <button
              className="btn btn-light btn-sm"
              onClick={this.editOnClick}
              style={{
                marginTop: "-90px",
                marginLeft: "515px",
                zIndex: "10",
                backgroundColor: "transparent",
                border: "transparent"
              }}
            >
              <img
                src="pencil-alt-solid.svg"
                style={{ width: "20px", height: "20px", color: "#e0aa3e"}}
                alt="pencil"
              />
            </button>
          )}
        </div>
      </React.Fragment>
    );
  }

  _renderFormView = () => {
    return (
      <React.Fragment>
        <Date type="text" value={this?.props?.fields?.date} />
        <br />
        <TextArea rows="6" cols="60" value={this?.props?.fields?.news} />
      </React.Fragment>
    );
  };

  _renderFormInput = () => {
    return (
      <React.Fragment>
        <div className="form-group row">
          <label
            style={{ fontSize: "14px", fontWeight: "600" }}
            className="col-sm-2 col-form-label"
          >
            Date
          </label>
          <div className="col-sm-10">
            <Field
              type="text"
              name="date"
              className="form-control"
              placeholder={this.state.date}
              value={this.state.date}
              onChange={(e) => this.setState({ date: e.target.value })}
              style={{ color: "#fff", backgroundColor: "transparent" }}
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label
            style={{ fontSize: "14px", fontWeight: "600" }}
            className="col-sm-2 col-form-label"
          >
            Content
          </label>
          <div className="col-sm-8">
            <Field
              type="textarea"
              name="news"
              className="form-textarea"
              as="textarea"
              placeholder={this.state.news}
              rows="6"
              cols="56"
              value={this.state.news}
              onChange={(e) => {
                this.setState({ news: e.target.value });
              }}
              style={{
                color: "#fff",
                resize: "none",
                backgroundColor: "transparent",
                textAlign: "justify",
                overflowY: "auto"
              }}
            />
          </div>
        </div>
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        {this._renderAction()}
        <Form id={form_id}>
          {this?.props?.status?.edit
            ? this._renderFormInput()
            : this._renderFormView()}
        </Form>
      </React.Fragment>
    );
  }
}

const FormikForm = withFormik({
  mapPropsToStatus: (props) => {
    return {
      edit: props?.edit || false,
    };
  },
  mapPropsToValues: (props) => {
    return {
      date: props.fields.date,
      news: props.fields.news,
    };
  },
  enableReinitialize: true,
  handleSubmit: (values, { props, ...actions }) => {
    props.updateFields(values);
    actions.setStatus({
      edit: false,
    });
  },
})(MaintenanceForm);

const Date = styled.input`
  border: none;
  background-color: #191919;
  color: #e0aa3e;
  font-size: 15px;
  margin: 0px auto;
  text-align: center;
  margin-bottom: 20px;
  pointer-events: none;
  z-index: -1;
`;

const TextArea = styled.textarea`
  font-size: 18px;
  margin-top: 5px;
  border: none;
  background-color: #191919;
  margin: 0px auto;
  text-align: center;
  resize: none;
  z-index: -1;
  pointer-events: none;
  color: white;
  overflow-y: auto;
`;

export default FormikForm;
