import React from 'react';
import { Bar } from "react-chartjs-2";

const BarData = () => {
    return (
        <div>
            <Bar data={{ 
                labels: ['March', 'April', 'May', 'June', 'July', 'August'],
                datasets: [
                {
                    label: "Quantity",
                    data: [15, 25, 8, 10, 7, 10],
                    backgroundColor: ["#0099cc", "#33cccc", "#006699", "#00ffcc", "#ff6699", "#ff6666"],
                    borderWidth: 0
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
                        text: 'Our Cure Progress'
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
            ></Bar>
        </div>
    );
};

export default BarData;