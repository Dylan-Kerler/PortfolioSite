import { Main } from "next/document";
import { useContext, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { Theme } from "../../../../context/Theme";
import { TextButton } from "../../../core/Button";
import { Modal, ModalProps } from "../../../core/Modal";
import { MainTitle, MinorTitle } from "../../../core/Typography";

const Container = styled.div`
    display: grid;
    row-gap: 24px;
    grid-template-columns: 1fr 1fr;
    column-gap: 24px;
    width: 500px;

    > div {
        display: grid;
        row-gap: 3px;
        height: fit-content;
    }
`;

export const AboutModal = (props: ModalProps) => {
    const theme = useContext(ThemeContext);

    const { textPrimary } = theme.colors;

    return (
        <Modal {...props}>
            <Container>
                <MainTitle style={{ gridColumn: "1/3"}}>About</MainTitle>

                <div style={{ gridColumn: "1/3"}}>
                    I've worked with a huge suite of technologies in various tech stacks. 
                    I enjoy learning by creating projects from scratch, using these different tech stacks, and trying new things out.
                </div>

                <div>
                    <MinorTitle style={{ marginBottom: 8 }}>Languages</MinorTitle>
                    <div>Javascript/Typescript</div>
                    <div>Rust</div>
                    <div>Solidity</div>
                    <div>C/C++</div>
                    <div>Python</div>
                </div>
                
                <div>
                    <MinorTitle style={{ marginBottom: 8 }}>Socials</MinorTitle>
                    <TextButton color={textPrimary} onClick={() => window.open("https://github.com/Dylan-Kerler")}>
                        Github
                    </TextButton>
                    <TextButton color={textPrimary} onClick={() => window.open("https://medium.com/@Dylan.Kerler")}>
                        Tech Blog
                    </TextButton>
                    <TextButton color={textPrimary}  onClick={() => window.open("https://uk.linkedin.com/in/dylan-kerler")}>
                        LinkedIn
                    </TextButton>
                </div>


                <div style={{ gridColumn: "1/3"}}>
                    <MinorTitle style={{ marginBottom: 8 }}>Tech stacks and frameworks</MinorTitle>
                    <div>ReactJS, NodeJS, MongoDB, Express, JQuery, Hardhat, EthersJS</div>
                    <div>Docker, DigitalOcean, Linux, AWS, Git</div>
                </div>
            </Container>
        </Modal>
    );
}