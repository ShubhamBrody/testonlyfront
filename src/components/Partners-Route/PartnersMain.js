import Department from './Department';
import Team from './Team';
import News from './News';
import Testimonial from "./Testimonial";
import styled from "styled-components";

const Cards = (props) => {
  return (
    <Container>
      <div><Department/></div>
      <div><Team/></div>
      <div><News/></div>
      <div><Testimonial/></div>
    </Container>
  );
};

const Container = styled.section`
  display: grid;
  gap: 40px;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media (max-width: 1100px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  margin-bottom: 12px; 
`;

export default Cards;