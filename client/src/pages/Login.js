import React from "react";
import Container from "../components/Container";
import LoginForm from "../components/LoginForm"
import Wrapper from "../components/Wrapper"

function Home () {

return (
            <Container style={{ minHeight: "100vh" }}>
                <Wrapper>
                  <LoginForm/>
                </Wrapper>
            </Container>
    );

};

export default Home;