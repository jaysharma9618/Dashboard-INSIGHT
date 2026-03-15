import { Eye, DollarSign, TrendingDown, TrendingUp } from "lucide-react";

const ICONS = {
  "Page Views":    Eye,
  "Total Revenue": DollarSign,
  "Bounce Rate":   TrendingDown,
};

export default function StatCard({ title, value, change, isNegative }) {
  const Icon = ICONS[title] || TrendingUp;
  const up   = !isNegative;

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-brand-purple/10 flex items-center justify-center">
          <Icon size={14} className="text-brand-purple" />
        </div>
        <span className="text-sm text-gray-500">{title}</span>
      </div>

      <div className="flex items-end justify-between">
        <span className="text-3xl font-bold text-gray-900">{value}</span>
        <span className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${up ? "bg-green-50 text-green-600" : "bg-red-50 text-red-500"}`}>
          {up ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
          {change}
        </span>
      </div>
    </div>
  );
}
