import { Card, CardText } from "react-bootstrap-card";
import Dropdown from "react-bootstrap/Dropdown";
import 'bootstrap/dist/css/bootstrap.min.css';

var sectionStyle = {
    "background-color": 'black',
    "opacity": 0.4,
    "width": '32rem',
    "height": '20rem',
    "border-radius": "6px",
    "position": "relative",
    "text-align": "center",
    "paddingTop": '1.5rem',
    "color": 'white'
}

const Department = (props) => {
    return (
        <Card style={sectionStyle}>
            {/* &#5121; */}
            <Dropdown>
                <Dropdown.Toggle variant="Secondary" id="dropdown-basic" style={{ color:"white", backgroundColor:"black", fontSize:"calc(1.275rem + .3vw)" }}>
                    Department
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" font-weight="500">Sessions Department</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Design Department</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">HR Department</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <CardText style={{ top: "30%", position: "relative", justifyContent: "center" }}>Please Select the Department</CardText>
        </Card>
    );
};

export default Department;