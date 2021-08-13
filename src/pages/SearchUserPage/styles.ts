import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  > header {
    width: 70%;
    display: flex;
    align-items: center;
    position: relative;
    @media (max-width: 700px) {
      width: 80%;
    }
    > a {
      color: white;
      position: absolute;
      left: -10rem;
      top: 1rem;
      font-size: 1rem;
      font-weight: bold;
      font-style: italic;
      &:hover {
        color: black;
      }
      @media (max-width: 800px) {
        display: none;
      }
    }
  }
`;

export const SearchUserForm = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 1rem;
  padding: 2rem;
  background-color: #000;
  border-radius: 10px;

  > h1 {
    color: white;
    @media (max-width: 420px) {
      font-size: 2.5ch;
    }
  }
`;

export const SearchField = styled.div`
  width: 80%;
  height: 3rem;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  border: 2px solid #ff414d;
  @media (max-width: 420px) {
    width: 100%;
    height: 2.3rem;
  }
  > input {
    width: 90%;
    height: 2rem;
    padding-left: 2rem;
    position: relative;
    margin-left: 1rem;
    font-size: 15px;
    @media (max-width: 420px) {
      font-size: 13px;
      height: 1.5rem;
      margin-left: 0.5rem;
    }
  }
  > svg {
    position: absolute;
    left: 3rem;
    z-index: 1;
    width: 1.5rem;
    height: 1.5rem;
    @media (max-width: 420px) {
      width: 1rem;
      height: 1rem;
    }
  }
`;
