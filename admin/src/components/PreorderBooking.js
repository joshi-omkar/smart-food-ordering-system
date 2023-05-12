import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PreorderCard from './PreorderCard'
import '../Styles/PreorderBooking.css'

const PreorderBooking = () => {

  const [allPrebookOrders, setAllPrebookOrders] = useState([])

  const getData = () => {
    axios.get('http://localhost:3001/getPrebookOrders')
    .then((res)=> {
      setAllPrebookOrders(res.data)
    }).catch((err)=> console.log(err))
  }

  useEffect(()=>{
    getData()
  }, [])

  const userData = allPrebookOrders.map((order, key)=>{
    const userInfo = JSON.parse(JSON.parse(order.userInfo))
    return userInfo
  })
  
  const prebookOrders = allPrebookOrders.map((order, key)=>{
    const preorder = JSON.parse(order.items);
    const userInfo = JSON.parse(JSON.parse(order.userInfo))
    const itemsCount = preorder.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.count += 1;
      } else {
        acc.push({
          id: item.id,
          dishName: item.dishName,
          dishDescription: item.dishDescription,
          dishPrice: item.dishPrice,
          count: 1,
          tableId: item.tableId,
          currentCategory: item.currentCategory,
          mobileNo: userInfo.mobileNo,
          userName: userInfo.name
        });
      }
      return acc;
    }, []);
    
  return itemsCount
  })

  return (
    <div className='PreorderBooking'>
      <h3>Pre-book Order</h3>
      <div>
        {prebookOrders.map((prebookOrder, key)=>{
          return(
            <PreorderCard userData={userData} prebookOrder={prebookOrder}/>
          )
        })}
      </div>
      
    </div>
  )
}

export default PreorderBooking