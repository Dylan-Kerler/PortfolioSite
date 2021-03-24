import styled from "styled-components";
import { Carousel } from "./Carousel/Carousel";
import { Summary } from "./Summary/Summary"

const Container = styled.div`
    display: grid;
    padding: 120px;

    #summary {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    #carousel {
        position: absolute;
        top: 0;
        right: 120px;
    }
`;

export const Home = () => {
    return (
        <Container>
            <Summary/>
            <Carousel/>
        </Container>
    );
};