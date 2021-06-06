import React from 'react';
import { Pie } from "react-chartjs-2";

const PieData = () => {
    return (
        <div>
           <Pie data={{ 
                labels: ['March', 'April', 'May', 'June', 'July', 'August'],
                datasets: [
                {
                    label: "People We Served",
                    data: [15, 25, 8, 10, 7, 10],
                    backgroundColor: ["#0099cc", "#33cccc", "#006699", "#00ffcc", "#ff6699", "#ff6666"],
                }
            ]
            }} 
            height={400} 
            width={600}
            options={{
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'COVID-19 Vaccine Complete'
                    }
                },
                scales: {
                    x: {
                        grid: {
                          display: false
                        }
                      },
                    y: {
                        grid: {
                            display: false
                          },
                        beginAtZero: true
                    }
                }
            }}
            ></Pie> 
        </div>
    );
};

export default PieData;