import { Menu } from "antd";
import {
    AppstoreOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    UserOutlined,
  } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SideMenu (){

    const location = useLocation();
    const [ selectedKeys, setSelectedkeys] = useState('/')

    useEffect(() => {
        const pathName = location.pathname
       setSelectedkeys(pathName)
       
    }, [location.pathname])
    

    const navigate = useNavigate();
    return <div className="SideMenu"> 
    <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item)=>{
            navigate(item.key)
        }}

        selectedKeys={[selectedKeys]}

        items={[
            { label: "Dashboard",
              icon: <AppstoreOutlined/>,
              key:'/'  
            },
            { label: "Inventory",
               key:'/inventory',
               icon:<ShopOutlined/>  
            },
            { label: "Orders",  
                key:'/orders',
                icon:<ShoppingCartOutlined/>  
            },
            { label: "Customers",
                key:'/customers',
                icon:<UserOutlined/>  
            },
           
        ]}
    >
            
    </Menu>
     </div>
}

