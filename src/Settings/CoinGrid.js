import React from 'react';
import Style from 'styled-components'
import { AppContext } from '../App/AppProvider'
import CoinTile from '../Settings/CoinTile'

const ConinGridStyled = Style.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 2fr));
    grid-gap: 15px;
    margin-top: 40px
`

function getCoinsToDisplay(coinList, topSection, favorites){
    return topSection ? favorites : Object.keys(coinList).slice(0, 100)
}

export default function ({topSection}) {
    return (
        <AppContext.Consumer>{
            ({ coinList, favorites }) =>
                <ConinGridStyled>
                    {getCoinsToDisplay(coinList, topSection, favorites).map(coinKey => 
                        <CoinTile key = {coinKey} topSection = {topSection} coinKey = {coinKey}/>)}
                </ConinGridStyled>
        }
        </AppContext.Consumer>
    )
}