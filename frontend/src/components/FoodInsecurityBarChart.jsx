/** @format */

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  LineChart,
  Line,
} from 'recharts';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

const boroughData = [
  { borough: 'Bronx', children: 36 },
  { borough: 'Brooklyn', children: 28 },
  { borough: 'Manhattan', children: 20 },
  { borough: 'Queens', children: 22 },
  { borough: 'Staten Island', children: 19 },
];

const pantryData = [
  { year: 2019, visits: 100 }, // baseline
  { year: 2020, visits: 140 }, // COVID spike
  { year: 2021, visits: 160 }, // rising
  { year: 2022, visits: 170 }, // stabilizing
  { year: 2023, visits: 185 }, // peak
  { year: 2024, visits: 190 }, // still growing slightly
];

export default function FoodInsecurityBarChart() {
  return (
    <Card className="w-[650px] p-4 bg-[#FFF7EC] ml-auto mr-0 md:ml-16">
      <CardHeader>
        <CardTitle>Child Hunger by Borough</CardTitle>
        <CardDescription>
          Percent of children experiencing food insecurity
        </CardDescription>
      </CardHeader>
      <CardContent>
        <section className="mb-8">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={boroughData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="borough" stroke="#685044" />
              <YAxis unit="%" stroke="#685044" />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="children"
                fill="#519e8a"
                activeBar={{ fill: '#417F6D' }}
                name="Child Hunger Rate"
              />
            </BarChart>
          </ResponsiveContainer>
        </section>
        <br />
        <br />
        <br />
        <section>
          <CardTitle>Pantry Visits Over Time</CardTitle>
          <CardDescription>
            Tracks the rise in food pantry usage in NYC, showing sustained
            demand since the COVID-19 pandemic.
          </CardDescription>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={pantryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" stroke="#685044" />
              <YAxis stroke="#685044" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="visits"
                stroke="#FFC9B9"
                strokeWidth={3}
                activeDot={{ r: 6 }}
                name="Pantry Visits"
              />
            </LineChart>
          </ResponsiveContainer>
        </section>
      </CardContent>
    </Card>
  );
}
