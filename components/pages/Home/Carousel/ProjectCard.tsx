import { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { TextButton } from "../../../core/Button";

type Language = "javascript" | "rust";

const Container = styled.div<{ language: Language }>`
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border-radius: 6px;
    // border-top: 3px solid ${({ language }) => LANGUAGE_COLORS[language]};
    text-align: left;
    overflow: hidden;

    transition: all 0.1s ease-out;

    #dot {
        border-radius: 100%; 
        width: 6px; 
        height: 6px; 
        background-color: ${({ language}) => LANGUAGE_COLORS[language]};
    }

    #title {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
    }
`;

const LANGUAGE_COLORS: { [k:string]: string } = {
    javascript: "yellow",
    go: "#29BEB0",
    rust: "#FF7F50",
    'c++': "black",
    solidity: "#909090	",
};

type Project = {
    name: string, 
    description: string,
    language: Language,
    github: string,
    website?: string,
};

interface Props {
    project: Project
};

export const ProjectCard = ({ project: { name, description, language, github, website }}: Props) => {
    const [isHovered, setIsHovered] = useState(false);
    const [height, setHeight] = useState<undefined | number>();
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        setHeight(ref.current?.getBoundingClientRect().height);
    }, [isHovered]);

    return (
        <Container 
            language={language}
            onMouseOver={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)} 
            // style={{ height }}
        >
            <div ref={ref} style={{ padding: 14, height: "fit-content", display: "grid", rowGap: 8 }}>
                <div id={"title"}>
                    <div style={{ fontWeight: "bold" }}>{name}</div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div id={"dot"}/>
                        <div style={{ color: LANGUAGE_COLORS[language], marginLeft: 7 }}>
                            {language[0].toUpperCase() + language.slice(1)}
                        </div>
                    </div>
                </div>

                <div style={{ fontSize: 13 }}>{description}</div>

                {
                    // Can be change to use isHovered if UX is better
                    true &&
                        <div style={{ display: "flex", fontSize: 13, justifySelf: "right" }}>
                            <TextButton onClick={() => window.open(github)}>View Source</TextButton>

                            {
                                website &&
                                    <TextButton 
                                        onClick={() => window.open(website)} 
                                        style={{ marginLeft: 12 }}
                                    >
                                        Visit Website
                                    </TextButton>
                            }
                        </div>
                }
            </div>
        </Container>
    );
};