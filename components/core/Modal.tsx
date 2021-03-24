import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalContainer = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    height: 100%;
    background-color: rgba(0,0,0, 0.7);

    #modal-content-container {
        background-color: ${({ theme }) => theme.colors.background};
        border-radius: 3px;
        padding: 24px;
        min-width: 500px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export interface ModalProps {
    isOpen: boolean,
    onClose: () => void,
    children?: React.ReactNode
};

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    return isOpen ?
        ReactDOM.createPortal(
            <ModalContainer onClick={onClose}>
                <div id={"modal-content-container"} onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </ModalContainer>,
            document.getElementById("root") as HTMLElement
        )
    : 
        <></>;
};