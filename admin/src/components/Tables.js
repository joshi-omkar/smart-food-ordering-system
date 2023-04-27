import React from 'react'
import NormalTables from './NormalTables'
import PreorderBooking from './PreorderBooking'
import '../Styles/Tables.css'

const Tables = () => {
  return (
    <div className='tables'>
        <NormalTables/>
        <PreorderBooking/>
    </div>
  )
}

export default Tables