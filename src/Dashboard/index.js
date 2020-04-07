import React from 'react';
import Page from '../Shared/Page'
import PriceGrid from './PriceGrid';
import Styled from 'styled-components'
import PriceChat from './PriceChat'

const ChatGrid = Styled.div`
    display: grid;
    margin-top: 20px;
    grid-gap: 15px;
    grid-template-columns: 1fr;
`

export default function () {
    return (
        <div>
            <Page name='dashboard'>
                <PriceGrid/>
                <ChatGrid> 
                    <PriceChat/>
                 </ChatGrid>
            </Page>
        </div>)
}
