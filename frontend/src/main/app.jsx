import React from 'react'

import Header from '../common/template/header'
import Sidebar from '../common/template/sidbar'
import Footer from '../common/template/footer'
import Messager from '../common/msg/messager'

export default props => (
    <div className='wrapper'>
        <Header />
        <Sidebar />
        <div className="content-wrapper">
            {props.children}
        </div>
        <Footer />
        <Messager />
    </div>
)