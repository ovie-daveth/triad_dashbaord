import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const data = [
  {
    name: 'Jan',
    total: 10,
  },
  {
    name: 'Feb',
    total: 20,
  },
  {
    name: 'Mar',
    total: 10,
  },
  {
    name: 'Apr',
    total: 50,
  },
  {
    name: 'May',
    total: 5,
  },
  {
    name: 'Jun',
    total: 70,
  },
  {
    name: 'Jul',
    total: 35,
  },
  {
    name: 'Aug',
    total: 40,
  },
  {
    name: 'Sep',
    total: 10,
  },
  {
    name: 'Oct',
    total: 10,
  },
  {
    name: 'Nov',
    total: 12,
  },
  {
    name: 'Dec',
    total: 19,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width='100%' height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey='name'
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar
          dataKey='total'
          fill='currentColor'
          radius={[4, 4, 0, 0]}
          className='fill-primary'
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
