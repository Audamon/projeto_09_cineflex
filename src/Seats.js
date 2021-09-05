import styled from "styled-components";
import { Link } from "react-router-dom";

const seats = {
    id: 1,
    name: "15:00",
    day: {
        id: 24062021,
        weekday: "Quinta-feira",
        date: "24/06/2021",
    },
    movie: {
        id: 1,
        title: "2067",
        posterURL: "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
        "overview": "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
        "releaseDate": "2020-10-01T00:00:00.000Z",
    },
    seats: [
        {
            "id": 1,
            "name": "1",
            "isAvailable": false,
        },
        {
            "id": 2,
            "name": "2",
            "isAvailable": true,
        },
        {
            "id": 3,
            "name": "3",
            "isAvailable": true,
        },
        {
            "id": 4,
            "name": "4",
            "isAvailable": true,
        },
        {
            "id": 5,
            "name": "5",
            "isAvailable": true,
        },
        {
            "id": 6,
            "name": "6",
            "isAvailable": true,
        },
        {
            "id": 7,
            "name": "7",
            "isAvailable": true,
        },
        {
            "id": 8,
            "name": "8",
            "isAvailable": true,
        },
        {
            "id": 9,
            "name": "9",
            "isAvailable": true,
        },
        {
            "id": 10,
            "name": "10",
            "isAvailable": true,
        },
        {
            "id": 11,
            "name": "11",
            "isAvailable": true,
        },
        {
            "id": 12,
            "name": "12",
            "isAvailable": true,
        },
        {
            "id": 13,
            "name": "13",
            "isAvailable": true,
        },
        {
            "id": 14,
            "name": "14",
            "isAvailable": true,
        },
        {
            "id": 15,
            "name": "15",
            "isAvailable": true,
        },
        {
            "id": 16,
            "name": "16",
            "isAvailable": true,
        },
        {
            "id": 17,
            "name": "17",
            "isAvailable": true,
        },
        {
            "id": 18,
            "name": "18",
            "isAvailable": true,
        },
        {
            "id": 19,
            "name": "19",
            "isAvailable": true,
        },
        {
            "id": 20,
            "name": "20",
            "isAvailable": true,
        },
        {
            "id": 21,
            "name": "21",
            "isAvailable": true,
        },
        {
            "id": 22,
            "name": "22",
            "isAvailable": true,
        },
        {
            "id": 23,
            "name": "23",
            "isAvailable": true,
        },
        {
            "id": 24,
            "name": "24",
            "isAvailable": true,
        },
        {
            "id": 25,
            "name": "25",
            "isAvailable": true,
        },
        {
            "id": 26,
            "name": "26",
            "isAvailable": true,
        },
        {
            "id": 27,
            "name": "27",
            "isAvailable": true,
        },
        {
            "id": 28,
            "name": "28",
            "isAvailable": true,
        },
        {
            "id": 29,
            "name": "29",
            "isAvailable": true,
        },
        {
            "id": 30,
            "name": "30",
            "isAvailable": true,
        },
        {
            "id": 31,
            "name": "31",
            "isAvailable": true,
        },
        {
            "id": 32,
            "name": "32",
            "isAvailable": true,
        },
        {
            "id": 33,
            "name": "33",
            "isAvailable": true,
        },
        {
            "id": 34,
            "name": "34",
            "isAvailable": true,
        },
        {
            "id": 35,
            "name": "35",
            "isAvailable": true,
        },
        {
            "id": 36,
            "name": "36",
            "isAvailable": true,
        },
        {
            "id": 37,
            "name": "37",
            "isAvailable": true,
        },
        {
            "id": 38,
            "name": "38",
            "isAvailable": true,
        },
        {
            "id": 39,
            "name": "39",
            "isAvailable": true,
        },
        {
            "id": 40,
            "name": "40",
            "isAvailable": true,
        },
        {
            "id": 41,
            "name": "41",
            "isAvailable": true,
        },
        {
            "id": 42,
            "name": "42",
            "isAvailable": true,
        },
        {
            "id": 43,
            "name": "43",
            "isAvailable": true,
        },
        {
            "id": 44,
            "name": "44",
            "isAvailable": true,
        },
        {
            "id": 45,
            "name": "45",
            "isAvailable": true,
        },
        {
            "id": 46,
            "name": "46",
            "isAvailable": true,
        },
        {
            "id": 47,
            "name": "47",
            "isAvailable": true,
        },
        {
            "id": 48,
            "name": "48",
            "isAvailable": true,
        },
        {
            "id": 49,
            "name": "49",
            "isAvailable": true,
        },
        {
            "id": 50,
            "name": "50",
            "isAvailable": true,
        },
    ]
}

export default function Seats() {
    return (
        <>
            <H1>Selecione o(s) assento(s)</H1>
            <SeatsList>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
                <Seat backgroundColor=" #C3CFD9">01</Seat>
            </SeatsList>
            <SeatSub>
                <Sub>
                    <Seat backgroundColor=" #8DD7CF"></Seat>
                    Selecionado
                </Sub>
                <Sub>
                    <Seat backgroundColor=" #C3CFD9"></Seat>
                    Disponível
                </Sub>
                <Sub>
                    <Seat backgroundColor=" #FBE192"></Seat>
                    Indisponível
                </Sub>
            </SeatSub>
            <NameInput>
                Nome do comprador:
                <input type="text" placeholder="Digite seu nome..."></input>
            </NameInput>
            <CpfInput>
                CPF do comprador:
                <input type="text" placeholder="Digite seu CPF..."></input>
            </CpfInput>

            <Reserve>
                <Link to={"/sucesso"}>
                    <button>Reservar assentos</button>
                </Link>
            </Reserve>

            <MoviePrview>
                <Movie>
                    <img src={seats.movie.posterURL} alt="" />
                </Movie>
                <Name>{seats.movie.title} <br /> {seats.day.weekday}- {seats.day.date} </Name>
            </MoviePrview>
        </>
    );
}

const SeatsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: space-evenly;
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
const Seat = styled.button`
    background-color: ${props => props.backgroundColor};
    border: 1px solid #808F9D;
    border-radius: 12px;
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2px 4px 8px 4px;
`
const SeatSub = styled.div`
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;

`
const Sub = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 11px;
`
const NameInput = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15% 5% 10% 5%;
    font-size: 18px;
    
    input{
        font-size: 18px;
        width: 95%;
        height: 45px;
        font-style: italic;
        border-radius: 3px;
        border: 1px solid #D5D5D5;
        color: #AFAFAF;
    }
`
const CpfInput = styled.div` 
    display: flex;
    flex-direction: column;
    margin: 15% 5% 10% 5%;
    font-size: 18px;
    
    input{
        font-size: 18px;
        width: 95%;
        height: 45px;
        font-style: italic;
        border-radius: 3px;
        border: 1px solid #D5D5D5;
    }

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
    font-size: 23px;

`

const Reserve = styled.div`
    display: flex;
    margin: 50px 20px 20px 20px;
    justify-content: center;
    align-items: center;
    text-decoration: none !important;
    a{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;

    }
    button{
       width : 65%;
       height: 45px;
       border-radius: 3px;
       background-color: #E8833A;
       color: #ffffff;
       border: none;
       
    }
`