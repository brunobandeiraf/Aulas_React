import styled from "styled-components";

export const Titulo = styled.h1`
  color: ${({ theme }) => theme.COLORS.RED};
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > main {
    display: flex;
    gap: 16px;    
  }
`;