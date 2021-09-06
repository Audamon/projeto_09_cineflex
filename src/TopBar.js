import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";

export default function TopBar({backButton}) {
   
    let h =useHistory();
    
    function teste(){
        console.log((backButton === undefined || backButton === "/"))
        h.goBack()
    }

    return (
            <Header >
                <Button onClick={teste} display={(backButton === undefined )? "none": 'block'}>Voltar</Button>
                CINEFLEX
            </Header> 
    );

}


const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
   width: 100vw;
   height: 7.5vh;
   background-color:  #C3CFD9; 
   color: #E8833A;
   font-size: 34px;   
`
const Button = styled.button`
    font-size: 18px;
    border-radius: 3px;
    color: #ffffff;
    background-color: #E8833A;
    border: none;
    height: 35px;
    display: ${props => props.display};
    position: fixed;
    left: 10px;

`
