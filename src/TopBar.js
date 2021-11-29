import styled, { keyframes } from 'styled-components';
import { useHistory } from 'react-router-dom';

export default function TopBar({ backButton }) {
  const h = useHistory();

  function teste() {
    console.log(backButton === undefined || backButton === '/');
    h.goBack();
  }

  return (
    <Header>
      <Button
        onClick={teste}
        display={backButton === undefined ? 'none' : 'block'}
      >
        Voltar
      </Button>
      <Title>CINEFLEX</Title>
    </Header>
  );
}
const Flicker = keyframes`
   0%, 18%, 22%, 25%, 53%, 57%, 100% {
    text-shadow:
    0 0 7px #fff,
    0 0 10px #ffd700,
    0 0 21px #ffd700,
    0 0 42px #ffd700,
    0 0 82px #ffd700,
    0 0 92px #ffd700,
    0 0 102px #ffd700,
    0 0 151px #ffd700;
  }
  20%, 24%, 55% {       
    text-shadow: none;
  }
`;
const Title = styled.div`
    color: #ffd700;
    animation: ${Flicker} 1.5s infinite alternate;
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 7.5vh;
  background-color: #010B02;
  font-size: 34px;
`;

const Button = styled.button`
  font-size: 18px;
  border-radius: 3px;
  color: #010B02;
  background-color: #ffd700;
  border: none;
  height: 35px;
  display: ${(props) => props.display};
  position: fixed;
  left: 10px;
`;
