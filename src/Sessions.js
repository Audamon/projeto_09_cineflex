import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

const sessoes = {
    id: 1,
    title: "2067",
    posterURL: "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
    overview: "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
    releaseDate: "2020-10-01T00:00:00.000Z",
    days: [
        {
            id: 24062021,
            weekday: "Quinta-feira",
            date: "24/06/2021",
            showtimes: [
                {
                    name: "15:00",
                    id: 1
                },
                {
                    name: "19:00",
                    id: 2
                }
            ]
        },
        {
            id: 25062021,
            weekday: "Sexta-feira",
            date: "25/06/2021",
            showtimes: [
                {
                    name: "15:00",
                    id: 3
                },
                {
                    name: "19:00",
                    id: 4
                }
            ]
        },
        {
            id: 26062021,
            weekday: "Sábado",
            date: "26/06/2021",
            showtimes: [
                {
                    name: "15:00",
                    id: 5
                },
                {
                    name: "19:00",
                    id: 6
                }
            ]
        },
        {
            id: 27062021,
            weekday: "Domingo",
            date: "27/06/2021",
            showtimes: [
                {
                    name: "15:00",
                    id: 7
                },
                {
                    name: "19:00",
                    id: 8
                }
            ]
        },
        {
            id: 28062021,
            weekday: "Segunda-feira",
            date: "28/06/2021",
            showtimes: [
                {
                    name: "15:00",
                    id: 9
                },
                {
                    name: "19:00",
                    id: 10
                }
            ]
        },
        {
            id: 29062021,
            weekday: "Terça-feira",
            date: "29/06/2021",
            showtimes: [
                {
                    name: "15:00",
                    id: 11
                },
                {
                    name: "19:00",
                    id: 12
                }
            ]
        },
        {
            id: 30062021,
            weekday: "Quarta-feira",
            date: "30/06/2021",
            showtimes: [
                {
                    name: "15:00",
                    id: 13
                },
                {
                    name: "19:00",
                    id: 14
                }
            ]
        },
        {
            id: 1072021,
            weekday: "Quinta-feira",
            date: "01/07/2021",
            showtimes: [
                {
                    name: "15:00",
                    id: 15
                },
                {
                    name: "19:00",
                    id: 16
                }
            ]
        }
    ]
}

export default function Sessions() {
    const { idFilme } = useParams();

    return (
        <>
            <SessionsList>
                <H1>Selecione o horário</H1>
                {sessoes.days.map((sessao, index) => {return (<>
                                               
                                                <Date key={index}>{sessao.weekday} - {sessao.date}</Date>
                                                <Session key={sessao.id}>
                                                    {sessao.showtimes.map(showtime => <Link to={`/assentos/${sessao.id}`} ><Hour key={showtime.id}>{showtime.name}</Hour></Link>)}
                                                </Session>
                                            </>
                                            );})}
            </SessionsList>
            <MoviePrview>
                <Movie>
                    <img src={sessoes.posterURL} alt="" />
                </Movie>
                <Name>{sessoes.title} <br /></Name>
            </MoviePrview>
        </>
    );
}

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