
import { Link, useParams} from "react-router-dom";
import { useEffect, useState, } from "react";
import {SeatsList, H1, Seat, SeatSub, Sub, NameInput, CpfInput, MoviePrview, Movie, Name, Reserve} from './SeatsStyle'
import axios from "axios";

export default function Seats({ order, setOrder, setBackButton }) {
    const { idSessao } = useParams();
    const [seats, setSeats] = useState({ day: {}, movie: {}, seats: [] });
    const [choosenSeats, setChoosenSeats] = useState([])
    const [idSeats, setIdSeats] = useState([])
    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/` + idSessao + `/seats`);
        promise.then(response => {
            setSeats({ ...response.data })
            setOrder({ ...order, date: response.data.day.weekday, hour: response.data.name })
            setBackButton(idSessao);
        })
    }, []);
    
    function chooseSeat(seat) {
        
        
        if (seat.isAvailable) {
            if (idSeats.includes(seat.id)) {
                setIdSeats(idSeats.filter(idSeat => seat.id !== idSeat));
                setChoosenSeats(choosenSeats.filter(chooseSeat => seat.name !== chooseSeat));
            } else {
                setChoosenSeats([...choosenSeats, seat.name]);
                setIdSeats([...idSeats, seat.id])
            }
        }
    }
    
    function closeOrder() {
        
        setOrder({ ...order, seats: [...choosenSeats] });
        const sendOrder = {
            ids: [...idSeats],
            name: order.buyerName,
            cpf: order.cpf
        };
        //axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many', sendOrder);
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

