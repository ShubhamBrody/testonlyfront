import Video from './Video';
import { Card, CardTitle} from "react-bootstrap-card";

var sectionStyle = {
    "background-color": "rgb(255 255 255)",
    "opacity": 0.6,
    "width": '32rem',
    "height": '20rem',
    "border-radius": "6px",
    "text-align": "center"
}

const Testimonial = (props) => {
    return (
        <Card style={sectionStyle}>
            <CardTitle style={{ height: '0rem' }}>Testimonials</CardTitle>
            <Video youtubeId="mmRim3ssqN4" />
        </Card>
    );
};

export default Testimonial;