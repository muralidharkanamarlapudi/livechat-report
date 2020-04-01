import React from 'react';
import Style from 'styled-components'
import { AppContext } from '../App/AppProvider'
import CoinTile from '../Settings/CoinTile'

const ConinGridStyled = Style.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
`

function getCoinsToDisplay(coinList){
    return Object.keys(coinList).slice(0, 100)
}

export default function () {
    return (
        <AppContext.Consumer>{
            ({ coinList }) =>
                <ConinGridStyled>
                    {getCoinsToDisplay(coinList).map(coinKey => 
                        <CoinTile coinKey = {coinKey}/>)}
                </ConinGridStyled>
        }
        </AppContext.Consumer>
    )
}