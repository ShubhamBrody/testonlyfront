import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import styled from "styled-components";

const form_id = "form_id";
class MaintenanceForm extends Component {
  editOnClick = event => {
    event.preventDefault();
    const data = !this?.props?.status?.edit;
    this.props.setStatus({
      edit: data
    });
  };

  cancelOnClick = event => {
    event.preventDefault();
    this.props.resetForm();
    this.props.setStatus({
      edit: false
    });
  };

  _renderAction() {
    return (
      <React.Fragment>
        <div className="form-statusbar">
          {this?.props?.status?.edit ? (
            <React.Fragment>
              <button
                className="btn btn-primary btn-sm"
                type="submit"
                form={form_id}
                style={{marginTop: "-90px", marginLeft: "420px", zIndex: "10", backgroundColor: "transparent", borderColor: "transparent"}}
              >
                <img src="tick.png" style={{width: "15px", height: "15px"}} alt="tick"/>
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={this.cancelOnClick}
                style={{marginTop: "-139px", marginLeft: "530px", zIndex: "10", backgroundColor: "transparent", borderColor: "transparent"}}
              >
                <img src="cross.png" style={{width: "15px", height: "15px"}} alt="cross"/>
              </button>
            </React.Fragment>
          ) : (
            <button
              className="btn btn-primary btn-sm"
              onClick={this.editOnClick}
              style={{marginTop: "-90px", marginLeft: "515px", zIndex: "10", backgroundColor: "transparent", borderColor: "transparent"}}
            >
              <img src="pencil-alt-solid.svg" style={{width: "20px", height: "20px"}} alt="pencil"/>
            </button>
          )}
        </div>
      </React.Fragment>
    );
  }

  _renderFormView = () => {
    return (
      <React.Fragment>
        <Date type="text" value={this?.props?.fields?.date}/><br/> 
        <TextArea rows="6" cols="68" value={this?.props?.fields?.news}/>
      </React.Fragment>
    );
  };

  _renderFormInput = () => {
    return (
      <React.Fragment>
        <div className="form-group row">
          <label style={{fontSize: "14px", fontWeight: "600"}} className="col-sm-2 col-form-label">Date</label>
          <div className="col-sm-10">
            <Field
              type="text"
              name="date"
              className="form-control"
              placeholder="Name"
              style={{color:"white", backgroundColor: "transparent"}}
            />
          </div>
        </div><br/>
        <div className="form-group row">
          <label style={{fontSize: "13px", fontWeight: "600"}} className="col-sm-2 col-form-label">Content</label>
          <div className="col-sm-10">
            <Field
              type="textarea"
              name="news"
              className="form-textarea"
              as="textarea"
              placeholder="Mobile No"
              rows="5"
              cols="60"
              style={{color:"white", resize: "none", backgroundColor: "transparent", textAlign: "center"}}
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
  mapPropsToStatus: props => {
    return {
      edit: props?.edit || false
    };
  },
  mapPropsToValues: props => {
    return {
      date: props.fields.date,
      news: props.fields.news
    };
  },
  enableReinitialize: true,
  handleSubmit: (values, { props, ...actions }) => {
    props.updateFields(values);
    actions.setStatus({
      edit: false
    });
  }
})(MaintenanceForm);

const Date = styled.input`
  border: none;
  background-color: #191919;
  color: #e0aa3e;
  font-weight: 600;
  font-size: 14px;
  margin: 0px auto;
  text-align: center;
  margin-bottom: 20px;
  pointer-events: none;
  z-index: -1;
`;

const TextArea = styled.textarea`
  margin-top: 20px;
  border: none;
  background-color: #191919;
  margin: 0px auto;
  text-align: center;
  resize: none;
  z-index: -1;
  pointer-events: none;
  color: white;
`;

export default FormikForm;