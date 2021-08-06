import { React, useState } from 'react';
import { Card, CardText } from "react-bootstrap-card";
import Dropdown from "react-bootstrap/Dropdown";
import 'bootstrap/dist/css/bootstrap.min.css';

const sectionStyle = {
    "background-color": '#191919',
    // "background": 'url("aboutus.png")',
    "background-size": 'cover',
    "opacity": "0.8",
    "width": '32rem',
    "height": '23rem',
    "border-radius": "6px",
    "position": "relative",
    "text-align": "center",
    // "paddingTop": '56.25%',
    "color": 'white',
    // "height": '200px', 
    // "overflow": "scroll"
}

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
    const [isOpen, updateIsOpen] = useState(false);
    const [content, setContent] = useState("Please Select the Department")

    const displayContent = () => {
        if(content === "Please Select the Department") {
            return (
                <CardText visible={false} style={{ color:"gray", paddingTop: '5rem', justifyContent: "center", height: '200px', overflow: "scroll" }}>
                    {content}
                </CardText>
            )
        }
        return (
            <CardText visible={false} style={{ paddingTop: '1.5rem', paddingLeft: "2rem", paddingRight: "2rem", position: "relative", justifyContent: "center", height: '500px', overflow: "scroll", paddingBottom: '150px', marginTop: '20px' }}>
                {content}
            </CardText>
        )
    }

    return (
        <Card style={sectionStyle}>
            <br/>
            <Dropdown onMouseEnter={() => updateIsOpen(true)}
            onMouseLeave={() => updateIsOpen(false)} show={isOpen}>
                <Dropdown.Toggle caret variant="dark" id="dropdown-basic" style={{ color:"white", fontSize:"calc(1.275rem + .3vw)", backgroundColor:"#191919", opacity:"1" }}>
                    Department
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ backgroundColor:"#191919", fontSize:"500", color:"white", opacity:"1" }}>
                    <Dropdown.Item onClick={() => { setContent(departmentContent["Human Resources"]); updateIsOpen(false) } } style={itemStyle}>Human Resources</Dropdown.Item>
                    <Dropdown.Item onClick={() => { setContent(departmentContent["Design"]); updateIsOpen(false) } } style={itemStyle}>Design</Dropdown.Item>
                    <Dropdown.Item onClick={() => { setContent(departmentContent["Social Media"]); updateIsOpen(false) } } style={itemStyle}>Social Media</Dropdown.Item>
                    <Dropdown.Item onClick={() => { setContent(departmentContent["Public Relations"]); updateIsOpen(false) } } style={itemStyle}>Public Relations</Dropdown.Item>
                    <Dropdown.Item onClick={() => { setContent(departmentContent["Sessions Management"]); updateIsOpen(false) } } style={itemStyle}>Sessions Management</Dropdown.Item>
                    <Dropdown.Item onClick={() => { setContent(departmentContent["Content Development"]); updateIsOpen(false) } } style={itemStyle}>Content Development</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <br/>
            { displayContent() }
        </Card>
    );
};

export default Department;
