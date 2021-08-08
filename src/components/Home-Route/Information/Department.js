import { React, useState } from 'react';
import { Card, CardText } from "react-bootstrap-card";
import Dropdown from "react-bootstrap/Dropdown";
import styled from "styled-components";
import departmentContent from './DepartmentTextData';
import 'bootstrap/dist/css/bootstrap.min.css';

const itemStyle = {
    "backgroundColor": "rgba(25,25,25,1)",
    "color": "white", 
    "text-align": "center",
    "border": "0.5px solid #ffffff",
    "borderRadius": "8px",
    "font-size":'18px',
    "justify-content": "justify"
}

// const departmentContent = {
//     "Human Resources": "We aim for free educational guidance, overall personality development and upliftment of the youth of rural India by providing career counselling and one to one mentoring. Our mission is to establish a platform for the youth to exchange their views and ideas.​ We aim for free educational guidance, overall personality development and upliftment of the youth of rural India by providing career counselling and one to one mentoring. Our mission is to establish a platform for the youth to exchange their views and ideas.​ We aim for free educational guidance, overall personality development and upliftment of the youth of rural India by providing career counselling and one to one mentoring. Our mission is to establish a platform for the youth to exchange their views and ideas.​ We aim for free educational guidance, overall personality development and upliftment of the youth of rural India by providing career counselling and one to one mentoring. Our mission is to establish a platform for the youth to exchange their views and ideas.​",
//     "Design": "",
//     "Social Media": "",
//     "Public Relations": "",
//     "Sessions Management": "",
//     "Content Development": "",
//     "Marketing": ""
// }

function Department(props) {
    const [title, setTitle] = useState("Department");
    const [isOpen, updateIsOpen] = useState(false);
    const [content, setContent] = useState("Please Select the Department")

    const displayContent = () => {
        if(content === "Please Select the Department") {
            return (
                <CardText visible={false} style={{ color:"gray", paddingTop: '5rem', textAlign: "center", height: '200px' }}>
                    {content}
                </CardText>
            )
        }

        const listItems = content.map((data) => {
            return <li>{data}</li> //style={{ color: '#fff }}
        })

        return (
            <CardText visible={false} style={{ paddingTop: '1.5rem', paddingLeft: "2rem", paddingRight: "2rem", position: "relative", textAlign: "center", lineHeight: '32px', height: '500px', overflowY: "auto", paddingBottom: '0px', marginBottom: '0px', marginTop: '20px' }}>
                <ul style={{ listStyleType: "circle", listStylePosition: "inside" }}> {listItems} </ul>
            </CardText>
        )
    }

    return (
        <Grid>
            <br/>
            <XDropdown onMouseEnter={() => updateIsOpen(true)}
            onMouseLeave={() => updateIsOpen(false)} show={isOpen}>
                <Toggle variant="dark" style={{ color:"white", fontSize:"calc(1.275rem + .3vw)", backgroundColor:"#191919", opacity:"1" }}>
                    {title} &nbsp; <div style={{display:'inline-block', width: 0, height: 0, borderLeft: "10px solid transparent", borderRight: "10px solid transparent", borderTop: "15px solid #e0aa3e" }} > </div>
                </Toggle>

                <Dropdown.Menu style={{ backgroundColor:"#191919" , color:"white", opacity:"1", border: "0px", borderRadius: "6px", width: "320px", marginBottom: "0px"}}>
                    <Dropdown.Item onClick={() => { setContent(departmentContent["Public Relations"]); updateIsOpen(false); setTitle("Public Relations") } } style={itemStyle}>Public Relations</Dropdown.Item>
                    <Dropdown.Item onClick={() => { setContent(departmentContent["Marketing"]); updateIsOpen(false); setTitle("Marketing") } } style={itemStyle}>Marketing</Dropdown.Item>
                    <Dropdown.Item onClick={() => { setContent(departmentContent["Sessions Management"]); updateIsOpen(false); setTitle("Sessions Management") } } style={itemStyle}>Sessions Management</Dropdown.Item>
                    <Dropdown.Item onClick={() => { setContent(departmentContent["Human Resources"]); updateIsOpen(false); setTitle("Human Resources") } } style={itemStyle}>Human Resources</Dropdown.Item>
                    <Dropdown.Item onClick={() => { setContent(departmentContent["Social Media"]); updateIsOpen(false); setTitle("Social Media") } } style={itemStyle}>Social Media</Dropdown.Item>
                    <Dropdown.Item onClick={() => { setContent(departmentContent["Content Development"]); updateIsOpen(false); setTitle("Content Development") } } style={itemStyle}>Content Development</Dropdown.Item>
                    <Dropdown.Item onClick={() => { setContent(departmentContent["Design"]); updateIsOpen(false); setTitle("Design") } } style={itemStyle}>Design</Dropdown.Item>
                </Dropdown.Menu>
            </XDropdown>
            { displayContent() }
            <br/>
        </Grid>
    );
};

const XDropdown = styled(Dropdown)`
    margin: 0px auto;
`;

const Toggle = styled(XDropdown.Toggle)`
    width: 320px;
    :after {
        display: none;
    }
`;

const Grid = styled(Card)`
    background-color: rgba(25,25,25,0.8);
    width: 40rem;
    height: 22.5rem;
    border-radius: 6px;
    position: relative;
    text-align: center;
    color: white;
    overflow: hidden;
    @media (max-width: 1400px) {
        width: 56rem;
        height: 31.5rem;
    }
`;

export default Department;