import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from "recharts";
import { salesDistribution, COLORS } from "../data/mockData";
import Card, { OutlineBtn } from "../components/Card";

export default function DistributionChart() {
  return (
    <Card title="Sales Distribution" action={<OutlineBtn>Monthly ↓</OutlineBtn>}>
      {/* Color legend */}
      <div className="flex flex-wrap gap-4 mb-2">
        {salesDistribution.map((item, i) => (
          <div key={item.name} className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: COLORS[i] }} />
            <span className="text-xs text-gray-500">{item.name}</span>
            <span className="text-xs font-semibold text-gray-800">${item.value.toFixed(2)}</span>
          </div>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={salesDistribution} dataKey="value" outerRadius="75%" innerRadius="45%" paddingAngle={3} strokeWidth={0}>
            {salesDistribution.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
          </Pie>
          <Tooltip formatter={(v) => [`$${v.toFixed(2)}`, ""]} contentStyle={{ borderRadius: "10px", border: "1px solid #F3F4F6", fontSize: 12 }} />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
}
