import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { salesOverview } from "../data/mockData";
import Card, { OutlineBtn } from "../components/Card";

const SERIES = [
  { key: "china",  name: "China",  color: "#5347CE" },
  { key: "europe", name: "Europe", color: "#887CFD" },
  { key: "us",     name: "US",     color: "#4896FE" },
  { key: "canada", name: "Canada", color: "#16C8C7" },
  { key: "other",  name: "Other",  color: "#C7D2FE" },
];

export default function SalesOverviewChart() {
  return (
    <Card>
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Sales Overview</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">$9,257.51</p>
          <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">▲ 15.8%</span>
          <span className="text-xs text-gray-400 ml-2">+$143.50 vs last period</span>
        </div>
        <div className="flex gap-2">
          <OutlineBtn>Filter</OutlineBtn>
          <OutlineBtn>↕ Sort</OutlineBtn>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={230}>
        <BarChart data={salesOverview} barSize={64} barCategoryGap="22%">
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
          <YAxis tickFormatter={(v) => v >= 1000 ? `${v / 1000}k` : v} tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} width={32} />
          <Tooltip cursor={{ fill: "#F9FAFB", radius: 6 }} />
          <Legend iconType="circle" iconSize={7} wrapperStyle={{ fontSize: 11, paddingTop: 14, color: "#6B7280" }} />
          {SERIES.map(({ key, name, color }, i) => (
            <Bar
              key={key} dataKey={key} name={name} stackId="a" fill={color}
              radius={i === SERIES.length - 1 ? [4, 4, 0, 0] : i === 0 ? [0, 0, 3, 3] : [0, 0, 0, 0]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
