import React from 'react'
import Styles, { css } from 'styled-components'
import { SelectableTile } from '../Shared/Tile'
import { fontSize3, fontSizeBig, greenBoxShadow } from '../Shared/Styles'
import { CoinHeaderGridStyled } from '../Settings/CoinHeaderGrid'
import { AppContext } from '../App/AppProvider'

const JustifyRight = Styles.div`
    justify-self: right;
`

const TickerPrice = Styles.div`
    ${fontSizeBig}
`

const ChangePct = Styles.div`
    color: green;
    ${props => props.red && css`
        color: red;
    `}
`

const PricedTileStyled = Styles(SelectableTile)`
    ${
    props => props.compact && css`
            display: grid;
            grid-gap: 5px;
            grid-template-columns; repeat(3, 1fr);
            ${fontSize3}
        `
    }
    ${props => props.currentFavorite && css`
        ${greenBoxShadow};
        pointer-event: none;
    `}
`
const numberFormat = number => {
    return +(number + '').slice(0, 7)
}

function PriceTile({ sym, data, currentFavorite, setCurrentFavorite }) {
    return (
        <PricedTileStyled onClick = {setCurrentFavorite} currentFavorite = {currentFavorite}>
            <CoinHeaderGridStyled>
                <div> {sym} </div>
                <JustifyRight>
                    <ChangePct red={data.CHANGEPCT24HOUR < 0}>
                        {numberFormat(data.CHANGEPCT24HOUR)}
                    </ChangePct>
                </JustifyRight>
            </CoinHeaderGridStyled>
            <TickerPrice> ${numberFormat(data.PRICE)} </TickerPrice>
        </PricedTileStyled>
    )
}

export default function ({ price, index }) {
    let sym = Object.keys(price)[0]
    let data = price[sym]['USD']
    return (
        <AppContext.Consumer>
            {({ currentFavorite, setCurrentFavorite }) => 
                <PriceTile 
                sym={sym} 
                data={data} 
                currentFavorite = {currentFavorite === sym}
                setCurrentFavorite = {() => setCurrentFavorite(sym)}
                ></PriceTile>
        }
        </AppContext.Consumer>

    )
}