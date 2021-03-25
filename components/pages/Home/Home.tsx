import { useEffect, useLayoutEffect, useState } from "react";
import Select from "react-select";
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

const LanguageFilterContainer = styled.div`
    margin-top: 24px;
    height: fit-content;
    width: 150px;
    position: absolute;
    left: -180px;
    top: 0px;
`;

export const Home = () => {
    const [selectedLanguage, setSelectedLanguage] = useState({ label: "All", value: "all" });
    const [showLanguageFilter, setShowLanguageFilter] = useState(true);

    useLayoutEffect(() => {
        const el = document.getElementById("summary-container");
        el?.addEventListener('scroll', () => {
            setShowLanguageFilter(el.scrollTop < 100);
        });
    }, []);

    return (
        <Container>
            <Summary/>

            <div style={{ position: "relative" }}>
                {
                    showLanguageFilter &&
                        <LanguageFilterContainer>
                            <div style={{ marginBottom: 12 }}>Language to show</div>
                            <Select
                                onChange={e => setSelectedLanguage(e as { label: string, value: string})}
                                value={selectedLanguage}
                                options={[
                                    { value: "all", label: "All" },
                                    { value: "javascript", label: "Javascript" },
                                    { value: "go", label: "Go" },
                                    { value: "rust", label: "Rust" },
                                    { value: "c++", label: "C++" },
                                    { value: "solidity", label: "Solidity" },
                                ]}
                            />
                        </LanguageFilterContainer>
                }

                <Carousel selectedLanguage={selectedLanguage.value}/>
            </div>
        </Container>
    );
};