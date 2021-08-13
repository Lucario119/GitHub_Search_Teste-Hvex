import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProjectPresenting = styled.div`
  background-color: black;
  width: 60%;

  padding: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  border-radius: 10px;
  @media (max-width: 700px) {
    width: 80%;
  }
  > div {
    > h1 {
      font-size: 4ch;
      margin-bottom: 1rem;
      @media (max-width: 420px) {
        font-size: 3ch;
      }
    }
  }
  > a {
    color: #ff414d;
    width: 16rem;
    &:hover {
      color: white;
    }
  }
`;
