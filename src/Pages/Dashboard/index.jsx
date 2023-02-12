import { Card, Space, Statistic, Table, Typography } from "antd";

import {
    AppstoreOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    UserOutlined,
    DollarCircleFilled
  } from "@ant-design/icons";
import { useActionData, useFetcher } from "react-router-dom";
import { useState, useEffect } from "react";
import { getInventory, getOrders, getRevenue, getUsers } from "../../API";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Customers from "../Customers";
import AppHeader from "../../Components/AppHeader";
import SideMenu from "../../Components/SideMenu";
import PageContent from "../../Components/PageContent";


  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  

export default function Dashboard(){

  const [orders, setOrders]= useState(0)
  const [inventory, setInventory] = useState(0)
  const [customers, setCustomers] = useState(0)
  const [revenue, setRevenue] = useState(0)

  // calling diff API's
  useEffect(() => {
    
    getOrders().then(res => {
      setOrders(res.total)
      setRevenue(res.total*4)
    });
    
    getUsers().then(res => {
      setCustomers(res.total)
    });

    getInventory().then(res=>{
      setInventory(res.total)
    });

   

  }, [])
  
  

    return (
      
     
    <Space size={20} direction="vertical">
      
        <Typography.Title level={4} >Dashboard</Typography.Title>
        <Space direction="horizontal">
            <DashboardCard title={'Orders'} icon={<ShoppingCartOutlined style={{
                color:"green",
                backgroundColor:"rgba(0,255,0,0.25)",
                borderRadius:18 ,
                fontSize:20,
                padding:6
            }} />} value={orders} />
            <DashboardCard title={'Customers'} icon={<UserOutlined style={{
                color:"blue",
                backgroundColor:"rgba(0,0,255,0.25)",
                borderRadius:18 ,
                fontSize:20,
                padding:6
            }}/>} value={customers} />
            <DashboardCard title={'Inventory'} icon={<AppstoreOutlined style={{
                color:"purple",
                backgroundColor:"gba(0,255,255,0.25)",
                borderRadius:18 ,
                fontSize:20,
                padding:6
            }}/>} value={inventory} />
            <DashboardCard title={'Revenu'} icon={<DollarCircleFilled style={{
                color:"red",
                backgroundColor:"rgba(255,0,0,0.25)",
                borderRadius:18 ,
                fontSize:20,
                padding:6
            }} />} value={revenue} />
        </Space>
        <Space>
            <RecentOrders/>
            <DashboardChart/>
        </Space>
    </Space>
    );
}

function DashboardCard({title, value, icon}){
    return(
        <Card>
            <Space>
                {icon}
                <Statistic title={title} value={value} />
            </Space>
        </Card>
    );
}

function RecentOrders(){
  
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true)
      getOrders().then((res)=>{
        setDataSource(res.products)
        setLoading(false)

      })
    
      
    }, [])
    

        return(
            < >
            <Typography.Text> Recent Orders </Typography.Text>
            <Table 
               columns={[
                {title:"Title",
                dataIndex: "title"
                },
                {
                    title:"Quantity",
                    dataIndex:"quantity",
                },
                {
                    title:"Price",
                    dataIndex:"discountedPrice"
                }

               ]} loading={loading}
                   dataSource={dataSource} 
                    pagination={false}
                   >
               
            </Table>
            </>
        )
}

function DashboardChart(){

    const [revenueData, setRevenueData] = useState({
        labels:[],
        datasets:[]
    })

    // getting labels and data from api
    useEffect(() => {
        getRevenue().then(res=>{
            const labels = res.carts.map((cart) =>{
                return `User-${cart.userId}`;
            })
            const data = res.carts.map((cart) =>{
                return cart.discountedTotal;
            })

           const  dataSource = {
                labels,
                datasets: [
                  {
                    label: 'revenue',
                    data: data,
                    backgroundColor: 'red',
                  }
                ],
              };

              setRevenueData(dataSource);
        })
    
     
    }, [])
    

 const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'Bottom', 
      },
      title: {
        display: true,
        text: 'Revenue',
      },
    },
  };

    return <Card style={{height:350, width:700}} > 
    <Bar options={options} data={revenueData} /> 
    </Card> 
}

