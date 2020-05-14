import React from 'react'

var data = new Date();
var ano = data.getFullYear();

export default prps => (
    <footer className="main-footer">
        <strong>
            Copyright &copy; {ano}
        </strong>
    </footer>
)