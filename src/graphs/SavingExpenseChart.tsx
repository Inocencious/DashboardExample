import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
    {
      "name": "Jan",
      "expense": 4000,
      "saving": 2400,
      "amt": 2400
    },
    {
      "name": "Feb",
      "expense": 3000,
      "saving": 1398,
      "amt": 2210
    },
    {
      "name": "Mar",
      "expense": 2000,
      "saving": 9800,
      "amt": 2290
    },
    {
      "name": "Apr",
      "expense": 2780,
      "saving": 3908,
      "amt": 2000
    },
    {
      "name": "May",
      "expense": 1890,
      "saving": 4800,
      "amt": 2181
    },
    {
      "name": "Jun",
      "expense": 2390,
      "saving": 3800,
      "amt": 2500
    },
    {
      "name": "Jul",
      "expense": 3490,
      "saving": 4300,
      "amt": 2100
    },
    {
      "name": "Aug",
      "expense": 2450,
      "saving": 1350,
      "amt": 2100
    },
    {
      "name": "Sept",
      "expense": 2000,
      "saving": 5000,
      "amt": 2100
    },
    {
      "name": "Oct",
      "expense": 1200,
      "saving": 4500,
      "amt": 2100
    },
    {
      "name": "Nov",
      "expense": 3490,
      "saving": 6300,
      "amt": 2100
    }
    ,
    {
      "name": "Dec",
      "expense": 2490,
      "saving": 2300,
      "amt": 2100
    }
  ]

const SavingExpenseChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
        <AreaChart margin={{top:50, right:20}}
      data={data}
    >
      <defs>
        <linearGradient id="colorexpense" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#f60100" stopOpacity={0.5} />
          <stop offset="95%" stopColor="#f60100" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorsaving" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.5} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="expense"
        stroke="#f60100"
        fillOpacity={1}
        fill="url(#colorexpense)"
      />
      <Area
        type="monotone"
        dataKey="saving"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorsaving)"
      />
    </AreaChart>
    </ResponsiveContainer>
    
  );
};

export default SavingExpenseChart;
