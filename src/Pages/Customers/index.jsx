import { Avatar, Space, Table, Typography } from "antd";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getInventory, getOrders, getUsers } from "../../API";



export default function Customers(){

    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {

      setLoading(true);
      getUsers().then((res) =>{
        setDataSource(res.users)
        setLoading(false);
      })
    
    }, [])
    

    return (
    <Space direction="vertical">
        <Typography.Title level={6}>Customers</Typography.Title>
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
                title:"Photo",
                dataIndex:'image',
                render:(link)=>{
                    return <Avatar src={link} />
                }
            },
         
            {
                title:"F-Name",
                dataIndex:'firstName',
               
            },
          
            {
                title:"L-Name",
                dataIndex:'lastName'
            },
            {
                title:"Email",
                dataIndex:"email"
            },
            {
                title:"Phone .No",
                dataIndex:"phone"
            },
            {
                title:"Address",
                dataIndex:"address",
                render:(address)=><span>{address.address}, {address.city}</span>
            }
           
                
        ]}
            dataSource={dataSource}
         
            style={{height:1000, width:1100}}
            pagination={{className:"pagiStyle"}}
        ></Table>
    </Space>
    );
}

