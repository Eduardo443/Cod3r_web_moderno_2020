import React from 'react'

import Filho from './Filho.jsx'
import { childrenWithProps } from '../utils/utils.js'

export default props =>
    <div>
        <h1>{props.nome}{props.sobrenome}</h1>
        <h2>Filho</h2>
        <ul>
            {childrenWithProps(props)}
        </ul>
    </div>