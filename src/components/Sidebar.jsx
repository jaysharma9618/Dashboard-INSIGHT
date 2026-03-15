import { LayoutDashboard, CreditCard, Users, MessageCircle, Package, FileText, BarChart3, Zap, Settings, Shield, HelpCircle, Search, ChevronUp } from "lucide-react";

const NAV = [
  {
    group: "GENERAL",
    items: [
      { icon: LayoutDashboard, label: "Dashboard", active: true },
      { icon: CreditCard,      label: "Payment" },
      { icon: Users,           label: "Customers" },
      { icon: MessageCircle,   label: "Message", badge: "8" },
    ],
  },
  {
    group: "TOOLS",
    items: [
      { icon: Package,   label: "Product" },
      { icon: FileText,  label: "Invoice" },
      { icon: BarChart3, label: "Analytics" },
      { icon: Zap,       label: "Automation", tag: "BETA" },
    ],
  },
  {
    group: "SUPPORT",
    items: [
      { icon: Settings,   label: "Settings" },
      { icon: Shield,     label: "Security" },
      { icon: HelpCircle, label: "Help" },
    ],
  },
];

// A single nav item row
function NavItem({ icon: Icon, label, active, badge, tag }) {
  return (
    <div className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-sm transition-colors ${active ? "bg-brand-purple text-white font-semibold" : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"}`}>
      <Icon size={16} className="shrink-0" />
      <span className="flex-1">{label}</span>
      {badge && <span className="bg-brand-blue text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full">{badge}</span>}
      {tag   && <span className="bg-brand-lavender/20 text-brand-lavender text-[10px] font-semibold px-1.5 py-0.5 rounded">{tag}</span>}
    </div>
  );
}

export default function Sidebar({ open }) {
  return (
    <aside className={`bg-white border-r border-gray-100 flex flex-col z-40 overflow-y-auto fixed top-0 left-0 h-full w-64 transition-transform duration-300 lg:static lg:translate-x-0 lg:h-screen lg:shrink-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-5 border-b border-gray-100">
        <div className="w-7 h-7 rounded-md bg-brand-purple flex items-center justify-center">
          <Zap size={14} className="text-white" />
        </div>
        <span className="text-base font-bold text-gray-900">Whatomate</span>
      </div>

      {/* Search */}
      <div className="px-4 py-3">
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
          <Search size={14} className="text-gray-400 shrink-0" />
          <input type="text" placeholder="Search" className="bg-transparent text-sm text-gray-600 placeholder-gray-400 outline-none w-full" />
        </div>
      </div>

      {/* Nav groups */}
      <nav className="flex-1 px-3 pb-4 flex flex-col gap-4">
        {NAV.map(({ group, items }) => (
          <div key={group}>
            <p className="text-[10px] font-semibold text-gray-400 tracking-widest px-3 mb-1">{group}</p>
            <div className="flex flex-col gap-0.5">
              {items.map((item) => <NavItem key={item.label} {...item} />)}
            </div>
          </div>
        ))}
      </nav>

      {/* User footer */}
      <div className="border-t border-gray-100 px-4 py-3">
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-brand-purple to-brand-lavender flex items-center justify-center text-white text-xs font-bold shrink-0">TM</div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-800 truncate">Team</p>
            <p className="text-xs text-gray-400 truncate">Marketing</p>
          </div>
          <ChevronUp size={14} className="text-gray-400 shrink-0" />
        </div>
        <button className="mt-3 w-full py-2 rounded-lg border border-brand-purple text-brand-purple text-xs font-semibold hover:bg-brand-purple hover:text-white transition-colors">
          Upgrade Plan
        </button>
        <p className="text-[10px] text-gray-400 text-center mt-3">© 2023 Nexus.io Inc.</p>
      </div>
    </aside>
  );
}
