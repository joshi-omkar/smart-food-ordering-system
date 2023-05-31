import React from 'react'
import NormalTables from './NormalTables'
import PreorderBooking from './PreorderBooking'
import '../Styles/Tables.css'

const Tables = () => {
  const tableNo = [1, 2, 3, 4, 5, 6, 7, 8];
  const tableStatus = {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
  };
  return (
    <div className='tables'>
        <NormalTables tableNo={tableNo} tableStatus={tableStatus}/>
        <PreorderBooking tableStatus={tableStatus}/>
    </div>
  )
}

export default Tables