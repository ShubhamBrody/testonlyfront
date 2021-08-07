import styled from "styled-components";
import Video from '../Video';

const Testimonial = (props) => {
    return (
        <div >
            <h4 style={{ height: '0.5rem', paddingTop: '5%', color: '#fff', textAlign: 'center' }}>Testimonials</h4>
            <Wrap>
                <Video youtubeId="mmRim3ssqN4" />
            </Wrap>
        </div>
    );
};

const Wrap = styled.div`
    position: relative; 
    padding-top: 2rem; 
    padding-left: 0; 
    padding-right: 0;
    width: 500px;
    height: 400px;

  @media (max-width: 1000px) {
    margin: 0px auto;
    width: 700px;
    height: 500px;
  }
`;

export default Testimonial;