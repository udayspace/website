import React from 'react'
import ReactDOM from 'react-dom'


const Welcome = () =>   {
    return(
        <div className='container'>
            <h1>Hello Rails7+React</h1>
        </div>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Welcome />, document.getElementById('welcome'))
})

export default Welcome
