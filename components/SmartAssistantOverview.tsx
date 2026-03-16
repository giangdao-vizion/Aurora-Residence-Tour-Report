
import React from 'react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
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
  PieChart, 
  Pie,
  Legend
} from 'recharts';
import { 
  SMART_ASSISTANT_KPIS, 
  CHAT_SESSIONS_TREND, 
  MESSAGES_PER_SESSION, 
  CHAT_DURATION_TREND, 
  CONVERSATION_FUNNEL, 
  QUESTION_CATEGORIES, 
  INTENT_DISTRIBUTION, 
  UNANSWERED_QUESTIONS, 
  LEAD_CONVERSION_FUNNEL, 
  CTA_PERFORMANCE, 
  CHAT_TRIGGER_LOCATIONS, 
  QUESTIONS_BY_LOCATION 
} from '../constants';
import KpiCard from './KpiCard';
import ChartContainer from './ChartContainer';
import InfoTooltip from './InfoTooltip';

const COLORS = ['#ba8c44', '#8b5cf6', '#3b82f6', '#f59e0b', '#10b981', '#6366f1', '#f43f5e'];

const SmartAssistantOverview: React.FC = () => {
  return (
    <div className="space-y-6 lg:space-y-8 animate-in fade-in duration-500">
      <header>
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Smart Assistant Overview</h2>
        <p className="text-sm lg:text-base text-slate-500">Chatbot performance and user interaction analytics.</p>
      </header>

      {/* KPI Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
        {SMART_ASSISTANT_KPIS.map((kpi, idx) => (
          <KpiCard key={idx} data={kpi} />
        ))}
      </div>

      {/* SECTION 1 — Usage Trends */}
      <div className="grid grid-cols-1 gap-6">
        <ChartContainer 
          title="Chat Sessions Over Time" 
          description="Daily chat volume"
          tooltip="Tracks the total number of chat interactions initiated by users each day. Spikes often correlate with marketing campaigns or high tour traffic."
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={CHAT_SESSIONS_TREND}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
              <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
              <Line type="monotone" dataKey="sessions" stroke="#ba8c44" strokeWidth={3} dot={{ r: 4, fill: '#ba8c44' }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      {/* SECTION 2 — Engagement */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChartContainer 
          title="Messages Per Session" 
          description="Distribution of conversation length"
          tooltip="Shows how many messages users typically exchange with the assistant. Longer conversations usually indicate higher engagement or complex inquiries."
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={MESSAGES_PER_SESSION}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
              <Tooltip cursor={{fill: 'transparent'}} />
              <Bar dataKey="count" fill="#ba8c44" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        <ChartContainer 
          title="Avg Chat Duration" 
          description="Average seconds per session"
          tooltip="The average time a user spends in a chat session. This helps measure the quality of interaction and how quickly users find the information they need."
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={CHAT_DURATION_TREND}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
              <Tooltip />
              <Line type="monotone" dataKey="duration" stroke="#8b5cf6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>

        <ChartContainer 
          title="Conversation Drop-off" 
          description="User journey through chat"
          tooltip="Visualizes the funnel of user engagement from opening the chat to completing a key action like scheduling a viewing."
        >
          <ResponsiveContainer width="100%" height="100%">
            <FunnelChart>
              <Tooltip />
              <Funnel dataKey="value" data={CONVERSATION_FUNNEL} isAnimationActive>
                <LabelList position="right" fill="#94a3b8" stroke="none" dataKey="name" fontSize={10} />
                {CONVERSATION_FUNNEL.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} opacity={0.8} />
                ))}
              </Funnel>
            </FunnelChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      {/* SECTION 3 — User Intent */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer 
          title="Top Question Categories" 
          description="Most frequent topics"
          tooltip="Categorizes user questions to identify what information is most sought after (e.g., Pricing, Amenities, Location)."
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={QUESTION_CATEGORIES} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 11}} width={100} />
              <Tooltip cursor={{fill: 'transparent'}} />
              <Bar dataKey="value" fill="#ba8c44" radius={[0, 4, 4, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        <ChartContainer 
          title="Intent Distribution" 
          description="User goal analysis"
          tooltip="Breaks down the primary goal of the user's interaction, such as Information Gathering, Support, or Lead Generation."
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={INTENT_DISTRIBUTION} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value" label>
                {INTENT_DISTRIBUTION.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm">
        <div className="p-5 lg:p-6 border-b border-slate-50">
          <h3 className="text-base lg:text-lg font-bold text-slate-900">Unanswered Questions</h3>
          <p className="text-xs text-slate-500">Questions the assistant couldn't confidently answer.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                <th className="px-6 py-4">Question</th>
                <th className="px-6 py-4">Frequency</th>
                <th className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    Confidence Score
                    <InfoTooltip position="bottom" content="AI's certainty level in its response. Scores below 0.5 may indicate a need for better training data." />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {UNANSWERED_QUESTIONS.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-slate-700 font-medium">{row.question}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{row.frequency}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-red-400 h-full" style={{width: `${row.confidence * 100}%`}}></div>
                      </div>
                      <span className="text-xs font-bold text-red-500">{row.confidence}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 4 — Lead Conversion */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer 
          title="Lead Conversion Funnel" 
          description="Chat to booking conversion"
          tooltip="Tracks the conversion rate from initial chat engagement to successful lead generation (e.g., contact info submitted)."
        >
          <ResponsiveContainer width="100%" height="100%">
            <FunnelChart>
              <Tooltip />
              <Funnel dataKey="value" data={LEAD_CONVERSION_FUNNEL} isAnimationActive>
                <LabelList position="right" fill="#94a3b8" stroke="none" dataKey="name" fontSize={10} />
                {LEAD_CONVERSION_FUNNEL.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[(index + 2) % COLORS.length]} opacity={0.8} />
                ))}
              </Funnel>
            </FunnelChart>
          </ResponsiveContainer>
        </ChartContainer>

        <ChartContainer 
          title="CTA Click Performance" 
          description="Engagement with call-to-actions"
          tooltip="Measures how many times users clicked on specific Call-To-Action buttons within the chat interface."
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={CTA_PERFORMANCE}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
              <Tooltip cursor={{fill: 'transparent'}} />
              <Bar dataKey="value" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      {/* SECTION 5 — 3D Tour Context */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer 
          title="Chat Trigger Location" 
          description="Where users start chats inside the tour"
          tooltip="Identifies the specific 3D tour locations (e.g., BBQ area, Studio) where users are most likely to initiate a chat."
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={CHAT_TRIGGER_LOCATIONS} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 11}} width={100} />
              <Tooltip cursor={{fill: 'transparent'}} />
              <Bar dataKey="value" fill="#ba8c44" radius={[0, 4, 4, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm">
          <div className="p-5 lg:p-6 border-b border-slate-50">
            <h3 className="text-base lg:text-lg font-bold text-slate-900">Questions by Location</h3>
            <p className="text-xs text-slate-500">Contextual questions based on user location.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                  <th className="px-6 py-4">Location</th>
                  <th className="px-6 py-4">Top Question</th>
                  <th className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      Frequency
                      <InfoTooltip position="bottom" content="Number of times this specific question was asked while the user was at this location." />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {QUESTIONS_BY_LOCATION.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-slate-900 font-bold">{row.location}</td>
                    <td className="px-6 py-4 text-sm text-slate-600 italic">"{row.topQuestion}"</td>
                    <td className="px-6 py-4 text-sm text-slate-600 font-medium">{row.frequency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartAssistantOverview;
