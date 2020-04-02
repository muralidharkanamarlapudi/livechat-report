import React from 'react';
import Style from 'styled-components'
import {subtleBoxShadow, lightbluebackground, greenBoxShadow} from './Styles'

export const Tile = Style.div`
    ${subtleBoxShadow}
    ${lightbluebackground}
    padding: 10px
`

export const SelectableTile = Style(Tile)`
    &:hover {
        curser: pointer;
        ${greenBoxShadow};
    }
`
