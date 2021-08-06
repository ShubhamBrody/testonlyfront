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
  grid-column-gap: 40px;
  grid-row-gap: 100px;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media (max-width: 1400px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  margin-top: 180px;
  margin-bottom: 12px; 

  &:after {
    background: url("background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Cards;