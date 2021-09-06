import styled from "styled-components";

const SessionsList = styled.div`
    padding:0 8vw 0 8vw ;
    margin-bottom: 13vh;

`
const Date = styled.h1`
    font-size: 20px;
`
const Session = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;

`
const Hour = styled.button`
    border: none;
    background-color: #E8833A;
    font-size: 18px;
    margin: 15px 5px 15px 0;
    border-radius: 3px;
    width: 22vw;
    height: 5vh;
    color: #ffffff;
`
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
`
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
    margin:0 10px 0 10px;


    img{
        width: 90%;
        height: 90%;
    }
`
const Name = styled.h1`
    font-size: 26px;

`
const H1 = styled.h1`
    margin-top: 7.5vh;
    display: inline-block;
    width: 100%;
    height: 8vh;
    text-align: center;
    line-height: 60px;
    font-size: 24px;
`

export {SessionsList, Date, Session, Hour, MoviePrview, Movie, Name, H1}