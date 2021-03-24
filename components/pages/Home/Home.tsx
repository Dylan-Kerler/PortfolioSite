import styled from "styled-components";
import { Carousel } from "./Carousel/Carousel";
import { Summary } from "./Summary/Summary"

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;

    *::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }

    #carousel {
        margin-right: 120px;
        position: relative;
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