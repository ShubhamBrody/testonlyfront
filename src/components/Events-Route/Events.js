import styled from "styled-components";
import { Card, CardTitle, } from "react-bootstrap-card";

const Events = (props) => {
    return (
        <Container>     
            <img src="events-title.png" style={{marginTop: "120px"}}></img>
            <p style={{marginTop: "120px", marginBottom: "6px"}}>We have started with our own digital sessions every sunday for rural youth</p>
            <img src="online-sessions.png" style={{marginTop: "50px", marginBottom: "0px"}}></img>
            
            <SecondDiv>

            <h2>ONGOING EVENTS</h2>
            <p style={{color: "white", textAlign: "center", marginBottom: "100px"}}>In our digital sessions, we are holding ice breaking sessios for our newly joined youth along with the presentations given by the team members regarding personality development. We are recruiting and training volunteers as well.</p>

            <Heading>Session with Signal school, Thane</Heading><br/>
            <ContentWrapper>
            
                <Inner>
                    <img src="events1.jpg" alt="refresh for img" />
                </Inner>
                
                <div>
                    <Description>Signal school is an innovative concept initialized by Samarth Bharat Vyaspith along with Thane Municipal Corporation, on 14th June 2016. It aims at providing education to underprivileged children living on signals in Thane, Maharashtra. This would make these children capable to adjust themselves to the mainstream world. We, the GYC team, had our first session with them last Saturday wherein we spent good time with the students to get to know them and make them feel comfortable.</Description>
                </div>
            </ContentWrapper>

            <Heading>Session with Swadhey</Heading>
            <ContentWrapper>
                <Inner>
                    <img src="events2.jpg" alt="refresh for img"/>
                </Inner>
                <div>
                    
                    <Description>Swadhey is a collective organization which started in January of 2020. They work on fighting for the basic needs of the the people. They have taken many heart warming steps to help create a better society. Their main objectives are environmental conservation, providing education, water conservation and fort conservation. Our sessions team is currently working with them to conduct online sessions. These sessions are being held for developing reading and writing skills in English to students who are accustomed to Marathi.</Description>
                </div>
            </ContentWrapper>

            <Heading>Sessions with the Digital Omega Batch</Heading>
            <ContentWrapper>
                <Inner>
                    <img src="events3.jpg" alt="refresh for img"/>
                </Inner>
                <div>
                    <Description>Our campaign, Digital Omega aims at bringing education one step closer to the bright, rural minds of India. We visited Dnyandarpan English school along with the Rotary club of Akola and France Telecom, to personally deliver 50 devices to the teachers and students. Our visit also provided us the opportunity to interact with the students and get to know them. We have started our 6-month curriculum for the students. Our sessions team conducts sessions for them every Sunday!</Description>
                </div>
            </ContentWrapper>

            </SecondDiv> 
        </Container>
    );
};

const Inner = styled.div`
    margin-top: -55px;

    @media (max-width: 1400px) {
        margin-top: 30px;
    }
`;

const Description = styled.div`
    text-align: justify;
    color: white;
    width: 700px;
    margin-left: -200px;

    @media (max-width: 1400px) {
        width: 500px;
        margin-left: 0px;
    }
`;

const Heading = styled.div`
    text-align: center;
    color: #c5a240;
    font-size: 35px;
    // margin: 20px 50px 50px 50px;
    border-radius: 5px;
`;

const ContentWrapper = styled.div`
    font-size: 20px;
    text-align: justify;
    justify-content: space-around;
    display: flex;
    margin:50px;

    img {
        height: 250px;
        width: 250px;
        margin: 50px;
        border-radius: 250px;
    }
`;

const Container = styled(Card)`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border: 0;
    border-radius: 0px;

    p
    {
        text-align: center;
        // margin-left: 200px;
        // margin-right: 200px;
        // margin-top: 30px;

        margin: 30px auto;
    }

    h2
    {
        text-align: center;
        color: #c5a240;
    }

    background: url("background.png") center center / cover no-repeat fixed;
`;

const SecondDiv = styled.div`
    h2 {
        color: white;
        margin-top: 200px; 
        font-size: 40px;
    }
    p {
        text-align: justify;
        marginTop: 65px;
        color: white;
        width: 900px;
    }

    background-image: url(events-bottom-image.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media (max-width: 1000px) {
        h2 {
            margin-top: 150px; 
        }
        background-position-y: bottom;
    }
`;

export default Events;