import React from 'react'
import { AppContext } from '../App/AppProvider'
import { SelectableTile, DeletableTile, DisabledTile } from '../Shared/Tile'
import CoinHeaderGrid from './CoinHeaderGrid'

function clickCoinHandler(topSection, coinKey, addCoin, removeCoin) {
    return topSection ? () => {
        removeCoin(coinKey)
    } : () => {
        addCoin(coinKey)
    }
}

export default function ({ coinKey, topSection }) {
    return (
        <AppContext.Consumer>
            {
                ({ coinList, addCoin, removeCoin , isOnFavorites}) => {
                    let coin = coinList[coinKey];
                    let TileClass = SelectableTile;
                    if (topSection) {
                        TileClass = DeletableTile;
                    } else if(isOnFavorites(coinKey)){
                        TileClass = DisabledTile;
                    }
                    return (
                        <TileClass onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}>
                            <CoinHeaderGrid topSection={topSection} name={coin.CoinName} symbol={coin.Symbol} />
                        </TileClass>
                    )
                }
            }
        </AppContext.Consumer>
    )
}