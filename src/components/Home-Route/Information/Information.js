import styled from 'styled-components';
import Department from './Department';
import Team from './Team';
import News from './News';
import Testimonial from "./Testimonial";
// import NewsProvider from "../NewsProvider";

const Information = (props) => {   
  return (
    // <NewsProvider>
    <Container>
        <Department />
        <Team />
        <News />
        <Testimonial /> 
    </Container>
    // </NewsProvider>
  );
};

const Container = styled.div`
  font-family: Corbel, Verdana, "Bitstream Vera Sans", sans-serif;
  padding-top: 35vh;
  padding-left: 5%;
  padding-bottom: 15vh;
  justify-content: center;
  overflow:hidden;
  display: grid;
  grid-gap: 60px;
  gap: 60px;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 768px) {
    padding-left: 6rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export default Information;