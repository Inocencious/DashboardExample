import {ResponsiveContainer, LineChart, Line} from 'recharts';
const data = [
    { month: 'Jan', saving: 0, expense: 800 },
    { month: 'Feb', saving: 1000, expense: 700 },
    { month: 'Mar', saving: 1100, expense: 600 },
    { month: 'Apr', saving: 1400, expense: 750 },
    { month: 'May', saving: 1500, expense: 650 },
    { month: 'Jun', saving: 1600, expense: 500 },
    { month: 'Jul', saving: 1500, expense: 550 },
    { month: 'Aug', saving: 1900, expense: 700 },
    { month: 'Sep', saving: 2000, expense: 600 },
    { month: 'Oct', saving: 2400, expense: 650 },
    { month: 'Nov', saving: 2800, expense: 800 },
    { month: 'Dec', saving: 3100, expense: 900 }
  ]  
  ;

const SavingsOverTime = () => {
    return(
        
        <ResponsiveContainer width="100%" height={100}>
        <LineChart data={data}>
            <Line dot={false} type="monotone" dataKey="saving" stroke="#008000"  />
        </LineChart>
        </ResponsiveContainer>
        
        

    )
}

export default SavingsOverTime
  