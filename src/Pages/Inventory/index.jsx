import { Card, Space, Statistic, Table, Typography } from "antd";
import { useState, useEffect } from "react";
import { getInventory } from "../../API";

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Inventory(){

    return (
        <>

<Typography.Title level={4} >Inventory</Typography.Title>
         <Space size={1} direction="horizontal">
      <Space>
          <InventryTable/>
      </Space>
      <Space>
      <InventoryChart  />
      </Space>
  </Space>
    </>
    );
}

  function InventryTable(){

    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([])

    useEffect(() => {

      setLoading(true);
      getInventory().then((res) =>{
        setDataSource(res.products)
        setLoading(false);
      })
    
    }, [])

            return (
                <>
     
        <Table 
            loading={loading}
            columns={[
        
                {
                title:"Title",
                dataIndex:'title'
            },
        
            {
                title:"Stock",
                dataIndex:'stock',
               
            },
          
            {
                title:"Brand",
                dataIndex:'brand'
            },
         
                
        ]}
            dataSource={dataSource}
         
            style={{height:1000, width:600}}
            pagination={{className:"pagiStyle"}}
            className='InventoryTable'
        ></Table>
                </>
            );
  }

   function InventoryChart(){

const data = {
    labels: ['Lord - Al-Rehab', 'Apple', 'Flying Wooden','Microsoft Surface'], 
    datasets: [
      {
        label: 'Available Stock',
        data: [105, 140,17,68],
        backgroundColor: [
          '#ADD8E6',
          '#90EE90',
          '#CD5C5C',
          '#EEE8AA'
          
        ],
        borderColor: [
          '#ADD8E6',
          '#228B22',
          '#CD5C5C',
          '#EEE8AA'
        ],
        borderWidth: 1,
      },
    ],
  };

  return ( <Card style={{height:450, width:450}} className="Inventorychart" > 
             <Doughnut data={data}  /> 
           </Card>
         )
   }




