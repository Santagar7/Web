import Navbar from '../Elements/Navbar'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import axios from 'axios'
import '../../css/MenuPage.css'

axios.defaults.withCredentials = true
/* eslint-disable react/prop-types */

function Action ({ item }) {
  const cl = item.amount > 0 ? 'profit' : 'cost'
  const date = new Date(item.time)
  return (
        <tr>
            <td>{item.made_by}</td>
            <td>{item.reason}</td>
            <td>{date.toDateString()}</td>
            <td className={cl}>${item.amount}</td>
        </tr>
  )
}

function MenuPage () {
  const { index } = useParams()
  const [money, setMoney] = useState(0)
  const [actions, setActions] = useState([])
  const [refresh, setRefresh] = useState(true)
  useEffect(() => {
    const url = 'http://localhost:7000/'
    axios.get(url + `menu/${index}`).then((resp) => {
      setMoney(resp.data.money)
      setActions(resp.data.arr)
    })
  }, [refresh])
  return (
        <div className='menu'>
            <Navbar index={index} val={refresh} refresh={setRefresh}/>
            <div className="wrapper">
                <div className="money">
                    <h1 id="money">{`Current balance : ${money}`}</h1>
                </div>
                <table id="actions">
                    <thead>
                        <tr>
                            <th>Made by</th>
                            <th>Purpose/Source</th>
                            <th>Time</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {actions.map(item =>
                          (<Action item={item} key={item.time}/>))}
                    </tbody>
                </table>
            </div>
        </div>
  )
}
export default MenuPage
