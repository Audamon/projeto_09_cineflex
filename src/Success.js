import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Success() {
    return (
        <>
            <H1><strong>Pedido feito</strong> <br /> <strong>com sucesso!</strong></H1>
            <Information>
                <strong>Filme e sessão</strong>
                <br />
                Enola Holmes
                <br />
                24/06/2021 15:00
            </Information>
            <Information>
                <strong>Ingressos</strong>
                <br />
                Assento 15
                <br />
                Assento 16
            </Information>
            <Information>
                <strong>Comprador</strong>
                <br />
                Nome: João
                <br />
                CPF: 123.456.789-10
            </Information>
            <BackHome>
                <Link to="/">
                    <button> Voltar para Home</button>
                </Link>
            </BackHome>
        </>
    );
}

const H1 = styled.h1`
    margin-top: 10vh;
    display: inline-block;
    width: 100%;
    height: 8vh;
    text-align: center;
    font-size: 24px;
    color:  #247A6B;
    
`
const Information = styled.div` 
    margin: 10px 10px 30px 30px;
    font-size: 22px;
    line-height: 30px;
    strong{
        font-size: 24px;
    }

`
const Tickets = styled.div` 
    margin: 10px 10px 30px 30px;
    font-size: 24px;

`
const Buyer = styled.div` 
    margin: 10px 10px 30px 30px;
    font-size: 24px;

`
const BackHome = styled.div` 
    margin: 100px 60px 0px 60px;
    button{
        font-size: 18px;
        width: 100%;
        color: #ffffff;
        height: 45px;
        border-radius: 3px;
        background-color: #E8833A;
        border: none;

    }
`