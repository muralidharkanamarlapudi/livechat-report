import highChartsConfig from './HighchatsConfig'
import React from 'react'
import {Tile} from '../Shared/Tile'
import {AppContext} from '../App/AppProvider'
import ReactHighChats from 'react-highcharts'
import HighchartsTheme from './HighchatsTheme'
import Styled from 'styled-components'

ReactHighChats.Highcharts.setOptions(HighchartsTheme);

const PriceChatStyle = Styled(Tile)`
    margin-top: 40px;
`

export default function(){
    return(
        <AppContext.Consumer>
            {
                ({}) =>
                <PriceChatStyle>
                    <ReactHighChats config={highChartsConfig()}/> 
                </PriceChatStyle>
            }
        </AppContext.Consumer>
    )
}