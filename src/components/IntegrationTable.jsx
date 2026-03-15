import { integrations } from "../data/mockData";
import Card from "./Card";

const APP_COLORS = {
  Stripe:  { bg: "#635BFF", label: "S"  },
  Zapier:  { bg: "#FF4A00", label: "Z"  },
  Shopify: { bg: "#96BF48", label: "Sh" },
};

export default function IntegrationTable() {
  return (
    <Card
      title="List of Integration"
      action={<button className="text-xs font-semibold text-brand-purple hover:underline">See All</button>}
    >
      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <table className="w-full text-sm min-w-100">
          <thead>
            <tr className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">
              <th className="text-left pb-3 pl-4 sm:pl-0">Application</th>
              <th className="text-left pb-3">Type</th>
              <th className="text-left pb-3">Rate</th>
              <th className="text-left pb-3 pr-5 sm:pr-0">Profit</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-50">
            {integrations.map((item, i) => {
              const app = APP_COLORS[item.app] ?? { bg: "#5347CE", label: item.app[0] };
              return (
                <tr key={i}>
                  <td className="py-4 pl-4 sm:pl-0">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[10px] font-bold" style={{ background: app.bg }}>
                        {app.label}
                      </div>
                      <span className="font-semibold text-gray-800">{item.app}</span>
                    </div>
                  </td>
                  <td className="py-4 text-gray-500 text-xs">{item.type}</td>
                  <td className="py-4 w-36">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-100 h-1.5 rounded-full">
                        <div className="h-1.5 rounded-full" style={{ width: `${item.rate}%`, background: "linear-gradient(90deg,#5347CE,#887CFD)" }} />
                      </div>
                      <span className="text-xs text-gray-400 w-7">{item.rate}%</span>
                    </div>
                  </td>
                  <td className="py-4 font-semibold text-gray-800 pr-4 sm:pr-0">{item.profit}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
