
import React from 'react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  BarChart, 
  Bar, 
  FunnelChart, 
  Funnel, 
  LabelList, 
  Cell,
  ComposedChart,
  Line,
  Legend
} from 'recharts';
import { 
  OVERVIEW_KPIS, 
  TRAFFIC_TREND, 
  PAGE_VIEWS, 
  ENGAGEMENT_FUNNEL, 
  MOST_VIEWED_SECTIONS,
  AMENITY_POPULARITY,
  AMENITY_TIME_SPENT,
  FLOORPLAN_VIEWS,
  SHOWHOUSE_STATS,
  CONVERSION_TABLE
} from '../constants';
import KpiCard from './KpiCard';
import ChartContainer from './ChartContainer';
import InfoTooltip from './InfoTooltip';

const COLORS = ['#ba8c44', '#8b5cf6', '#3b82f6', '#f59e0b', '#10b981', '#6366f1', '#f43f5e'];

const TourOverview: React.FC = () => {
  return (
    <div className="space-y-8 lg:space-y-12 animate-in fade-in duration-500 pb-12">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">3D Tour Overview</h2>
          <p className="text-sm lg:text-base text-slate-500">Comprehensive performance metrics for Aurora Residence.</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs lg:text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-all">
            <i className="fa-solid fa-calendar mr-2"></i> Last 30 Days
          </button>
          <button className="flex-1 sm:flex-none px-4 py-2 bg-[#ba8c44] text-white rounded-xl text-xs lg:text-sm font-bold shadow-lg shadow-[#ba8c44]/20 hover:bg-[#a67b3a] transition-all">
            <i className="fa-solid fa-download mr-2"></i> Export Report
          </button>
        </div>
      </header>

      {/* KPI Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
        {OVERVIEW_KPIS.map((kpi, idx) => (
          <KpiCard key={idx} data={kpi} />
        ))}
      </div>

      {/* Section 1: Traffic & Engagement */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-slate-800 border-l-4 border-[#ba8c44] pl-4">Traffic & Engagement</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ChartContainer 
              title="Traffic Trend" 
              description="Daily visitors over the last week"
              tooltip="Visualizes the daily volume of unique visitors to the 3D tour. Helps identify peak traffic days and the impact of marketing activities."
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={TRAFFIC_TREND}>
                  <defs>
                    <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ba8c44" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#ba8c44" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
                  <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                  <Area type="monotone" dataKey="visits" stroke="#ba8c44" strokeWidth={3} fillOpacity={1} fill="url(#colorVisits)" />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
          <div>
            <ChartContainer 
              title="Page Views" 
              description="Views by section"
              tooltip="Breakdown of views across different sections of the tour. Useful for understanding which areas (e.g., Master Plan, Amenities) attract the most interest."
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={PAGE_VIEWS} layout="vertical" margin={{ left: -10, right: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 9}} width={100} />
                  <Tooltip cursor={{fill: 'transparent'}} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={15}>
                    {PAGE_VIEWS.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
      </section>

      {/* Section 2: Amenities & Floorplans */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-slate-800 border-l-4 border-[#ba8c44] pl-4">Amenities & Floorplans</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartContainer 
            title="Amenity Popularity" 
            description="Views vs Interactions"
            tooltip="Compares total views of each amenity against active interactions with hotspots. High views but low interactions might suggest a need for better hotspot placement."
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={AMENITY_POPULARITY} margin={{ left: -20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
                <Tooltip />
                <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{paddingBottom: 20, fontSize: 10}} />
                <Bar name="Total Views" dataKey="views" fill="#ba8c44" radius={[4, 4, 0, 0]} barSize={30} />
                <Bar name="Active Hotspots" dataKey="active" fill="#fbbf24" radius={[4, 4, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>

          <ChartContainer 
            title="Floorplan Engagement" 
            description="Views by unit type"
            tooltip="Tracks which unit types (e.g., Studio, 2BR) are being viewed most frequently in the floorplan section."
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={FLOORPLAN_VIEWS}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
                <Tooltip />
                <Bar dataKey="views" fill="#ba8c44" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </section>

      {/* Section 3: Show House Performance */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-slate-800 border-l-4 border-[#ba8c44] pl-4">Show House Performance</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ChartContainer title="Unit Performance" description="Views vs Leads vs Time" height="h-80 lg:h-96">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={SHOWHOUSE_STATS} margin={{ left: -20, right: -10 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
                  <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
                  <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
                  <Tooltip />
                  <Legend verticalAlign="top" align="right" wrapperStyle={{ fontSize: 10, paddingBottom: 10 }} />
                  <Bar yAxisId="left" name="Views" dataKey="views" fill="#ba8c44" radius={[4, 4, 0, 0]} barSize={20} />
                  <Bar yAxisId="left" name="Leads" dataKey="leads" fill="#fbbf24" radius={[4, 4, 0, 0]} barSize={20} />
                  <Line yAxisId="right" name="Avg Time (s)" type="monotone" dataKey="time" stroke="#f43f5e" strokeWidth={2} dot={{ r: 3 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-center">
            <h4 className="text-[10px] lg:text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Top Converting Unit</h4>
            <div className="flex items-center gap-4">
               <div className="w-14 h-14 lg:w-16 lg:h-16 bg-[#ba8c44]/10 rounded-xl flex items-center justify-center text-[#ba8c44] text-xl lg:text-2xl font-black">DX</div>
               <div>
                 <p className="text-base lg:text-lg font-bold text-slate-900 leading-tight">Duplex Loft</p>
                 <p className="text-[10px] lg:text-xs text-slate-400">4.58% Conversion Rate</p>
               </div>
            </div>
            <div className="mt-6 space-y-4">
              <div>
                <div className="flex justify-between text-[11px] mb-1.5">
                  <span className="text-slate-500">Engagement</span>
                  <span className="font-bold">High (92%)</span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#ba8c44] h-full w-[92%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[11px] mb-1.5">
                  <span className="text-slate-500">Retention</span>
                  <span className="font-bold">88%</span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[88%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm">
          <div className="p-5 lg:p-6 border-b border-slate-50">
            <h3 className="text-base lg:text-lg font-bold text-slate-900">Conversion Rates</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                  <th className="px-6 py-4">Unit Type</th>
                  <th className="px-6 py-4">Views</th>
                  <th className="px-6 py-4">Leads</th>
                  <th className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      CVR%
                      <InfoTooltip position="bottom" content="Conversion Rate: The percentage of viewers who clicked on a lead generation button (e.g., 'Book a Viewing')." />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {CONVERSION_TABLE.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-slate-900">{row.type}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{row.views.toLocaleString()}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{row.leads}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#ba8c44]/10 text-[#a67b3a]">
                        {row.cvr}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourOverview;
