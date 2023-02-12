import { useState } from 'react'
import { Space } from "antd";
import "./App.css";
import AppFooter from "./Components/AppFooter";
import AppHeader from "./Components/AppHeader";
import PageContent from "./Components/PageContent";
import SideMenu from "./Components/SideMenu";
import Login from "./Login";
import MainDashApp from "./Components/MainDashApp";
import Inventory from "./Pages/Inventory";
import Customers from "./Pages/CUstomers";
import Orders from "./Pages/Orders";
import Dashboard from "./Pages/Dashboard";
import { Route, Routes} from "react-router-dom";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <>
    <div className="PageContent">
      { !isLoggedIn ?  <Routes>
            <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn}/>}  />
        </Routes>: <MainDashApp />}
    </div>
    </>
  );
}
