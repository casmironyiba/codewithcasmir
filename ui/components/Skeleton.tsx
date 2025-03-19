
import styled from "styled-components";

const Skeleton = styled.div`
  animation: pulse 1.5s infinite ease-in-out;
  border-radius: 0.375rem;
  background-color: rgba(0, 0, 0, 0.1); /* Equivalent to bg-primary/10 */
  
  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

export { Skeleton };
