import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTren'

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path="#" label="Dashboard" icon="dashboard" />
        <MenuTree label="Cadastro" icon="edit">
            <MenuItem path="#bilingCycles"
                label="Ciclo de Pagamento" icon="usd" />
        </MenuTree>
    </ul>
)