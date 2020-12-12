import React from "react";
import Container from "../components/Container";
import Carousel from "../components/Carousel";
import Wrapper from "../components/Wrapper"

function Home () {

return (
            <Container style={{ minHeight: "100vh" }}>
                <Wrapper>
                    <Carousel/>
                </Wrapper>
            </Container>
    );

};

export default Home;