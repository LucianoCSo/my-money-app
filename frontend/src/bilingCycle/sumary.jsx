import React from 'react'

import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

export default ({credts, debts}) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols='12 4' color='blue' icon='bank'
                    value={`R$ ${credts}`} text='Todos os Créditos' />
                <ValueBox cols='12 4' color='red' icon='credt-card'
                    value={`R$ ${debts}`} text='Todos os Débitos' />
                <ValueBox cols='12 4' color='green' icon='money'
                    value={`R$ ${credts - debts}`} text='Valor Consolidado' />
            </Row>
        </fieldset>
    </Grid>
)