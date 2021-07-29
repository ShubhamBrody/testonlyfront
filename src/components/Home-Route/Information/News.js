import { Card, CardTitle, CardSubtitle } from "react-bootstrap-card";
import EdiText from 'react-editext';
import styled from 'styled-components';

var sectionStyle = {
    "background-color": '#191919',
    "opacity": 0.8,
    "width": '32rem',
    "height": '20rem',
    "border-radius": "6px",
    "position": "relative",
    "text-align": "center",
    "paddingTop": '1.5rem',
    "color": 'white'
}

const News = (props) => {
    return (
        <Card style={sectionStyle}>
            <CardTitle style={{color: '#ffffff, z-index: -1'}}>News</CardTitle>

        <Container>
        <CardSubtitle style={{ color: '#e0aa3e', fontSize: '15px', paddingTop: '1.5rem' }}>MAY 2021</CardSubtitle><br/>
        <StyledEdiText
            viewContainerClassName='my-custom-view-wrapper'
            type='textarea'
            inputProps={{
              rows: 5,
              cols: 2,
            }}
            saveButtonContent=''
            cancelButtonContent=''
            editButtonContent=''
            value="GeoLife Youth Club has come up with the PROJECT RED DOT campaign to raise awareness about menstruation and sanitary menstruation practices. This campaign focuses on period positivity and eco-friendly sustainable practices for the same."
            onSave={v => console.log('SAVED: ', v)}
        /> 
        </Container>
        </Card>
    );
};

const Container = styled.div`
  padding: 10px;
  // padding-bottom: 10px;
  padding-left: 35px;
  padding-right: 35px;
`;

const StyledEdiText = styled(EdiText)`
  button {
    border-radius: 5px;
    width: 60px;
    height: 40px;
    margin-top: -233px;
    margin-left: 400px;
    padding-top: 10px;
    z-index: 300;
    font-size: 20px;
  }
  button[editext="edit-button"] {
    border-radius: 50%;
    color: #000;
    background-color: transparent;
    border: transparent;
    font-size: large;
    
    &:before { 
      content: url("pencil-alt-solid.svg"); 
      font-size: 30px;
      padding-left: 20px;
    }
  }
  button[editext="save-button"] {
    width: 45px;
    height: 40px;
    margin-top: -270px;
    margin-left: 390px;
    background-color: transparent;
    border: transparent;

    &:hover {
      color: #fff;
      background-color: transparent;
      border: transparent;
      cursor: pointer;
    }
  }
  button[editext="cancel-button"] {

    width: 45px;
    height: 40px;
    margin-top: -270px;
    margin-left: 0px;
    background-color: transparent;
    border: transparent;

    &:hover {
      color: #fff;
      background-color: transparent;
      border: transparent;
      cursor: pointer;
    }
  }

  input, textarea {
    background: transparent;
    color: #fff;
    resize: none;
    scrollable: true;
    // font-weight: bold;
    // border-radius: 5px;
    // margin-top: 0px;
    // width: 300px;
    // height: 300px;
  }

  .my-custom-view-wrapper {
    display: flex;
    flex-direction: column;
  }
  
  .my-custom-view-wrapper div:last-child {
    /* Here we are styling the button container. */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: right;
    color: #191919;
  }
;`

export default News;