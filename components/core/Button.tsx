import { useState } from "react";
import styled from "styled-components";

export const Button = styled.div`   
    width: fit-content;
    min-width: 160px;
    border: 1px solid ${({ theme, }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    border-radius: 3px;
    padding: 12px 12px;
    user-select: none;

    transition: all 0.07s ease-out;

    &:hover { 
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.primary};
        color: white;
    }

    &:active {
        transform: scale(0.96);
    }
`;

const TextButtonContainer = styled.div`
    cursor: pointer;
    transition: all 0.1s ease-out;
    user-select: none;
`;

const TextUnderline = styled.div`
    background-color: white;
    height: 2px;
    margin-top: 2px;
    transition: all 0.1s ease-out;
`;

export const TextButton: React.FC<React.HTMLAttributes<HTMLElement>> = ({ children, ...props }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div style={{ position: "relative", width: "fit-content", }} {...props}>
            <TextButtonContainer 
                onMouseOver={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)} 
            >
                {children}
            </TextButtonContainer>
            <TextUnderline style={{ width: isHovered ? "100%" : "0%" }}/>
        </div>
    );
}