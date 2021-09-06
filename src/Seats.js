import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState, } from "react";
import axios from "axios";

export default function Seats({ order, setOrder }) {
    const { idSessao } = useParams();
    const [seats, setSeats] = useState({ day: {}, movie: {}, seats: [] });
    const [choosenSeats, setChoosenSeats] = useState([])
    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/` + idSessao + `/seats`);
        promise.then(response => {
            setSeats({ ...response.data })
            setOrder({ ...order, date: response.data.day.weekday, hour: response.data.name })
        })
    }, []);

    function chooseSeat(seat) {
        if (seat.isAvailable) {
            if (choosenSeats.includes(seat.name)) {
                setChoosenSeats(choosenSeats.filter(chooseSeat => seat.name !== chooseSeat));
            } else {
                setChoosenSeats([...choosenSeats, seat.name]);

                
            }
        }
    }
    
    function closeOrder() {
        
        setOrder({ ...order, seats: [...choosenSeats] });
        const sendOrder = {
            ids: [...choosenSeats],
            name: order.buyerName,
            cpf: order.cpf
        };
        
        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many', sendOrder);
    }
    return (
        <>
            <H1>Selecione o(s) assento(s)</H1>
            <SeatsList>
                {seats.seats.map(seat => <Seat backgroundColor={seat.isAvailable ? ((choosenSeats.includes(seat.name)) ? "#8DD7CF" : "#C3CFD9") : "#FBE192"} onClick={() => chooseSeat(seat)} key={seat.id}>{seat.name}</Seat>)}
            </SeatsList>
            <SeatSub>
                <Sub>
                    <Seat backgroundColor="#8DD7CF"></Seat>
                    Selecionado
                </Sub>
                <Sub>
                    <Seat backgroundColor="#C3CFD9"></Seat>
                    Disponível
                </Sub>
                <Sub>
                    <Seat backgroundColor="#FBE192"></Seat>
                    Indisponível
                </Sub>
            </SeatSub>
            <NameInput>
                Nome do comprador:
                <input type="text" placeholder="Digite seu nome..." onChange={(e) => setOrder({ ...order, buyerName: e.target.value })}></input>
            </NameInput>
            <CpfInput>
                CPF do comprador:
                <input type="text" placeholder="Digite seu CPF..." onChange={(e) => setOrder({ ...order, cpf: e.target.value })}></input>
            </CpfInput>

            <Reserve>
                <Link to={"/sucesso"}>
                    <button onClick={() => closeOrder()}>Reservar assentos</button>
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