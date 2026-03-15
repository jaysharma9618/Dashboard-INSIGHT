import React, { useState } from 'react'
import { Menu, X, Calendar, Filter, Download, Bell } from "lucide-react";

 
import Sidebar from '../components/Sidebar'
import StatCard from '../components/StatCard'
import IntegrationTable from '../components/IntegrationTable'
import SalesOverviewChart from '../charts/SalesOverviewChart'
import SubscriberChart from '../charts/SubscriberChart'
import DistributionChart from '../charts/DistributionChart'


export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-[#F0F2F8] min-h-screen font-sans">
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar open={sidebarOpen} />

      <div className="flex-1 min-w-0 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-100 px-4 sm:px-6 py-3 flex items-center gap-3 sticky top-0 z-20">
          <button
            className="lg:hidden p-1.5 rounded-lg hover:bg-gray-100 text-gray-500"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          <h1 className="text-lg sm:text-xl font-bold text-gray-900">Dashboard</h1>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            {/* Date range — hidden on xs */}
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
              <Calendar size={13} className="text-gray-400" />
              <span>Oct 18 – Nov 18</span>
            </div>

            {/* Filter */}
            <button className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-100 transition-colors">
              <Filter size={13} />
              Filter
            </button>

            {/* Export */}
            <button className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-white bg-brand-purple rounded-lg px-3 py-1.5 hover:bg-brand-purple/90 transition-colors">
              <Download size={13} />
              Export
            </button>

            {/* Notification */}
            <button className="relative p-1.5 rounded-lg hover:bg-gray-100 text-gray-500">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-brand-blue rounded-full" />
            </button>

            {/* Avatar */}
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-linear-to-br from-brand-purple to-brand-lavender flex items-center justify-center text-white text-xs font-bold">
                YA
              </div>
              <div className="hidden sm:block">
                <p className="text-xs font-semibold text-gray-800 leading-tight">Young Alaska</p>
                <p className="text-[10px] text-gray-400">Business</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="p-3 sm:p-5 lg:p-6 flex flex-col gap-4 sm:gap-5">
          {/* Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
            <StatCard title="Page Views"    value="12,450"  change="15.8%" />
            <StatCard title="Total Revenue" value="$363.95" change="34.0%" />
            <StatCard title="Bounce Rate"   value="86.5%"   change="24.2%" isNegative />
          </div>

          {/* Charts row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
            <SalesOverviewChart />
            <SubscriberChart />
          </div>

          {/* Charts row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
            <DistributionChart />
            <IntegrationTable />
          </div>
        </main>
      </div>
    </div>
  );
}