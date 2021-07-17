import { Card, CardTitle, CardText } from "react-bootstrap-card";

var sectionStyle = {
    "background-color": "#3b3b3b",
    "opacity": 0.6,
    "width": '32rem',
    "height": '20rem',
    "border-radius": "6px",
    "position": "relative",
    "text-align": "center"
}

const Team = (props) => {
    return (
        <Card style={sectionStyle}>
            <CardTitle>Our Team</CardTitle>
            <CardText style={{ top: "30%", position: "relative", justifyContent: "center" }}>Please Select the Department</CardText>
        </Card>
    );
};

export default Team;