import React from 'react';
import styled from 'styled-components'

const CardPequenoContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 70px;
    img {
        width: 30px;
        margin-right: 10px;
    }
    div {
        display: flex;
    }
    h4 {
        margin-right: 5px;
    }
`

function CardPequeno(props) {
    return (
        <CardPequenoContainer>
            <img src={ props.icone } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </CardPequenoContainer>
    )
}

export default CardPequeno;

