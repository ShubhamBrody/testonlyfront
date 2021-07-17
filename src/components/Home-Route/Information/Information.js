import styled from 'styled-components';
import Department from './Department';
import Team from './Team';
import News from './News';
import Testimonial from "./Testimonial";

const Information = (props) => {   
  return (
    <Container>
        <Department />
        <Team />
        <News />
        <Testimonial /> 
    </Container>
  );
};

const Container = styled.div`
  padding-top: 15vh;
  padding-left: 5%;
  padding-bottom: 15vh;
  justify-content: center;
  display: grid;
  grid-gap: 50px;
  gap: 50px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  background-color: #bfbfbf;
  @media (max-width: 768px) {
    padding-left: 6rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export default Information;