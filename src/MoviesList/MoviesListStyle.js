import styled from 'styled-components';

const MovieList = styled.div`
  margin: 3vh 0 5vh 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Movie = styled.div`
  padding: 2px 2px 2px 2px;
  box-shadow: 0px 2px 4px 2px rgba(255, 215, 0, 0.2);
  width: 39vw;
  height: 24vh;
  background-color: #0a0a0a;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin-bottom: 10px;

  img {
    width: 92%;
    height: 92%;
    border-radius: 6px;
  }
`;

const H1 = styled.h1`
  margin-top: 7.5vh;
  display: inline-block;
  width: 100%;
  height: 8vh;
  text-align: center;
  line-height: 60px;
  font-size: 24px;
  color: #ffd700;
`;
export { MovieList, Movie, H1 };
