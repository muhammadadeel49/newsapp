import React from 'react'
import Spin from './Spin.gif'

const Spinner = () => {
    return (
        <div className='text-center'>
            <img className='my-2' src={Spin} alt="Spin" />
        </div>
    )
}
export default Spinner
