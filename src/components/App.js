//import '../css/App.css';
import { Routes,BrowserRouter,Route } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import BudgetsPage from "./Pages/BudgetsPage";
import MenuPage from "./Pages/MenuPage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<LoginPage/>}/>
              <Route path='/signup' element={<SignUpPage/>}/>
              <Route path='/budgets' element={<BudgetsPage/>}/>
              <Route path='/menu/:index' element={<MenuPage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}
