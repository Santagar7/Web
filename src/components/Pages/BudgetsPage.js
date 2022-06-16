import '../../css/BudgetsPage.css'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Navbar from '../Elements/Navbar'
import CreateBudgetPanel from '../Elements/CreateBudgetPanel'

const url = 'http://localhost:7000/'

function BudgetsPage () {
  const [active, setShowPanel] = useState(false)
  const [budgets, setBudgets] = useState([])
  useEffect(() => {
    axios.get(url + 'my_budgets').then((resp) => {
      setBudgets(resp.data.data || [])
    })
  }, [])
  return (
        <div className="budgets_page">
            <CreateBudgetPanel active={active} func={setShowPanel}/>
            <Navbar/>
            <div className={!active ? 'center' : 'center not_active'}>
                <h1>My budgets</h1>
                <div className="budgets" id="budgets">
                    {budgets.map(item =>
                      (<Link key={item.index} to={'/menu/' + item.index}>{item.name}</Link>))}
                </div>
                <button onClick={() => setShowPanel(true)}>Create new budget</button>
            </div>
        </div>
  )
}

export default BudgetsPage
