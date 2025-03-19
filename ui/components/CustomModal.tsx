
import React from "react";
import styled from "styled-components";

interface CustomFixedModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Content = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 100%;
  z-index: 1001;
`;

const Inner = styled.div`
  position: relative;
`;

const CustomModal: React.FC<CustomFixedModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <Overlay onClick={onClose} />
      <Content>
        <Inner>{children}</Inner>
      </Content>
    </>
  );
};

export default CustomModal;
