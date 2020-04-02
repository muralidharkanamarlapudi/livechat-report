import React from 'react';
import { AppContext } from '../App/AppProvider'

export default function (props) {
    return (
        <AppContext.Consumer>{
            ({ coinList }) => {
                console.log(coinList)
                if (!coinList) {
                    return <div> Loding Coins </div>
                }
                return <div> {props.children} </div>
            }
        }
        </AppContext.Consumer>
    )
}