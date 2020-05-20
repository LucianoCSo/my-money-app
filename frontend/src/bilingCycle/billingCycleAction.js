import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize} from 'redux-form'
import { showTab, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3331/api'

const INITIAL_VALUES = {credts: [{}], debts: [{}]}

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function update(values) {
    return submit(values, 'put')
}

export function excluir(values){
    return submit(values, 'delete')
}

export function create(values) {
    return submit(values, 'post')
}

function submit(values, method){
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(billingCycle){
    return showTable(billingCycle, 'tabUpdate') 
}

export function showDelete(billingCycle){
    return showTable(billingCycle, 'tabDelete')
}

function showTable(billingCycle, method){
    return [
        showTab(method),
        selectTab(method),
        initialize('billingCycleForm', billingCycle)
    ]
}
export function init(){
    return [
        showTab('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}