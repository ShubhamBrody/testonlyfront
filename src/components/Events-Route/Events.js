import styled from "styled-components";
import { Card, CardTitle, } from "react-bootstrap-card";

const Events = (props) => {
    return (
        <Container>     
            <img src="events-title.png" style={{marginTop: "120px"}}></img>
            <p style={{marginTop: "120px", marginBottom: "6px"}}>We have started with our own digital sessions every sunday for rural youth</p>
            <img src="online-sessions.png" style={{marginTop: "50px", marginBottom: "50px"}}></img>
            
            <SecondDiv>
                <h2 style={{color: "white", marginTop: "50px"}}>ONGOING EVENTS</h2>
                <p style={{color: "white"}}>We have started with our own digital sessions every sunday for rural youth. We have started with our own digital sessions every sunday for rural youth. We have started with our own digital sessions every sunday for rural youth.</p>

                <h2 style={{marginTop: "70px"}}>Session with Signal school, Thane</h2>
                <Pfake><img src="events1.jpg" alt="Session with Signal school, Thane" style={{width: "250px", height: "250px", marginRight: "100px", borderRadius: "300px", float: "left"}}/><br/><br/>Signal school is an innovative concept initialized by Samarth Bharat Vyaspith along with Thane Municipal Corporation, on 14th June 2016. It aims at providing education to underprivileged children living on signals in Thane, Maharashtra. This would make these children capable to adjust themselves to the mainstream world. We, the GYC team, had our first session with them last Saturday wherein we spent good time with the students to get to know them and make them feel comfortable.</Pfake>
                <br/>
                <h2 style={{marginTop: "70px"}}>Session with Swadhey</h2>
                <Pfake><img src="events2.jpg" alt="Session with Swadhey" style={{width: "250px", height: "250px", marginRight: "100px", borderRadius: "300px", float: "left"}}/><br/><br/>Swadhey is a collective organization which started in January of 2020. They work on fighting for the basic needs of the the people. They have taken many heart warming steps to help create a better society. Their main objectives are environmental conservation, providing education, water conservation and fort conservation. Our sessions team is currently working with them to conduct online sessions. These sessions are being held for developing reading and writing skills in English to students who are accustomed to Marathi.</Pfake>
                <br/>  
                <h2 style={{marginTop: "70px"}}>Sessions with the Digital Omega Batch</h2>
                <Pfake><img src="events3.jpg" alt="Sessions with the Digital Omega Batch" style={{width: "250px", height: "250px", marginRight: "100px", borderRadius: "300px", float: "left"}}/><br/><br/>Our campaign, Digital Omega aims at bringing education one step closer to the bright, rural minds of India. We visited Dnyandarpan English school along with the Rotary club of Akola and France Telecom, to personally deliver 50 devices to the teachers and students. Our visit also provided us the opportunity to interact with the students and get to know them. We have started our 6-month curriculum for the students. Our sessions team conducts sessions for them every Sunday!</Pfake>
                <br /><br />
            </SecondDiv> 
        </Container>
    );
};

const Pfake = styled.p`
    textAlign: justify;
    marginTop: 65px;
    color: white;
    width: 900px;
`;

const Container = styled(Card)`
    width: 100%;
    height: 100%;
    overflow: hidden;

    p
    {
        text-align: center;
        margin-left: 200px;
        margin-right: 200px;
        margin-top: 30px;
    }

    h2
    {
        text-align: center;
        color: #c5a240;
    }

    background: url("background.png") center center / cover no-repeat fixed;
`;

const SecondDiv = styled.div`
    background: url("events-bottom-image.png") center center / cover no-repeat fixed;
`;

export default Events;