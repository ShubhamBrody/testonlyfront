import styled from 'styled-components';
import CardTabs from './CardTabs';
import Video from '../Video';

const AboutUs = (props) => {   
    return (
      <div>
        <img src="/aboutus.png" alt="" style={{ width:"100%", height:"auto", float:"right", paddingRight:"30%", position:"relative", zIndex:0 }} />
        <Container>
          <CardTabs />
          <div style={{ position: "relative", paddingTop: "20px", paddingLeft: "50px", paddingRight: "15px", width:"600px", height:"450px" }}>
            <Video youtubeId="nJJp7R77NYo" /> 
          </div>   
        </Container>
      </div>
    );
};

const Container = styled.div`
  font-family: Corbel, Verdana, "Bitstream Vera Sans", sans-serif;
  padding-top: 15vh;
  padding-left: 25px;
  padding-bottom: 15vh;
  padding-right: 0px;
  justify-content: center;
  position: absolute;
  display: grid;  
  gap: 20px;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export default AboutUs;