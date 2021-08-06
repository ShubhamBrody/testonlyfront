import Video from './Video';
import { Card, CardTitle, } from "react-bootstrap-card";

var sectionStyle = {
    // "background-color": '#191919',
    // "opacity": "0.8",
    "width": '512px',
    "height": '368px',
    "border-radius": "0px",
    "border": "0px",
    "position": "relative",
    "text-align": "center",
    // "paddingBottom": '56.25%',
    "color": 'white',
    "position": 'relative'
}

const Testimonial = (props) => {
    return (
        <Card style={sectionStyle}>
            <br/>
            <h4 style={{margin: '0px auto'}}>Testimonial</h4>
            <Video youtubeId="mmRim3ssqN4" />
        </Card>
    );
};

export default Testimonial;