import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  height: auto;
  background-color: black;
  padding: 1rem;
  border-radius: 10px;
  @media (max-width: 700px) {
    width: 80%;
  }
  
`;
export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
export const FirstHalf = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
  > img {
    height: 11rem;
    width: 11rem;
    border-radius: 50%;
    border: 2px solid #ff414d;
  }
  > div {
    color: white;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > h1 {
      font-size: 3.5ch;
      @media (max-width: 700px) {
        font-size: 3ch;
      }
    }
    > a {
      color: #ff414d;
      margin-top: 2rem;
      &:hover {
        color: white;
      }
    }
  }
`;
export const SecondHalf = styled.div`
  width: 95%;
  > h2 {
    color: white;
    margin-bottom: 1rem;
  }
`;
export const Repos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1rem;
  overflow-y: auto;
  height: 10rem;
  ::-webkit-scrollbar {
    width: 1.3rem;
  }
  ::-webkit-scrollbar-track {
    background-color: #fff;
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 10px;
    border: 4px solid #000;
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
   
  }
  > a {
    color: black;
  }
`;
export const RepoCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: auto;
  padding: 0.5rem 0 1rem 0.5rem;
  border: 2px solid #ff414d;
  > h1 {
    font-size: 1rem;
  }
`;
