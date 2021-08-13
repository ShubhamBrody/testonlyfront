import React, { Component } from "react";
import $ from "jquery";
import styled from "styled-components";
import { Card, CardTitle } from "react-bootstrap-card";
import axios from "axios";
import { connect } from "react-redux";

class Events extends Component {
  // state = {};

  constructor(props) {
    super(props);
    this.state = {
      file: "",
      fileName: "",
      isUploaded: false,
      uploadedFile: {},
      eventTitle: "",
      eventDescription: "",
      eventsData: [],
      isContentLoaded: false,
      addEvent: false,
      idToEdit: -1,
      titleEdit: "",
      descriptionEdit: "",
      imagenameEdit: "",
      imageEdit: "",
    };
  }

  imageExtensions = [
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

  checkIfAFileISImage = (fileName) => {
    console.log(fileName.split(".").pop());
    if (this.imageExtensions.includes(fileName.split(".").pop())) {
      console.log("true");
      return true;
    } else return false;
  };

  onDeleteFile = async (fileName) => {
    try {
      await axios
        .post("http://localhost:5000/events/deleteimage", {
          fileName: fileName,
        })
        .then((response) => {
          if (response.data === "SUCCESS") {
            this.setState({
              ...this.state,
              isUploaded: false,
              uploadedFile: {},
            });
          } else if (response.data === "FILE DOESNT EXIST") {
            alert("The file doesn't exist!");
          } else if (response.data === "ERROR") {
            alert(
              "An error has occurred in the server while deleting the image!"
            );
          }
        })
        .catch((error) => {
          alert("Error occured : " + error);
        });
    } catch (err) {
      if (err.response.status === 500) {
        console.log(err);
      } else {
        console.log(err.response.data);
      }
    }
  };

  onDeleteEvent = async (id, fileName) => {
    try {
      await axios
        .post("http://localhost:5000/events/deleteevent", {
          id: id,
        })
        .then((response) => {
          if (response.data.report === "SUCCESS") {
            this.onDeleteFile(response.data.imagename);
            this.getAllEvents();
            alert("The event was deleted successfully");
          } else if (response.data === "ERROR") {
            alert(
              "An error has occurred in the server while deleting the event!"
            );
          }
        })
        .catch((error) => {
          alert("Error occured : " + error);
        });
    } catch (err) {
      if (err.response.status === 500) {
        console.log(err);
      } else {
        console.log(err.response.data);
      }
    }
  };

  createEvent = async (eventTitle, eventDescription, fileName) => {
    try {
      await axios
        .post("http://localhost:5000/events/eventupload", {
          title: eventTitle,
          description: eventDescription,
          imagename: fileName,
        })
        .then((response) => {
          if (response.data === "SUCCESS") {
            this.getAllEvents();
          } else if (response.data === "ERROR") {
            this.onDeleteFile(this.state.fileName);
            alert("An error has occurred in the server while uploading event!");
          }
        })
        .catch((error) => {
          this.onDeleteFile(this.state.fileName);
          alert("Error occured : " + error);
        });
    } catch (err) {
      if (err.response.status === 500) {
        console.log(err);
      } else {
        console.log(err.response.data);
      }
    }
    return "SUCCESS";
  };

  UpdateEvent = async () => {
    if (this.state.titleEdit === "" || this.state.descriptionEdit === "") {
      alert("Event title / description should not be empty");
      return;
    }

    if (!this.checkIfAFileISImage(this.state.imagenameEdit)) {
      alert("Please upload a valid image file");
      return;
    }

    const formData = new FormData();
    formData.append("file", this.state.imageEdit);

    try {
      await axios
        .post("http://localhost:5000/events/updateevent", {
          id: this.state.idToEdit,
          imagename: this.state.imagenameEdit,
          title: this.state.titleEdit,
          description: this.state.descriptionEdit,
        })
        .then((response) => {
          if (response.data.report === "SUCCESS") {
            if (response.data.imagename !== this.state.imagenameEdit) {
              this.onDeleteFile(response.data.imagename);
              this.ImageUpload(formData, false);
            }
            this.getAllEvents();
            this.setState({
              ...this.state,
              idToEdit: "",
              titleEdit: "",
              descriptionEdit: "",
              imagenameEdit: "",
            });
            alert("The event was updated successfully");
          } else if (response.data === "ERROR") {
            alert(
              "An error has occurred in the server while updating the event!"
            );
          }
        })
        .catch((error) => {
          alert("Error occured : " + error);
        });
    } catch (err) {
      if (err.response.status === 500) {
        console.log(err);
      } else {
        console.log(err.response.data);
      }
    }
  };

  ImageUpload = async (formData, canCreate) => {
    try {
      await axios
        .post("http://localhost:5000/events/imageupload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          const { fileName, filePath, repeated } = response.data;
          this.setState({
            ...this.state,
            isUploaded: true,
            uploadedFile: { fileName, filePath },
          });
          if (repeated) alert(`Image "${fileName}" already exists`);
          else if (canCreate) {
            if (
              this.createEvent(
                this.state.eventTitle,
                this.state.eventDescription,
                this.state.fileName
              ) === "SUCCESS"
            )
              this.onCancel();
            alert("Event Created Successfully!");
          } else {
            this.getAllEvents();
          }
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

  onFormSubmit = async (e) => {
    e.preventDefault();

    if (this.state.eventTitle === "" || this.state.eventDescription === "") {
      alert("Event title / description should not be empty");
      return;
    }

    if (this.state.fileName === "" || this.state.file === "") {
      alert("Please select a file to upload");
      return;
    }

    if (!this.checkIfAFileISImage(this.state.file.name)) {
      alert("Please upload a valid image file");
      return;
    }

    const formData = new FormData();
    formData.append("file", this.state.file);

    this.ImageUpload(formData, true);
  };

  onChange = (e) => {
    console.log(e);
    e.target.files[0] &&
      this.setState({
        ...this.state,
        file: e.target.files[0],
        fileName: e.target.files[0].name,
      });
    if (e.target.files && e.target.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $("#image").attr("src", e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  onChangeInputForEdit = (e) => {
    e.target.files[0] &&
      this.setState({
        ...this.state,
        imageEdit: e.target.files[0],
        imagenameEdit: e.target.files[0].name,
      });
    console.log("Changed image name : ", this.state.imagenameEdit);
    if (e.target.files && e.target.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $("#imageforediting").attr("src", e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  getAllEvents = async () => {
    await axios
      .get("http://localhost:5000/events/getall")
      .then((response) => {
        this.setState({
          ...this.state,
          eventsData: [...response.data],
        });
        console.log(this.state.eventsData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  async componentDidMount() {
    await this.getAllEvents()
      .then(() => {
        this.setState({
          ...this.state,
          isContentLoaded: true,
        });
      })
      .catch(() => {
        console.log("Error occured while loading the content");
      });
  }

  onCancel = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      file: {},
      fileName: "",
      eventTitle: "",
      eventDescription: "",
    });
    $("#image").attr(
      "src",
      "https://image.flaticon.com/icons/png/512/25/25340.png"
    );
  };

  onCancelChanges = () => {
    this.setState({
      ...this.state,
      idToEdit: "",
      titleEdit: "",
      descriptionEdit: "",
      imagenameEdit: "",
    });
  };

  editOnClick = (event) => {
    this.setState({
      ...this.state,
      idToEdit: event._id,
      titleEdit: event.title,
      descriptionEdit: event.description,
      imagenameEdit: event.imagename,
    });
  };

  FirstEditEventPhase = ({ event }) => (
    <span
      style={{
        zIndex: 10,
        height: "40px",
        marginTop: "-7%",
        marginRight: "15px",
        float: "right",
      }}
    >
      <button
        className="btn btn-light btn-sm"
        onClick={() => this.editOnClick(event)}
        style={{
          backgroundColor: "transparent",
          border: "transparent",
        }}
      >
        <img
          src="pencil-alt-solid.svg"
          style={{ width: "20px", height: "20px" }}
          alt="pencil"
        />
      </button>
      <button
        className="btn btn-light btn-sm"
        onClick={() => this.onDeleteEvent(event._id, event.imagename)}
        style={{
          height: "40px",
          backgroundColor: "transparent",
          border: "transparent",
        }}
      >
        <img
          src="trash.svg"
          style={{ width: "22px", height: "27px" }}
          alt="trash"
        />
      </button>
    </span>
  );

  DisplayContentForUser = () =>
    this.state.eventsData.map((event) => {
      return (
        <>
          <ContentDiv>
            <Heading>{event.title}</Heading>
            <ContentWrapper>
              <Inner>
                <img src={`uploads/${event.imagename}`} alt="Refresh for img" />
              </Inner>
              <Inner>
                <Description>{event.description}</Description>
              </Inner>
            </ContentWrapper>
          </ContentDiv>
          <br />
        </>
      );
    });

  EditingContent = ({ event }) => {
    return (
      <>
        <Grid>
          <br />
          <CardTitle style={{ color: "#e0aa3e" }}>Edit Event</CardTitle>
          <span style={{ marginTop: "-4%", marginLeft: "87%" }}>
            <button
              onClick={this.UpdateEvent}
              style={{
                // width: "30px",
                height: "auto",
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            >
              Save{" "}
            </button>
            <button
              onClick={this.onCancelChanges}
              style={{
                marginLeft: "7px",
                // width: "50px",
                height: "auto",
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            >
              Cancel{" "}
            </button>
          </span>
          <br />
          <MyForm>
            <input
              style={{ color: "black" }}
              value={this.state.titleEdit}
              type="text"
              id="eventtitle"
              placeholder="Event Name"
              onChange={(e) => {
                this.setState({
                  ...this.state,
                  titleEdit: e.target.value,
                });
              }}
            />

            <br />

            <img
              onClick={() => {
                $("#editingimage").click();
              }}
              id="imageforediting"
              src={`uploads/${this.state.imagenameEdit}`}
              style={{ cursor: "pointer" }}
              alt=""
            />

            <input
              type="file"
              accept="image/*"
              id="editingimage"
              style={{ display: "none" }}
              onChange={this.onChangeInputForEdit}
            />

            <textarea
              style={{ color: "black" }}
              rows="9"
              cols="70"
              value={this.state.descriptionEdit}
              id="eventdescription"
              placeholder="Event Description"
              onChange={(e) => {
                this.setState({
                  ...this.state,
                  descriptionEdit: e.target.value,
                });
              }}
            />
          </MyForm>
        </Grid>
      </>
    );
  };

  EditableContent = () =>
    this.state.eventsData.map((event) => {
      return (
        <>
          {this.state.idToEdit === event._id ? (
            <this.EditingContent event={event} />
          ) : (
            <>
              <ContentDiv>
                <Heading>{event.title}</Heading>
                <this.FirstEditEventPhase event={event} />
                <ContentWrapper>
                  <Inner>
                    <img
                      src={`uploads/${event.imagename}`}
                      alt="Refresh for img"
                    />
                  </Inner>
                  <Inner>
                    <Description>{event.description}</Description>
                  </Inner>
                </ContentWrapper>
              </ContentDiv>
              <br />
            </>
          )}
        </>
      );
    });

  render() {
    return (
      <Container>
        <img
          src="events-title.png"
          style={{ marginTop: "120px", animation: "image 1s ease-in-out" }}
          alt=""
        ></img>
        <p style={{ marginTop: "120px", marginBottom: "6px" }}>
          We have started with our own digital sessions every sunday for rural
          youth
        </p>
        <img
          src="online-sessions.png"
          style={{ marginTop: "50px", marginBottom: "0px" }}
          alt=""
        ></img>

        <SecondDiv>
          <h2>ONGOING EVENTS</h2>
          <p
            style={{
              color: "#191919",
              textAlign: "center",
              marginBottom: "100px",
            }}
          >
            In our digital sessions, we are holding ice breaking sessios for our
            newly joined youth along with the presentations given by the team
            members regarding personality development. We are recruiting and
            training volunteers as well.
          </p>

          {this.state.isContentLoaded &&
            (this.props.signInDetails ? (
              <this.EditableContent />
            ) : (
              <this.DisplayContentForUser />
            ))}
          {this.props.signInDetails && (
            <span>
              <button
                onClick={() => {
                  console.log($("myfile"));
                  this.setState({
                    ...this.state,
                    addEvent: !this.state.addEvent,
                  });
                }}
                style={{
                  backgroundColor: "rgba(25, 25, 25, 0.8)",
                  color: "#e0aa3e",
                  fontSize: "22px",
                  margin: "0px 40px 40px 75%",
                  padding: "15px",
                  width: "220px",
                }}
              >
                {this.state.addEvent ? "Cancel Add Event" : "Add Event"}
              </button>
              {this.state.addEvent && (
                <Grid>
                  <br />
                  <CardTitle style={{ color: "#e0aa3e" }}>
                    Create Event
                  </CardTitle>
                  <span style={{ marginTop: "-4%", marginLeft: "87%" }}>
                    <button
                      onClick={this.onFormSubmit}
                      style={{
                        width: "30px",
                        height: "auto",
                        backgroundColor: "transparent",
                        borderColor: "transparent",
                      }}
                    >
                      <img
                        src="checked.svg"
                        style={{ height: "25px", marginLeft: "-5px" }}
                        alt="Tick"
                      />
                    </button>
                    <button
                      onClick={this.onCancel}
                      style={{
                        marginLeft: "7px",
                        width: "30px",
                        height: "auto",
                        backgroundColor: "transparent",
                        borderColor: "transparent",
                      }}
                    >
                      <img
                        src="cancel.svg"
                        style={{ height: "30px", marginLeft: "-6px" }}
                        alt="Cross"
                      />
                    </button>
                  </span>
                  <br />
                  <MyForm>
                    <input
                      style={{ color: "black" }}
                      value={this.state.eventTitle}
                      type="text"
                      id="eventtitle"
                      placeholder="Event Name"
                      onChange={(e) => {
                        this.setState({
                          ...this.state,
                          eventTitle: e.target.value,
                        });
                      }}
                    />

                    <br />

                    <img
                      onClick={() => {
                        $("#myfile").click();
                      }}
                      id="image"
                      src="https://image.flaticon.com/icons/png/512/25/25340.png"
                      style={{ cursor: "pointer" }}
                      alt=""
                    />

                    <input
                      type="file"
                      accept="image/*"
                      id="myfile"
                      style={{ display: "none" }}
                      onChange={this.onChange}
                    />

                    <textarea
                      style={{ color: "black" }}
                      rows="9"
                      cols="70"
                      value={this.state.eventDescription}
                      id="eventdescription"
                      placeholder="Event Description"
                      onChange={(e) => {
                        this.setState({
                          ...this.state,
                          eventDescription: e.target.value,
                        });
                      }}
                    />
                  </MyForm>
                </Grid>
              )}
            </span>
          )}
        </SecondDiv>
      </Container>
    );
  }
}

// {this.props.signInDetails ? (
// <span
//   style={{
//     zIndex: 10,
//     height: "40px",
//     marginTop: "-7%",
//     marginRight: "15px",
//     float: "right",
//   }}
// >
//   <button
//     className="btn btn-light btn-sm"
//     onClick={this.editOnClick}
//     style={{
//       backgroundColor: "transparent",
//       border: "transparent",
//     }}
//   >
//     <img
//       src="pencil-alt-solid.svg"
//       style={{ width: "20px", height: "20px" }}
//       alt="pencil"
//     />
//   </button>
//   <button
//     className="btn btn-light btn-sm"
//     onClick={() => this.onDeleteEvent(event._id, event.imagename)}
//     style={{
//       height: "40px",
//       backgroundColor: "transparent",
//       border: "transparent",
//     }}
//   >
//     <img
//       src="trash.svg"
//       style={{ width: "22px", height: "27px" }}
//       alt="trash"
//     />
//   </button>
// </span>
// ) : <span></span>}

const mapStateToProps = (state) => {
  return {
    signInDetails: state.signedIn,
  };
};

const MyForm = styled.form`
  input {
    width: 80%;
    height: 35px;
    margin-bottom: 25px;
    // background-color: transparent;
  }
  img {
    width: 250px;
    height: 250px;
    border-radius: 300px;
    margin-left: 60px;
    margin-top: 0px;
    float: left;
  }
  textarea {
    margin-left: 0px;
    margin-top: 12px;
    resize: none;
    overflow: auto;
    // background-color: transparent;
  }
  @media (max-width: 1050px) {
    img {
      margin-left: 20px;
    }
  }
`;

const Grid = styled(Card)`
  background-color: rgba(25, 25, 25, 0.8);
  width: 64rem;
  height: 27rem;
  border-radius: 6px;
  position: relative;
  text-align: center;
  color: white;
  margin: 0px auto;
  margin-bottom: 60px;
  @media (max-width: 1050px) {
    width: 56rem;
  }
`;

const Inner = styled.div`
  margin: auto 30px;
  @media (max-width: 1400px) {
    // margin-top: 30px;
  }
`;

const Description = styled.div`
  text-align: justify;
  color: #fff;
  width: 700px;
  margin-left: -100px;
  // margin-top: 20px;
  @media (max-width: 1400px) {
    width: 500px;
    margin-left: -50px;
  }
  @media (max-width: 1200px) {
    width: 500px;
    margin-left: -60px;
  }
`;

const Heading = styled.div`
  text-align: center;
  color: #e0aa3e;
  font-size: 35px;
  border-radius: 5px;
  font-weight: 800;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 20px;
`;

const ContentWrapper = styled.div`
  font-size: 20px;
  text-align: justify;
  justify-content: space-around;
  display: flex;
  img {
    vertical-align: middle;
    height: 250px;
    width: 250px;
    border-radius: 300px;
  }
`;

const Container = styled(Card)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 0;
  border-radius: 0px;
  p {
    text-align: center;
    // margin-left: 200px;
    // margin-right: 200px;
    // margin-top: 30px;
    margin: 30px auto;
  }
  h2 {
    text-align: center;
    color: #e0aa3e;
  }
  @keyframes image {
    from {
      opacity: 0;
      transform: translateX(-200px);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  background: url("background.png") center center / cover no-repeat fixed;
`;

const SecondDiv = styled.div`
  h2 {
    color: black;
    margin-top: 100px;
    font-size: 40px;
  }
  p {
    text-align: justify;
    margintop: 65px;
    color: black;
    width: 900px;
  }
  @media (max-width: 1000px) {
    h2 {
      margin-top: 150px;
    }
  }
`;

const ContentDiv = styled.div`
  background-color: rgba(25, 25, 25, 0.8);
  border-radius: 10px;
  position: relative;
  margin: 0px 150px 30px 150px;
  padding: 30px 0px 40px 0px;
  @media (max-width: 1200px) {
    margin: 0px 100px 30px 100px;
  }
  @media (max-width: 1040px) {
    margin: 0px 50px 30px 50px;
  }
`;

export default connect(mapStateToProps)(Events);
