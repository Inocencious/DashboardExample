import { RadialBar, RadialBarChart, Legend, ResponsiveContainer, Text } from "recharts"

const data = [
    {
      "name": "Car",
      "uv": 100,
      "pv": 2400,
      "fill": "#8884d8"
    },
    {
      "name": "House",
      "uv": 75,
      "pv": 4567,
      "fill": "#83a6ed"
    },
    {
      "name": "Phone",
      "uv": 50,
      "pv": 1398,
      "fill": "#8dd1e1"
    },
    {
      "name": "Accessories",
      "uv": 25,
      "pv": 9800,
      "fill": "#82ca9d"
    },
  ]

const SavingGoal = () => {
    return(
        <ResponsiveContainer height={300} width="100%" >
            <RadialBarChart  margin={{bottom:50}}
            innerRadius="10%" 
            outerRadius="80%" 
            data={data} 
            startAngle={180} 
            endAngle={-180}
            >
            <RadialBar label={{ fill: '#666', position: 'insideStart' }} background dataKey='uv' />
            <Legend verticalAlign="bottom" height={15} iconSize={5}/> 
            <Text scaleToFit={true}></Text>  
        </RadialBarChart>
        </ResponsiveContainer>
        
    )
}

export default SavingGoal