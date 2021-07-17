import styled from "styled-components";
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
                {/* <p><b>News</b></p>
                <h5><b>MAY 2021</b></h5>
                <p>Geolife Youth Club has come up with the PROJECT RED DOT campaign to raise awareness about menstruation and sanitary menstruation practices. This campaign focuses on period positivity and eco-friendly sustainable practices for the same.</p>
            */}
        <Testimonial /> 
    </Container>
  );
};

const Container = styled.div`
  padding-top: 2.5vh;
  padding-left: 5.5vw;
  justify-content: center;
  display: grid;
  grid-gap: 50px;
  gap: 50px;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

// const Dept = styled.div`
//   padding-top: 4vh;
//   border-radius: 7px;
//   cursor: pointer;
//   overflow: hidden;
//   position: relative;
//   height: 40vh;
//   width: 40vw;
//   background-color: #3b3b3b;
//   opacity: 0.6;

//   p{
//     text-align: center;
//     border-radius: 4px;
//     margin: 0 auto;
//     color: white;
//     background-color: rgba(0,0,0,1); 
//     width: 23%;
//   }

//   h6 {
//       margin: 120px auto;
//       text-align: center;
//       color: white;
//   }
// `;

// const Team = styled.div`
//   padding-top: 4vh;
//   border-radius: 7px;
//   cursor: pointer;
//   overflow: hidden;
//   position: relative;
//   height: 40vh;
//   width: 40vw;
//   background-color: #3b3b3b;
//   opacity: 0.6;
  
//   p{
//     margin: 0 auto;
//     text-align: center;
//     color: white;
//   }

//   img
//   {
//     // border-radius: 200px;
//       width: 150px;
//       backgroud-color: black;
//   }
// `;

// const News = styled.div`
//   padding-top: 4vh;
//   border-radius: 7px;
//   cursor: pointer;
//   overflow: hidden;
//   position: relative;
//   height: 40vh;
//   width: 40vw;
//   background-color: #3b3b3b;
//   opacity: 0.6;

//   p{
//     width: 75%;
//     margin: 0 auto;
//     text-align: center;
//     color: white;
//   }

//   h5{
    
//     margin: 30 auto;
//     padding-top: 30px;
//     text-align: center;
//     color: rgb(194,156,73);
//   }
// `;

// const Testimonial = styled.div`
//   border-radius: 7px;
//   padding-left: 0px;
//   cursor: pointer;
//   overflow: hidden;
//   position: relative;
//   height: 40vh;
//   width: 40vw;
//   background-color: rgb(255 255 255);

//   margin: 0 auto;

//   p{
//     text-align: center;
//   }
// `;

export default Information;