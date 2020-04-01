import React from 'react';
import Styled from 'styled-components'
import styled from 'styled-components';

export const CoinHeaderGridStyled = Styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const CoinSymbol = styled.div`
    justify-self: right;
`

export default function({name, symbol}){
    return(
        <CoinHeaderGridStyled>
            <div>{name}</div>
            <CoinSymbol>{symbol}</CoinSymbol>
        </CoinHeaderGridStyled>
    )
}