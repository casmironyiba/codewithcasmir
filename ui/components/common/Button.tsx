import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  label: string; // Text displayed on the button
  onClick?: () => void; // Event handler for clicks
  type?: 'button' | 'submit' | 'reset'; // Button type
  bgColor?: string; // Background color
  textColor?: string; // Text color
  disabled?: boolean; // Disable state
  className?: string; // Additional custom styles
}

const StyledButton = styled.button<{ bgColor: string; textColor: string; disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: 0.375rem;
  transition: all 0.2s;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  width: 100%;
  height: 100%;
  outline:none;
  boder:none;

  &:hover {
    filter: brightness(0.9);
  }
`;

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  bgColor = '#3b82f6',
  textColor = '#ffffff',
  disabled = false,
  className,
}) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      bgColor={bgColor}
      textColor={textColor}
      disabled={disabled}
      className={className}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
