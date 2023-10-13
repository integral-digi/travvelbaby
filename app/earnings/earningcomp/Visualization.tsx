"use client"
import { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

interface tabDataProps {
  id: number;
  name: string;
  value: number;
}

const tabData: tabDataProps[] = [
  { id: 1, name: "Profile Views", value: 13000 },
  { id: 2, name: "Subscribers", value: 10000 },
  { id: 3, name: "Donations", value: 5000 },
  { id: 4, name: "Referrals", value: 4000 },
  { id: 5 ,name: "Impressions", value: 3000 },
];

const data = [
  ["Time", "Earnings", "Post Views"],
  ["12am", 0, 32],
  ["2am", 10, 5],
  ["4am", 23, 0],
  ["6am", 17, 25],
  ["8am", 18, 12],
  ["10am", 9, 0],
  ["12pm", 11, 150],
  ["2pm", 27, 45],
  ["4pm", 33, 65],
  ["6pm", 40, 35],
  ["8pm", 32, 99],
  ["10pm", 35, 28],
];

const options = {
  chartArea: { width: "100%", height: "100%" },
  hAxis: { title: "", titleTextStyle: { color: "#333" } },
  legend: { position: "none" },
  line: { color: "#ECF3FD", lineWidth: 0 },
  colors: ['#1A73E8', '#5F9DEF', '#ECF3FD', '#EBEDED', '#EBEDED'],
  crosshair: { trigger: "both", color: "#EBEDED" },
  vAxis: {
    title: "",
    titleTextStyle: { color: "#333" },
    gridlines: { color: "#EBEDED" },
  },
  series: {
    0: { curveType: "function" },
    1: { curveType: "function" },
  },
  curveType: "function",
  lineWidth: 2,
  dataOpacity: 0.8,
  enableInteractivity: true,
  tooltip: { isHtml: true },
  animation: {
    duration: 1000,
    easing: "out",
    startup: true,
  },
};

const Visualization = () => {
  const [isRendered, setIsRendered] = useState(false);


  useEffect(() => {
    setIsRendered(true);
  }, []);

  if (!isRendered) {
    return null;
  }

  return (
    <div className="visualization w-full space-y-4">
      <div className='flex items-center justify-between w-full'>
        {tabData.map((tab, index) => (
          <div key={index} className="block space-y-4 w-max">
            <p className="text-stone-500 text-sm text-center font-normal">{tab.name}</p>
            {tab.id === 3 ? <p className="text-zinc-800  text-center text-xl font-secondary">${tab.value}</p> : <p className="text-zinc-800 text-xl text-center font-secondary">{tab.value}</p>}
          </div>
        ))}
      </div>
      <div className="block space-y-4 w-full">
        <div id="chart" className="w-full h-auto">
          <Chart
            chartType="AreaChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

export default Visualization;