import { React } from 'react'
import { Card } from "react-bootstrap-card";
import { Tabs, Tab } from 'react-bootstrap-tabs'
import 'bootstrap/dist/css/bootstrap.min.css';

const sectionStyle = {
    "background-color": "transparent",
    "opacity": 1,
    "width": '35rem',
    "height": '24rem',
    "border-radius": "6px",
    "border-color": "transparent",
    "position": "relative",
    "text-align": "center",
    "paddingTop": '1.5rem',
    "color": '#fff'
}

const details = {
    "aboutUs": "GYC is organised into seven structured departments namely- Public relations, HR external affairs, HR internal affairs, Sessions management, Social media, Content development, Design. We work inter-departmentally as well as intra-departmentally in a well-coordinated fashion. Volunteers are recruited based on their skill post interview. Their work is assessed every week. Weekly meetings are conducted to discuss the progress as well as new assignments. We conduct competitions and deliver presentations to inculcate import skills for their overall development.​",
    "mission": "We aim for free educational guidance, overall personality development and upliftment of the youth of rural India by providing career counselling and one to one mentoring. Our mission is to establish a platform for the youth to exchange their views and ideas.​",
    "vision": "We intend to motivate the youth of rural India with a vision to bring rural and urban India at par by guiding them for the fulfilment of this purpose. Our vision is to make holistic education accessible and affordable to one and all which will drastically help in the development of the youth, ultimately in the development of our country",
    "history": "Geolife Youth Club is a platform established for the career counselling of young minds of rural India in the year 2017. We started by conversing with the rural youth to understand their academic issues. We connect these kids to our team of mentors who guide the kids by clearing the doubts and sharing their own experience"
}

function CardTabs(props) {
    return (
        <Card style={sectionStyle}>
            <Tabs
            defaultActiveKey="aboutUs"
            transition
            className="mb-3"
            >
            <Tab eventKey="aboutUs" title="About us">
                <div style={{ paddingTop: "80px" }}>{ details.aboutUs }</div>
            </Tab>
            <Tab eventKey="mission" title="Mission">
                <div style={{ paddingTop: "80px" }}>{ details.mission }</div>
            </Tab>
            <Tab eventKey="vision" title="vision">
            <div style={{ paddingTop: "80px" }}>{ details.vision }</div>
            </Tab>
            <Tab eventKey="history" title="History">
                <div style={{ paddingTop: "80px" }}>{ details.history }</div>
            </Tab>
            </Tabs>
        </Card>
    )
}

export default CardTabs;