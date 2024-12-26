import styled from 'styled-components'

const Button = styled.button`
  width: 100%;
  height: 100%;
  background:inherit;
  outline:none;
  border:none;
  color:inherit;
`;

export const AddMoreButton = styled(Button)`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;


`

export default Button;
