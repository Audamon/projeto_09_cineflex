import styled from 'styled-components';

const SeatsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: space-evenly;
`;
const H1 = styled.h1`
  margin-top: 7.5vh;
  display: inline-block;
  width: 100%;
  height: 8vh;
  text-align: center;
  line-height: 60px;
  font-size: 24px;
`;
const Seat = styled.button`
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid #808f9d;
  border-radius: 12px;
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px 4px 8px 4px;
`;
const SeatSub = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
`;
const Sub = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 11px;
`;
const NameInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15% 5% 10% 5%;
  font-size: 18px;

  input {
    font-size: 18px;
    width: 95%;
    height: 45px;
    font-style: italic;
    border-radius: 3px;
    border: 1px solid #d5d5d5;
  }
`;
const CpfInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15% 5% 10% 5%;
  font-size: 18px;

  input {
    font-size: 18px;
    width: 95%;
    height: 45px;
    font-style: italic;
    border-radius: 3px;
    border: 1px solid #d5d5d5;
  }
`;
const MoviePrview = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  height: 13vh;
  background-color: #dfe6ed;
  bottom: 0;
  left: 0;
`;
const Movie = styled.div`
  padding: 2px 2px 2px 2px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  width: 20%;
  height: 75%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  margin: 0 10px 0 10px;

  img {
    width: 90%;
    height: 90%;
  }
`;
const Name = styled.h1`
  font-size: 23px;
`;
const Reserve = styled.div`
  display: flex;
  margin: 50px 20px 150px 20px;
  justify-content: center;
  align-items: center;
  text-decoration: none !important;
  a {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
  button {
    width: 65%;
    height: 45px;
    border-radius: 3px;
    background-color: #e8833a;
    color: #ffffff;
    border: none;
    font-size: 18px;
  }
`;
export {
  SeatsList,
  H1,
  Seat,
  SeatSub,
  Sub,
  NameInput,
  CpfInput,
  MoviePrview,
  Movie,
  Name,
  Reserve,
};
