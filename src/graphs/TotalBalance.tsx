import {ResponsiveContainer, LineChart, Line} from 'recharts';
const data = [
    { month: 'Jan', totalSaving: 0 },
    { month: 'Feb', totalSaving: 1200 },
    { month: 'Mar', totalSaving: 1150 }, 
    { month: 'Apr', totalSaving: 1300 },
    { month: 'May', totalSaving: 1400 }, 
    { month: 'Jun', totalSaving: 1350 },
    { month: 'Jul', totalSaving: 1500 }, 
    { month: 'Aug', totalSaving: 1550 },
    { month: 'Sep', totalSaving: 1600 },
    { month: 'Oct', totalSaving: 1650 },
    { month: 'Nov', totalSaving: 1700 }, 
    { month: 'Dec', totalSaving: 1850 }
  ];
  

const TotalBalance = () => {
    return(
        
            <ResponsiveContainer width="100%" height={100}>
            <LineChart data={data}>
                <Line dot={false} type="monotone" dataKey="totalSaving" stroke="#008000"  />
            </LineChart>
            </ResponsiveContainer>
        
        

    )
}

export default TotalBalance
  