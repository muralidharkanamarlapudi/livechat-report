import React from 'react';
import Styled from 'styled-components'
import styled from 'styled-components';
import {DeletableTile} from '../Shared/Tile'

export const CoinHeaderGridStyled = Styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const CoinSymbol = styled.div`
    justify-self: right;
`

const DeleteIcon = styled.div`
    justify-self: right;
    display: none;
    ${DeletableTile}: hover & {
        display: block;
        color: red;
    }
`

export default function({name, symbol, topSection}){
    return(
        <CoinHeaderGridStyled>
            <div>{name}</div>
            {
                topSection ? (<DeleteIcon> x </DeleteIcon>) : (<CoinSymbol>{symbol}</CoinSymbol>)
            }     
        </CoinHeaderGridStyled>
    )
}