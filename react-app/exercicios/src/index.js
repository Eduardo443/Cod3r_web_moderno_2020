import React from 'react'
import reactDom from 'react-dom'

import Pai from './componentes/Pai.jsx'
import Filho from './componentes/Filho.jsx'

reactDom.render(
    <div>
        <Pai nome="Eduardo " sobrenome='Hensel'>
            <Filho nome='Pedro '/>
            <Filho nome='Jose '/>
            <Filho nome="Maria "/>
        </Pai>
    </div>
, document.getElementById('root'))
