import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './blillingCycleAction'
import labelAndInput from '../common/form//labelAndInput'
import ItemList from './itenKist'
import Sumry from './sumary'

class BillingCycleForm extends Component {
    calculateSummary() {
        const soma = (t, v) => t + v
        return{
            sumOfCredts: this.props.credits.map(c => +c.value || 0).reduce(soma),
            sunOfDebts: this.props.debts.map(d => +d.value || 0).reduce(soma)
        }
    }

    render() { 
        const { handleSubmit, readOnly, credits, debts } = this.props
        const { sumOfCredts, sunOfDebts} = this.calculateSummary()
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={labelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o Nome.' />
                    <Field name='month' component={labelAndInput} readOnly={readOnly}
                        type='number' label='Mês' cols='12 4' placeholder='Informe o mês.' />
                    <Field name='year' component={labelAndInput} readOnly={readOnly}
                        type='number' label='Ano' cols='12 4' placeholder='Informe o ano.' />
                    <Sumry credts={sumOfCredts} debts={sunOfDebts} />
                    <ItemList cols='12 6' list={credits} readOnly={readOnly}
                        filde='credts' legend='Créditos' />
                    <ItemList cols='12 6' list={debts} readOnly={readOnly}
                        filde='debts' legend='Débitos' showStatus={true} />
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({
    credits: selector(state, 'credts'),
    debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)