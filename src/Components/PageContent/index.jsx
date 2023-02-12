import { Routes, Route } from "react-router-dom";
import Customers from "../../Pages/CUstomers";
import Dashboard from "../../Pages/Dashboard";
import Inventory from "../../Pages/Inventory";
import Orders from "../../Pages/Orders";
import Login from "../../Login";
 export default function PageContent() {
  return (
    <div className="PageContent">
      
         <Routes>
            <Route path="/" element={< Dashboard />} />
            <Route path="/inventory" element={< Inventory />} />
            <Route  path="/orders"  element={< Orders />} />
            <Route  path="/customers"  element={< Customers />} />
        </Routes>
    </div>
  );
}

