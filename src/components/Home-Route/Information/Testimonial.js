import Video from '../Video';

const Testimonial = (props) => {
    return (
        <div>
            <h4 style={{ height: '0.5rem', paddingTop: '5%', color: 'white', paddingLeft: '35%' }}>Testimonials</h4>
            <div className='video' style={{ position: 'relative', paddingBottom: '56.25%', paddingTop: "2rem", paddingLeft: "25px", width: "500px", height: "650px" }}>
                <Video youtubeId="mmRim3ssqN4" />
            </div>
        </div>
    );
};

export default Testimonial;