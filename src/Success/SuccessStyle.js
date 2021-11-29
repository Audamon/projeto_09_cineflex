import styled from 'styled-components';

const H1 = styled.h1`
  margin-top: 10vh;
  display: inline-block;
  width: 100%;
  height: 8vh;
  text-align: center;
  font-size: 24px;
  color: #247a6b;
`;
const Information = styled.div`
  margin: 10px 10px 30px 30px;
  font-size: 22px;

  strong {
    font-size: 24px;
    line-height: 2;
  }
  div {
    line-height: 1.2;
  }
`;
const BackHome = styled.div`
  margin: 100px 60px 0px 60px;
  button {
    font-size: 18px;
    width: 100%;
    color: #ffffff;
    height: 45px;
    border-radius: 3px;
    background-color: #e8833a;
    border: none;
  }
`;
export { H1, Information, BackHome };
