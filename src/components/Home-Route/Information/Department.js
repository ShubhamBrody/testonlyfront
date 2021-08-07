import { React, useState } from 'react';
import { Card, CardText } from "react-bootstrap-card";
import Dropdown from "react-bootstrap/Dropdown";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";

const itemStyle = {
    "backgroundColor": "#191919",
    "opacity": "1",
    "color": "white", 
    "text-align": "center",
    "border": "1px solid #ffffff",
    "borderRadius": "8px",
    "font-size":'13px'
}

const departmentContent = {
    "Human Resources": "We aim for free educational guidance, overall personality development and upliftment of the youth of rural India by providing career counselling and one to one mentoring. Our mission is to establish a platform for the youth to exchange their views and ideas.​ We aim for free educational guidance, overall personality development and upliftment of the youth of rural India by providing career counselling and one to one mentoring. Our mission is to establish a platform for the youth to exchange their views and ideas.​ We aim for free educational guidance, overall personality development and upliftment of the youth of rural India by providing career counselling and one to one mentoring. Our mission is to establish a platform for the youth to exchange their views and ideas.​ We aim for free educational guidance, overall personality development and upliftment of the youth of rural India by providing career counselling and one to one mentoring. Our mission is to establish a platform for the youth to exchange their views and ideas.​",
    "Design": "",
    "Social Media": "",
    "Public Relations": "",
    "Sessions Management": "",
    "Content Development": ""
}

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
        return (
            <CardText visible={false} style={{ paddingTop: '1.5rem', paddingLeft: "2rem", paddingRight: "2rem", position: "relative", textAlign: "center", height: '500px', overflowY: "auto", paddingBottom: '150px', marginTop: '20px' }}>
                {content}
            </CardText>
        )
    }

    return (
        <Grid>
            <br/>
            <XDropdown onMouseEnter={() => updateIsOpen(true)}
            onMouseLeave={() => updateIsOpen(false)} show={isOpen}>
                <Toggle variant="dark" style={{ color:"white", fontSize:"calc(1.275rem + .3vw)", backgroundColor:"#191919", opacity:"1" }}>
                    {title} &nbsp;<div style={{display:'inline-block', width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "8px solid #e0aa3e" }} > </div>
                </Toggle>

                <XDropdown.Menu style={{ backgroundColor:"#191919", fontSize:"500", color:"white", opacity:"1" }}>
                    <XDropdown.Item onClick={() => { setContent(departmentContent["Human Resources"]); updateIsOpen(false); setTitle("Human Resources") } } style={itemStyle}>Human Resources</XDropdown.Item>
                    <XDropdown.Item onClick={() => { setContent(departmentContent["Design"]); updateIsOpen(false); setTitle("Design") } } style={itemStyle}>Design</XDropdown.Item>
                    <XDropdown.Item onClick={() => { setContent(departmentContent["Social Media"]); updateIsOpen(false); setTitle("Social Media") } } style={itemStyle}>Social Media</XDropdown.Item>
                    <XDropdown.Item onClick={() => { setContent(departmentContent["Public Relations"]); updateIsOpen(false); setTitle("Public Relations") } } style={itemStyle}>Public Relations</XDropdown.Item>
                    <XDropdown.Item onClick={() => { setContent(departmentContent["Sessions Management"]); updateIsOpen(false); setTitle("Sessions Management") } } style={itemStyle}>Sessions Management</XDropdown.Item>
                    <XDropdown.Item onClick={() => { setContent(departmentContent["Content Development"]); updateIsOpen(false); setTitle("Content Development") } } style={itemStyle}>Content Development</XDropdown.Item>
                </XDropdown.Menu>
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
    :after {
        display: none;
    }
`;

const Grid = styled(Card)`
    background-color: #191919;
    opacity: 0.8;
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
