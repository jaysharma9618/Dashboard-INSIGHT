import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { subscriberData } from "../data/mockData";
import Card, { OutlineBtn } from "../components/Card";

// Color Tuesday purple, everything else light lavender
const CustomBar = ({ x, y, width, height, payload }) => (
  <rect x={x} y={y} width={width} height={height} rx={6} ry={6}
    fill={payload?.day === "Tue" ? "#5347CE" : "#E8E9FD"} />
);

export default function SubscriberChart() {
  return (
    <Card
      title={
        <div>
          <p className="text-sm font-semibold text-gray-700">Total Subscriber</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">24,473</p>
          <span className="text-xs font-semibold text-green-500 bg-green-50 px-2 py-0.5 rounded-full">+3.3%</span>
          <span className="text-xs text-gray-400 ml-2">+749 increased</span>
        </div>
      }
      action={<OutlineBtn>Weekly ↓</OutlineBtn>}
    >
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={subscriberData} barSize={70}>
          <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: "#9CA3AF" }} axisLine={false} tickLine={false} width={36} />
          <Tooltip contentStyle={{ borderRadius: "10px", border: "1px solid #F3F4F6", fontSize: 12 }} cursor={{ fill: "#F9FAFB" }} />
          <Bar dataKey="value" shape={<CustomBar />} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
