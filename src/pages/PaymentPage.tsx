import React from 'react'
import Navbar from '../../components/Navbar'

const PaymentPage = () => {
  return (
    <main>
        <Navbar/>
        <div className=' flex justify-center align-middle'>
            <button className='h-14 w-40 bg-orange-600 text-white text-xl rounded-lg m-40' onClick={()=>{
                
            }}>Pay now</button>
        </div>
    </main>
  )
}

export default PaymentPage