import React from 'react'
import '../common/template/dependencias'

import Header from '../common/template/header'
import Sidebar from '../common/template/sidbar'
import Footer from '../common/template/footer'
import Routes from './routes'
import Messager from '../common/msg/messager'

export default props => (
    <div className='wrapper'>
        <Header />
        <Sidebar />
        <div className="content-wrapper">
            <Routes />
        </div>
        <Footer />
        <Messager />
    </div>
)