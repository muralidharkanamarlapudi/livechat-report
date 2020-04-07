import React from 'react'
import { AppContext } from '../App/AppProvider'
import Styled from 'styled-components'
import PriceTile from './PriceTile'

const PriceGrid = Styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
    margin-top: 40px;
`

export default function () {
    return (
        <AppContext.Consumer>
            {
                ({ prices }) =>
                    <PriceGrid>
                        {
                            prices.map((price, index) =>
                                <PriceTile index = {index} price = {price} />
                            )
                        }
                    </PriceGrid>
            }
        </AppContext.Consumer>
    )
}