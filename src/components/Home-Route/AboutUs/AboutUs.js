import styled from 'styled-components';
import CardTabs from './CardTabs';
import Video from '../Video';

const AboutUs = (props) => {   
    return (
      <div>
        <img src="/aboutus.png" alt="" style={{ width:"100%", height:"auto", float:"right", paddingRight:"30%", position:"relative", zIndex:0 }} />
        <Container>
          <CardTabs />
          <Video youtubeId="mmRim3ssqN4" />    
        </Container>
      </div>
    );
};

const Container = styled.div`
  font-family: Corbel, Verdana, "Bitstream Vera Sans", sans-serif;
  padding-top: 15vh;
  padding-left: 5%;
  padding-bottom: 15vh;
  justify-content: center;
  position: absolute;
  overflow: hidden;
  display: grid;  
  gap: 20px;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 768px) {
    padding-left: 6rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export default AboutUs;