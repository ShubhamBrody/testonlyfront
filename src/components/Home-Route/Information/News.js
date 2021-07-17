import { Card, CardTitle, CardSubtitle, CardText } from "react-bootstrap-card";

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

const News = (props) => {
    return (
        <Card style={sectionStyle}>
            <CardTitle>News</CardTitle>
            <CardSubtitle style={{ color: '#dbba14', fontSize: '15px', paddingTop: '1.5rem' }}>MAY 2021</CardSubtitle>
            <CardText style={{ paddingTop: '1.5rem', paddingLeft: "2rem", paddingRight: "2rem", justifyContent: "center" }}>Geolife Youth Club has come up with the 
            PROJECT RED DOT campaign to raise awareness about menstruation and sanitary menstruation practices. This campaign focuses 
            on period positivity and eco-friendly sustainable practices for the same.</CardText>
        </Card>
    );
};

export default News;