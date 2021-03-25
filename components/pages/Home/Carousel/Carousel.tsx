import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import PROJECTS from "../../../../projects.json";
import { ProjectCard, Project } from "./ProjectCard";

const Container = styled.div`
    width: 380px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.tertiary};
    padding: 12px;
    overflow: hidden;
`;

export const Carousel = ({ selectedLanguage }: { selectedLanguage: string }) => {
    const [offset, setOffset] = useState(0);
    const [updater, setUpdater] = useState<any>(null);
    const containerRefs = useRef<{ [k:number]: HTMLElement | null}>({});
    const [containerHeight, setContainerHeight] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useLayoutEffect(() => {
        const containerHeight = containerRefs.current[1]?.getBoundingClientRect().height || 0;
        setContainerHeight(containerHeight)
    }, [])

    const startAnimation = () => {
        clearInterval(updater);

        const n_updater = setInterval(() => {
            setOffset(old => old + 1);
        }, 1000 / 60);

        setUpdater(n_updater);
        return n_updater;
    };


    useEffect(() => {
        if (isHovered) clearInterval(updater);
        else startAnimation();
    }, [isHovered]);

    console.log(selectedLanguage !== "all");

    return (
        <Container 
            id={"carousel"}
            onMouseOver={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)} 
        >
            {
                selectedLanguage !== "all" ?
                    <div 
                        style={{ 
                            display: "grid", 
                            rowGap: 24, 
                            width: "100%", 
                        }}
                    >
                        {
                            PROJECTS
                                .filter(({ language }) => language === selectedLanguage)
                                .map((project) => 
                                    <div>
                                        <ProjectCard project={project as Project}/>
                                    </div>
                                )
                        }
                    </div>
                : 
                    [0, 1].map(index => 
                        <div 
                            ref={el => containerRefs.current[index] = el}
                            style={{ 
                                display: "grid", 
                                rowGap: 24, 
                                position: "absolute", 
                                top: ((offset + containerHeight * index) % containerHeight) - (containerHeight - 1) * index,
                                padding: 12, 
                                width: "100%", 
                                left: 0 
                            }}
                        >
                            {
                                PROJECTS.map((project) => 
                                    <div>
                                        <ProjectCard project={project as Project}/>
                                    </div>
                                )
                            }
                        </div>
                    )
            }
        </Container>
    );
};