import { Avatar, Space, Table, Typography } from "antd";
import { useState, useEffect } from "react";
import { getInventory, getOrders } from "../../API";
 import SideMenu from "../../Components/SideMenu";


export default function Orders(){

    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {

      setLoading(true);
      getOrders().then((res) =>{
        setDataSource(res.products)
        setLoading(false);
      })
    
    }, [])
    

    return (
        
    <Space direction="vertical">
     
        <Typography.Title level={6}>Orders</Typography.Title>
        <Table 
            loading={loading}
            columns={[
                // {
                //     title:"Thumbnail",
                //     dataIndex:'thumbnail',
                //     render:(link)=>{
                //         return <Avatar src={link} />
                //     }
                // },
                {
                title:"Title",
                dataIndex:'title'
            },
            {
                title:"Price",
                dataIndex:'price',
                render:(value)=><span>${value}</span>
            },
            {
                title:"Quantity",
                dataIndex:'quantity',
               
            },
          
            {
                title:"Total",
                dataIndex:'total'
            },
           
                
        ]}
            dataSource={dataSource}
         
            style={{height:1000, width:1100}}
            pagination={false}
        ></Table>
    </Space>
    );
}

