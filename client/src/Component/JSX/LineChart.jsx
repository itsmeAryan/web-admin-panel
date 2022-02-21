import React from 'react';
import {
    ResponsiveContainer as Container, LineChart as LinChart, Line as Lin, XAxis, YAxis,
    CartesianGrid,Legend,Tooltip
} from "recharts"
import "../Css/LineChart.css"
function LineChart({title,data,datakey,grid}) {
    const ldata = [
        {
            name: "backend dev",
            student: 23, fees: 40, id: 1
        },
        {
            name: "front dev",
            student: 2, fees: 10, id: 2
        },
        {
            name: "android dev",
            student: 45, fees: 30, id: 3
        },
        {
            name: "software dev",
            student: 40, fees: 50, id: 4
        },
        {
            name: "web dev",
            student: 100, fees: 20, id: 5
        },
        {
            name: "full stack",
            student: 30, fees: 45, id: 6
        },]
  return <div className='chart'>
     <h3 className="chatTitle">{title}</h3>
     <Container width="100%" aspect={4/1}>
<LinChart data={data}>
    {grid&&
<CartesianGrid stroke={"#e0dfdf"}  strokeDasharray={"2"} />
    }
                    <XAxis dataKey={grid} stroke={"#5550bd"} />
                    {/* <YAxis /> */}
                    <Tooltip contentStyle={{backgroundColor:"ButtonFace"}}/>
                    <Legend   / >
                    <Lin   dataKey={datakey} stroke={"red"} activeDot={{r:5}} />
</LinChart >
     </Container>
  </div>;
}

export default LineChart;
{/* function Line(props) {
    const ldata = [
        {
            name: "backend dev",
            student: 23, fees: 40, id: 1
        },
        {
            name: "front dev",
            student: 2, fees: 10, id: 2
        },
        {
            name: "android dev",
            student: 45, fees: 30, id: 3
        },
        {
            name: "software dev",
            student: 40, fees: 50, id: 4
        },
        {
            name: "web dev",
            student: 100, fees: 20, id: 5
        },
        {
            name: "full stack",
            student: 30, fees: 45, id: 6
        },]
    return (
        <div>

            <h1>hello i'm Line
            </h1>
            <Container width={"100%"} aspect={3}>
                <LinChart layout='horizontal' data={ldata} width={200} height={200} margin={{ top: 5, right: 100, bottom: 45 }} >
                   <CartesianGrid horizontal={false} strokeDasharray={"2"} />
                    <XAxis tickFormatter={(value)=> value+" pro"} dataKey={"name"} interval={"preserveStartEnd"} />
                    <YAxis />
                    <Tooltip contentStyle={{backgroundColor:"ButtonFace"}}/>
                    <Legend   / >
                    <Lin  type={"stepBefore"} dataKey={"student"} stroke={"red"} activeDot={{r:5}} />
                    <Lin type={"monotone"}  dataKey={"fees"} stroke={"green"}  activeDot={{r:5}}/>


                </LinChart>
            </Container>

        </div>
    );
} */}

